const CodeToKey = require('./keys').CodeToKey
const oldCodeToKey = require('./keys').oldCodeToKey

const lineSeparator = '\n'

const defaultOptions = { suppressErrors: false }

exports.parse = function parseCode128(str, options = defaultOptions) {
  let isPre2000 = false
  let version = null
  let started = false

  const props = {}
  const rawLines = str.trim().split(lineSeparator)
  const lines = rawLines.map((rawLine) => sanitizeData(rawLine))
  const getKey = (code) => {
    if (isPre2000) {
      return oldCodeToKey[code]
    }
    return CodeToKey[code]
  }
  const getDateFormat = (value, issuer) => {
    issuer = issuer || 'USA'
    if (isPre2000 || version < 2 || ['CAN', 'CDN'].includes(issuer)) {
      const [yyyy, mm, dd] = [value.slice(0, 4), value.slice(4, 6), value.slice(6)]
      return `${yyyy}-${mm}-${dd}`
    }
    const [mm, dd, yyyy] = [value.slice(0, 2), value.slice(2, 4), value.slice(4)]
    return `${yyyy}-${mm}-${dd}`
  }

  lines.slice(0, -1).forEach((line) => {
    if (!started) {
      if (line.indexOf('ANSI ') === 0) {
        started = true
        // get ansi version...
        version = parseInt(line.slice(11, 11 + 2))

        // has DLDAQ
        if (line.includes('DLDAQ')) {
          const lineArray = line.split('DLDAQ')
          line = 'DAQ' + lineArray[1]
        } else if (line.includes('DLDAA')) {
          let n = line.indexOf('DLDAA')
          line = line.slice(n + 2)
          isPre2000 = true
        } else {
          return
        }
      } else if (line.indexOf('AAMVA ') === 0) {
        started = true
        isPre2000 = true
        version = 0
        return
      } else {
        return
      }
    }

    let code = getCode(line)
    let value = getValue(line)
    let key = getKey(code)

    if (!key) {
      if (options.suppressErrors) {
        return
      } else {
        throw new Error('unknown code: ' + code)
      }
    }

    if (isSexField(code)) value = getSex(code, value)

    props[key] = value
  })

  if (version !== null) {
    props.version = version
  }
  props.issuer = props.issuer || 'USA'

  // now convert all the dates
  Object.keys(props).forEach((key) => {
    if (isDateField(key)) {
      props[key] = getDateFormat(props[key], props.issuer)
    }
  })

  return props
}

const sanitizeData = (rawLine) =>
  rawLine
    .match(/[\011\012\015\040-\177]*/g)
    .join('')
    .trim()

const getCode = (line) => line.slice(0, 3)
const getValue = (line) => line.slice(3)
const isSexField = (code) => code === 'DBC'

const getSex = (code, value) => (value === '1' ? 'M' : 'F')

const isDateField = (key) => key.indexOf('date') === 0
