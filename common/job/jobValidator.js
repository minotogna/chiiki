const jobProperties = require('./jobProperties')
const R = require('ramda')

const validateJob = job =>
  R.reduce(validationPropsReducer(job), {valid: true}, jobProperties)

// reducer for props
const validationPropsReducer = job =>
  (validation, property) => {
    const validatorFns = property.validators

    return R.isNil(validatorFns) || R.isEmpty(validatorFns)
      ? validation
      : R.reduce(validationPropReducer(job, property), validation, validatorFns)
  }

// reducer for single prop
const validationPropReducer = (job, property) =>
  (validation, validatorFn) => R.apply(validatorFn, [job, property, validation])

module.exports = {
  validateJob
}


