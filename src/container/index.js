import React from 'react';
import { Query } from 'react-apollo';
import { GET_OPPORTUNITY } from './query'

function getOpportunity() {
    return (
      <Query query={GET_OPPORTUNITY}>
        {({ data, loading, error}) => (
        <h1> {data.getOpportunityDetails.title} </h1>
        )}
      </Query>
    );
  };

export { getOpportunity }