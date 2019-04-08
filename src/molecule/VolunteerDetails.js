import React, { Component } from 'react';
import { getOpportunityContext } from '../component/OpportunityPage'

class VolunteerDetails extends Component {
    static contextType = getOpportunityContext;

    getLanguageValue = (opportunityDetail) => {
        const { languages } = opportunityDetail
        
        return languages[0].name
    }

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
        const { duration, earliest_start_date, latest_end_date, specifics_info, applications_count, languages } = getOpportunityDetails
        const list = [ //TODO: move to graphql
            {
                label: 'LANGUAGE',
                value: this.getLanguageValue(getOpportunityDetails)
            },
            {
                label: 'EARLIEST START DATE',
                value: earliest_start_date // TODO: format in graphql
            },
            {
                label: 'LATEST END DATE',
                value: latest_end_date, // TODO: format in graphql
            },
            {
                label: 'DURATION',
                value: duration + ' Weeks' // TODO: format in graphql
            },
            {
                label: "Salary",
                value: specifics_info.salary
            },
            {
                label: 'POSITIONS',
                value: applications_count
            }
        ]

        const renderVolunteerDetails = list.map(this.renderList)

        return (
            <div>
                {renderVolunteerDetails}
            </div>
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