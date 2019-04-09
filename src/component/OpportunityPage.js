import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { observer } from 'mobx-react'

import {
  Banner,
  OpportunityDetails,
  VolunteerDetails
} from '../molecule'
import { GET_OPPORTUNITY } from '../container/query'
import { state } from './state'

const getOpportunityContext = React.createContext({})

const { Provider } = getOpportunityContext

function opportunityDetails(data) {
  console.log('What is my data', data)
  const { getOpportunityDetails } = data
  const { backgrounds, skills } = getOpportunityDetails
  state.opportunityDetails = getOpportunityDetails
  state.backgroundList = backgrounds
  state.skillsList = skills
}

class OpportunityPageDetails extends Component {
  static contextType = getOpportunityContext

  render() {
    return (
        <Query 
        query={GET_OPPORTUNITY}
        fetchPolicy= {'network-only'}>
        {({ loading, data }) => !loading && (
          <Provider value={data}>
            {opportunityDetails(data)}
            <div className="OpportunityWrapper">
                <Banner />
                <OpportunityDetails />
                <VolunteerDetails />
            </div>
          </Provider>
        )}
        </Query>
    );
  }
}

const OpportunityPage = observer(OpportunityPageDetails)

export default OpportunityPage;
export { getOpportunityContext, OpportunityPage}
