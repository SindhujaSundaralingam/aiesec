import gql from 'graphql-tag';

const GET_OPPORTUNITY = gql`
{
  getOpportunityDetails {
    id
    title
    location
    description
    duration
    earliest_start_date
    latest_end_date
    applications_close_date
    applications_count
    nationalities {
      id
      name
    }
    skills {
      id
      name
    }
    backgrounds {
      id
      name
    }
    languages {
      id
      name
    }
    measure_of_impacts {
      id
      name
    }
    host_lc {
      full_name
    }
    logistics_info {
      food_covered
      food_weekends
      accommodation_covered
      accommodation_provided
    }
    legal_info {
      visa_link
      visa_type
      visa_duration
      health_insurance_info
    }
    cover_photo_urls
    specifics_info {
      salary
    }
  }    
}
`;

export default GET_OPPORTUNITY
export { GET_OPPORTUNITY }