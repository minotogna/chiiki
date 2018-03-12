const R = require('ramda')

const addValidationStatus = (validation, prop, valid, error) => valid
  ? R.dissoc(prop.field, validation)
  : R.pipe(
    R.assoc(prop.field, {valid, error})
  )(validation)

const validationRequired = (job, prop, validation) => {
  const value = job[prop.field]
  const valid = !(R.isNil(value) || R.isEmpty(R.trim(value)))

  return addValidationStatus(validation, prop, valid, 'missingRequired')
}

module.exports = {
  validationRequired
}
