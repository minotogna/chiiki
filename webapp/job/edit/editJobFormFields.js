import React from 'react'
import * as R from 'ramda'

import {
  EditJobTextInputRow,
  ApplicationPeriod,
  EditJobBooleanInputRow,
  EditJobSelectInputRow,
  EditJobTextAreaInputRow,
} from './editJobFormComponents'

import jobProperties from '../../../common/job/jobProperties'

const inputTypeComponentsMapping = {
  text: EditJobTextInputRow,
  textarea: EditJobTextAreaInputRow,
  select: EditJobSelectInputRow,
  boolean: EditJobBooleanInputRow,
  applicationPeriod: ApplicationPeriod,
}

const formFields = jobProperties.map(jobProperty => ({
  component: inputTypeComponentsMapping[jobProperty.type],
  props: {...R.dissoc('validators', jobProperty)},
}))

export default formFields
