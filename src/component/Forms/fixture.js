const feildRules = {
    name: {
      opportunityTitle: ({ value }) => {
        const matchCase = value.match(/^([a-zA-Z\s]{3,100})$/)
        return matchCase && matchCase.length > 0 ? true : false
      },
      opportunityDescription: ({ value }) => {
        const matchCase = value.match(/^([a-zA-Z\s]{10,1000})$/)
        return matchCase && matchCase.length > 0 ? true : false
      },
      'selection process': ({ value }) => {
        const matchCase = value.match(/^([a-zA-Z\s]{3,100})$/)
        return matchCase && matchCase.length > 0 ? true : false
      },
      salary: ({ value }) => {
        const matchCase = value.match(/^([0-9]{3,10})$/)
        return matchCase && matchCase.length > 0 ? true : false
      },
    },
}

const errorMessage = {
    name: {
        opportunityTitle: {
            missing: 'Please provide valid Title',
            invalid: 'Title should be min 3 & max 100 characters, No specail character/Numbers',
        },
        opportunityDescription: {
            missing: 'Please provide valid Description',
            invalid: 'Description should be min 10 & max 1000 characters, No specail character/Numbers',
        },
        'selection process': {
            missing: 'Please provide valid Selection process',
            invalid: 'Selection process should be min 3 & max 100 characters, No specail character/Numbers',
        },
        salary: {
            missing: 'Please provide valid Salary',
            invalid: 'Salary should be min 3 digit & max 100 digit, No specail character/Numbers',
        },
    },
  }

export {
    feildRules,
    errorMessage
}