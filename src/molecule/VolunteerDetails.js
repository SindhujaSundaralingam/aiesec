import React, { Component } from 'react';
import { getOpportunityContext } from '../component/OpportunityPage'
import { VolunteerWrapper } from './style'

class VolunteerDetails extends Component {
    static contextType = getOpportunityContext;

    renderList = (volunteerDetails) => {
        const {
            language,
            earliestStartDate,
            latestEndDate,
            duration,
            salary,
            positions
        } = volunteerDetails

        return (
            <React.Fragment>
                <div>
                    <div className={'volunteer_language'}>
                        <h4>{language.label}</h4>
                        <p>{language.value}</p>
                    </div>
                </div>
                <div>
                    <div className={'volunteer_earliestStartDate'}>
                        <h4>{earliestStartDate.label}</h4>
                        <p>{earliestStartDate.value}</p>
                    </div>
                    <div className={'volunteer_latestEndDate'}>
                        <h4>{latestEndDate.label}</h4>
                        <p>{latestEndDate.value}</p>
                    </div>
                    <div className={'volunteer_duration'}>
                        <h4>{duration.label}</h4>
                        <p>{duration.value}</p>
                    </div>
                </div>
                <div>
                    <div className={'volunteer_salary'}>
                        <h4>{salary.label}</h4>
                        <p>{salary.value}</p>
                    </div>
                    <div className={'volunteer_positions'}>
                        <h4>{positions.label}</h4>
                        <p>{positions.value}</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    renderVolunteerDetailView = (context) => {
        const { getOpportunityDetails } = context
        const { volunteerDetails } = getOpportunityDetails

        const renderVolunteerDetails = this.renderList(volunteerDetails)

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