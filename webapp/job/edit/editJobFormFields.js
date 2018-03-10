import React from 'react'

import {
  EditJobTextInputRow,
  ApplicationPeriod,
  EditJobBooleanInputRow,
  EditJobSelectInputRow,
  EditJobTextAreaInputRow,
} from './editJobFormComponents'

import {
  jobSectors,
  employmentStatuses,
  qualificationRequirements,
} from './editJobFormFieldsData'

const formFields = [
  {
    component: EditJobTextInputRow,
    props: {
      field: 'companyName',
      label: 'Company name',
      placeholder: 'Name',
    },
  },
  {
    component: EditJobTextInputRow,
    props: {
      field: 'companyEmail',
      label: 'Company email',
      placeholder: 'Email',
    },
  },
  {
    component: EditJobTextInputRow,
    props: {field: 'title', label: 'Job title', placeholder: 'Job title'},
  },
  {
    component: ApplicationPeriod,
    props: {field: 'applicationPeriod', label: 'Application Period'},
  },
  {
    component: EditJobTextAreaInputRow,
    props: {
      field: 'description',
      label: 'Job description',
      placeholder: 'Add a description (e.g. expected outcomes..)',
    },
  },

  {
    component: EditJobSelectInputRow,
    props: {
      field: 'jobSection',
      label: 'Job Sector',
      placeholder: 'Choose',
      options: jobSectors,
    },
  },

  {
    component: EditJobTextInputRow,
    props: {
      field: 'otherKeywords',
      label: 'Other keywords',
      placeholder: 'Keywords',
    },
  },

  {
    component: EditJobSelectInputRow,
    props: {
      field: 'employmentStatus',
      label: 'Employment status',
      placeholder: 'Choose',
      options: employmentStatuses,
    },
  },

  {
    component: EditJobBooleanInputRow,
    props: {field: 'trialPeriod', label: 'Trial period'},
  },

  {
    component: EditJobBooleanInputRow,
    props: {field: 'partimeAllowed', label: 'Part time allowed'},
  },

  {
    component: EditJobTextInputRow,
    props: {
      field: 'location',
      label: 'Activity location',
      placeholder: 'Address, City, Region...',
    },
  },
  {
    component: EditJobTextInputRow,
    props: {
      field: 'vacation',
      label: 'Vacation / Holiday',
      placeholder: 'No of days/months',
    },
  },
  {
    component: EditJobTextInputRow,
    props: {
      field: 'salary',
      label: 'Salary',
      placeholder: 'Salary per month/year and currency (JPY, USD, EUR)',
    },
  },

  {
    component: EditJobTextAreaInputRow,
    props: {
      field: 'personDescription',
      label: 'Person description',
      placeholder: 'Add a description of the ideal candidate',
      rows: 2,
    },
  },

  {
    component: EditJobTextAreaInputRow,
    props: {
      field: 'selectionCriteria',
      label: 'Selection criteria',
      placeholder: 'Add a description of the selection criteria',
      rows: 2,
    },
  },

  {
    component: EditJobSelectInputRow,
    props: {
      field: 'qualificationRequirements',
      label: 'Qualification requirements',
      placeholder: 'Choose',
      options: qualificationRequirements,
    },
  },

  {
    component: EditJobTextInputRow,
    props: {
      field: 'welfarePayments',
      label: 'Welfare payments',
      placeholder: 'Welfare payments',
    },
  },

  {
    component: EditJobTextInputRow,
    props: {
      field: 'variousAllowances',
      label: 'Various allowances',
      placeholder: 'Various allowances',
    },
  },

  {
    component: EditJobTextAreaInputRow,
    props: {
      field: 'image3months',
      label: 'Image of 3 months after joining the company',
      placeholder: 'Image of 3 months after joining the company',
      rows: 2,
    },
  },

  {
    component: EditJobTextAreaInputRow,
    props: {
      field: 'selectionProcess',
      label: 'Selection process',
      placeholder: 'Selection process',
      rows: 2,
    },
  },
  {
    component: EditJobTextAreaInputRow,
    props: {
      field: 'challenge',
      label: 'The challenge of this work',
      placeholder: 'The challenge of this work',
      rows: 2,
    },
  },
  {
    component: EditJobTextAreaInputRow,
    props: {
      field: 'vision',
      label: 'Our vision and mission',
      placeholder: 'Our vision and mission',
      rows: 2,
    },
  },
  {
    component: EditJobTextAreaInputRow,
    props: {
      field: 'representativeMessage',
      label: 'Representative message',
      placeholder: 'Representative message',
      rows: 2,
    },
  },
]

export default formFields
