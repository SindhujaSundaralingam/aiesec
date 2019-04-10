import gql from 'graphql-tag';

const GET_OPPORTUNITY = gql`
{
  getOpportunityDetails {
    id
    title
    location
    description
    earliestStartDate
    latestEndDate
    applicationCloseDate
    selectionProcess
    city
    mainActivities
    workingHours {
      label
      value
    }
    volunteerDetails {
      language {
       label
       value
     }
     earliestStartDate {
       label
       value
     }
     latestEndDate {
       label
       value
     }
     duration {
       label
       value
     }
     salary {
       label
       value
     }
     positions {
       label
       value
     }
   }
    prerequisitesList {
      label
      value {
        id
        name
      }
    }
    visalogisticsDetails {
      label
      value
    }
    skills {
      id
      name
      option
      level
    }
    backgrounds {
      id
      name
      option
      level
    }
    host_lc {
      full_name
    }
    logisticDetails {
      label
      value
    }
    legalDetails {
      label
      value
    }
    coverPhoto
    salary
  }    
}
`;

export default GET_OPPORTUNITY
export { GET_OPPORTUNITY }