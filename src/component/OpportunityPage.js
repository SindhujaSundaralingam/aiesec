import React, { Component } from 'react';
import { Query } from 'react-apollo';
import {
  Banner,
  OpportunityDetails,
  VolunteerDetails
} from '../molecule'
import { GET_OPPORTUNITY } from '../container/query'

const getOpportunityContext = React.createContext({})

const { Provider } = getOpportunityContext

function test(data) {
    console.log('Data', data)
}

class OpportunityPage extends Component {
  static contextType = getOpportunityContext

  render() {
    return (
        <Query query={GET_OPPORTUNITY}>
        {({ loading, data }) => !loading && (
          <Provider value={data}>
            {test(data)}
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

export default OpportunityPage;
export { getOpportunityContext, OpportunityPage}
