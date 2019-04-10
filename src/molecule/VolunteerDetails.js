import React, { Component } from 'react';
import { getOpportunityContext } from '../component/OpportunityPage'
import { VolunteerWrapper } from './style'

class VolunteerDetails extends Component {
    static contextType = getOpportunityContext;

    renderList = (listItem) => {
        const { label, value } = listItem

        return (
            <div>
                <h4>{label}</h4>
                <p>{value}</p>
            </div>
        )
    }

    renderVolunteerDetailView = (context) => {
        const { getOpportunityDetails } = context
        const { volunteerDetails } = getOpportunityDetails

        const renderVolunteerDetails = volunteerDetails.map(this.renderList)

        return (
            <VolunteerWrapper>
                {renderVolunteerDetails}
            </VolunteerWrapper>
        )
    }

    render() {
        return (
            <getOpportunityContext.Consumer>
                {context => {
                    return this.renderVolunteerDetailView(context)
                }}
            </getOpportunityContext.Consumer>
        )
    }
}

export default VolunteerDetails
export { VolunteerDetails }