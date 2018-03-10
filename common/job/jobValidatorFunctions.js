const R = require('ramda')

const addValidationStatus = (validation, prop, valid, error) => valid
  ? R.dissoc(prop.field, validation)
  : R.pipe(
    R.assoc(prop.field, {valid, error}),
    R.assoc('valid', false)
  )(validation)

const validationRequired = (job, prop, validation) => {
  const value = job[prop.field]
  const valid = !(R.isNil(value) || R.isEmpty(value))

  return addValidationStatus(validation, prop, valid, 'missinRequired')
}

module.exports = {
  validationRequired
}
