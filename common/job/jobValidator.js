const jobProperties = require('./jobProperties')
const R = require('ramda')

const validateJob = job => validateProperties(job, {valid: true}, jobProperties)

const validateProperties = (job, validation, jobProperties) => R.reduce(validationPropsReducer(job), validation, jobProperties)

// reducer for props
const validationPropsReducer = job =>
  (validation, property) => {
    const validatorFns = property.validators

    return R.isNil(validatorFns) || R.isEmpty(validatorFns)
      ? validation
      : R.reduce(validationPropReducer(job, property), validation, validatorFns)
  }

// reducer for prop
const validationPropReducer = (job, property) =>
  (validation, validatorFn) => R.apply(validatorFn, [job, property, validation])

// utility method to update the validation of a single field
const validateJobField = (job, validation, field) => {
  const jobProperty = R.find(R.propEq('field', field), jobProperties)

  return jobProperty
    ? validateProperties(job, validation, [jobProperty])
    : validation
}

module.exports = {
  validateJob,
  validateJobField
}


