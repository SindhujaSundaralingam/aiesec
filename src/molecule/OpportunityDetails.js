import React, { Component } from 'react';
import { getOpportunityContext } from '../component/OpportunityPage'
import { Header, OverView, Prerequisites, VisaLogistics } from '../atom'
import { OpportunityWrapper } from "./style";

class OpportunityDetails extends Component {
    static contextType = getOpportunityContext;

    renderOpportunityDetailView = (context) => {
        return (
            <OpportunityWrapper>
                <Header />
                <OverView />
                <Prerequisites />
                <VisaLogistics />
            </OpportunityWrapper>
        )
    }

    render() {
        return (
            <getOpportunityContext.Consumer>
                {context => {
                    return this.renderOpportunityDetailView(context)
                }}
            </getOpportunityContext.Consumer>
        )
    }
}

export default OpportunityDetails
export { OpportunityDetails }