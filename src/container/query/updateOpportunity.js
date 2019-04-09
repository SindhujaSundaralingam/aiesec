import gql from 'graphql-tag';

const UPDATE_OPPORTUNITY = gql`
    mutation UpdateOpportunity($input: UpdateOpportunityRequest!) {
        updateOpportunity(input: $input) {
            id
        }
    }
`;

export { UPDATE_OPPORTUNITY }