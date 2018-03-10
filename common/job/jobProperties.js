const {employmentStatuses, jobSectors, qualificationRequirements} = require('./jobPropertyOptions')

const {validationRequired} = require('./jobValidatorFunctions')

const jobProperties = [
  {
    type: 'text',
    field: 'companyName',
    label: 'Company name',
    placeholder: 'Name',
    validators: [validationRequired]
  },
  {
    type: 'text',
    field: 'companyEmail',
    label: 'Company email',
    placeholder: 'Email',
    validators: [validationRequired]
  },
  {
    type: 'text',
    field: 'companyWebsite',
    label: 'Company website',
    placeholder: 'http://....',

  },
  {
    type: 'text',
    field: 'title',
    label: 'Job title',
    placeholder: 'Job title',
    validators: [validationRequired]
  },
  {
    type: 'applicationPeriod',
    field: 'applicationPeriod',
    label: 'Application Period',
  },
  {
    type: 'textarea',
    field: 'description',
    label: 'Job description',
    placeholder: 'Add a description (e.g. expected outcomes..)',
  },
  {
    type: 'select',
    field: 'jobSection',
    label: 'Job Sector',
    placeholder: 'Choose',
    options: jobSectors,
  },
  {
    type: 'text',
    field: 'otherKeywords',
    label: 'Other keywords',
    placeholder: 'Keywords',
  },
  {
    type: 'select',
    field: 'employmentStatus',
    label: 'Employment status',
    placeholder: 'Choose',
    options: employmentStatuses,
  },
  {
    type: 'boolean',
    field: 'trialPeriod',
    label: 'Trial period',
  },
  {
    type: 'boolean',
    field: 'partimeAllowed',
    label: 'Part time allowed',
  },
  {
    type: 'boolean',
    field: 'remoteAllowed',
    label: 'Remote allowed',
  },
  {
    type: 'text',
    field: 'location',
    label: 'Activity location',
    placeholder: 'Address, City, Region...',
  },
  {
    type: 'text',
    field: 'vacation',
    label: 'Vacation / Holiday',
    placeholder: 'No of days/months',
  },
  {
    type: 'text',
    field: 'salary',
    label: 'Salary',
    placeholder: 'Salary per month/year and currency (JPY, USD, EUR)',
  },
  {
    type: 'textarea',
    field: 'personDescription',
    label: 'Person description',
    placeholder: 'Add a description of the ideal candidate',
    rows: 2,
  },
  {
    type: 'textarea',
    field: 'selectionCriteria',
    label: 'Selection criteria',
    placeholder: 'Add a description of the selection criteria',
    rows: 2,
  },
  {
    type: 'select',
    field: 'qualificationRequirements',
    label: 'Qualification requirements',
    placeholder: 'Choose',
    options: qualificationRequirements,
  },
  {
    type: 'text',
    field: 'welfarePayments',
    label: 'Welfare payments',
    placeholder: 'Welfare payments',
  },
  {
    type: 'text',
    field: 'variousAllowances',
    label: 'Various allowances',
    placeholder: 'Various allowances',
  },
  {
    type: 'textarea',
    field: 'image3months',
    label: 'Image of 3 months after joining the company',
    placeholder: 'Image of 3 months after joining the company',
    rows: 2,
  },
  {
    type: 'textarea',
    field: 'selectionProcess',
    label: 'Selection process',
    placeholder: 'Selection process',
    rows: 2,
  },
  {
    type: 'textarea',
    field: 'challenge',
    label: 'The challenge of this work',
    placeholder: 'The challenge of this work',
    rows: 2,
  },
  {
    type: 'textarea',
    field: 'vision',
    label: 'Our vision and mission',
    placeholder: 'Our vision and mission',
    rows: 2,
  },
  {
    type: 'textarea',
    field: 'representativeMessage',
    label: 'Representative message',
    placeholder: 'Representative message',
    rows: 2,
  }

]

module.exports = jobProperties