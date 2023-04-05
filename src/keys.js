// Source: http://www.aamva.org/DL-ID-Card-Design-Standard/
// https://www.aamva.org/getmedia/99ac7057-0f4d-4461-b0a2-3a5532e1b35c/AAMVA-2020-DLID-Card-Design-Standard.pdf
// https://web.archive.org/web/20170803193959/http://www.aamva.org/DL-ID-Card-Design-Standard/

/* AAMVA Versions:
  - 00: or 0 prior to AAMVA DL/ID-2000
  - 01: AAMVA DL/ID-2000
    - date format: (CCYYMMDD)
  - 02: AAMVA Card Design Specification v1.0, dated 09-2003
    - date format: (MMDDCCYY)
  - 03: AAMVA Card Design Specification v2.0, dated 03-2005
    - date format: (MMDDCCYY for USA, CCYYMMDD for CAN)
  - 04: AAMVA Card Design Standard version 1.0, dated 07-2009
  - 05: AAMVA Card Design Standard version 1.0, dated 07-2010
  - 06: AAMVA Card Design Standard version 1.0, dated 07-2011
  - 07: AAMVA Card Design Standard version 1.0, dated 06-2012
  - 08: AAMVA Card Design Standard version 1.0, dated 08-2013
  - 09: AAMVA Card Design Standard version 1.0, dated 09-2016
  - 10: AAMVA Card Design Standard version 1.0, dated 10-2020
    - date format: (MMDDCCYY for USA, CCYYMMDD for CAN)

** field names (values of CodeToKey) that start with 'date' will be parsed as such
*/

exports.CodeToKey = {
  DCT: 'firstNameAndMiddleName',
  DAA: 'lastCommaFirstName',
  DCA: 'jurisdictionVehicleClass',
  DCB: 'jurisdictionRestrictionCodes',
  DCD: 'jurisdictionEndorsementCodes',
  DBA: 'dateOfExpiry',
  DCS: 'lastName',
  DAB: 'lastName',
  DAC: 'firstName',
  DAD: 'middleName',
  DBD: 'dateOfIssue',
  DBB: 'dateOfBirth',
  DBC: 'sex',
  DAY: 'eyeColor',
  DAU: 'height',
  DAG: 'addressStreet',
  DAL: 'addressStreet',
  DAI: 'addressCity',
  DAJ: 'addressState',
  DAK: 'addressPostalCode',
  DAQ: 'documentNumber',
  DCF: 'documentDiscriminator',
  DCG: 'issuer', // USA,CAN (ver 02: CDN)
  DDE: 'lastNameTruncated',
  DDF: 'firstNameTruncated',
  DDG: 'middleNameTruncated',
  // optional
  DAZ: 'hairColor',
  DAH: 'addressStreet2',
  DCI: 'placeOfBirth',
  DCJ: 'auditInformation',
  DCK: 'inventoryControlNumber',
  DBN: 'otherLastName',
  DBG: 'otherFirstName',
  DBS: 'otherSuffixName',
  DCU: 'nameSuffix', // e.g. jr, sr
  DCE: 'weightRange',
  DCL: 'race',
  DCM: 'standardVehicleClassification',
  DCN: 'standardEndorsementCode',
  DCO: 'standardRestrictionCode',
  DCP: 'jurisdictionVehicleClassificationDescription',
  DCQ: 'jurisdictionEndorsementCodeDescription',
  DCR: 'jurisdictionRestrictionCodeDescription',
  DDA: 'complianceType',
  DDB: 'dateCardRevised',
  DDC: 'dateOfExpiryHazmatEndorsement',
  DDD: 'limitedDurationDocumentIndicator',
  DAW: 'weightLb',
  DAX: 'weightKg',
  DDH: 'dateAge18',
  DDI: 'dateAge19',
  DDJ: 'dateAge21',
  DDK: 'organDonor',
  DDL: 'veteran',
}

// 01: AAMVA DL/ID-2000 and earlier
// date format: CCYYMMDD
exports.oldCodeToKey = {
  DAA: 'lastCommaFirstName',
  DAG: 'addressStreet',
  DAH: 'addressStreet2',
  DAI: 'addressCity',
  DAJ: 'addressState',
  DAK: 'addressPostalCode',
  DAQ: 'documentNumber',
  // DAR: 'classificationCode',
  // DAS: 'restrictionCode',
  // DAT: 'endorsementsCode',

  DBA: 'dateOfExpiry',
  DBB: 'dateOfBirth',
  DBC: 'sex',
  DBD: 'dateOfIssue',

  // optional
  DAB: 'lastName',
  DAC: 'firstName',
  DAU: 'height', // ft/in
  DAV: 'heightCm',
  DAW: 'weightLb',
  DAX: 'weightKg',
}
