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
                <div className={'volunteer_language'}>
                    <div>
                        <h5>{language.label}</h5>
                        <p>{language.value}</p>
                    </div>
                </div>
                <div className={'volunteer_date'}>
                    <div>
                        <h5>{earliestStartDate.label}</h5>
                        <p>{earliestStartDate.value}</p>
                    </div>
                    <div>
                        <h5>{latestEndDate.label}</h5>
                        <p>{latestEndDate.value}</p>
                    </div>
                    <div>
                        <h5>{duration.label}</h5>
                        <p>{duration.value}</p>
                    </div>
                </div>
                <div className={'volunteer_salaryPosition'}>
                    <div>
                        <h5>{salary.label}</h5>
                        <p>{salary.value}</p>
                    </div>
                    <div>
                        <h5>{positions.label}</h5>
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