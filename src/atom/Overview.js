import React, { Component } from 'react'
import { getOpportunityContext } from '../component/OpportunityPage'
import { getOverViewDetails } from './fixture'
import { OverViewSectionWrapper } from './style'

class OverView extends Component {
    static contextType = getOpportunityContext;

    renderOverViewList = (list) => {
        const { label, value } = list

        return (
            <OverViewSectionWrapper>
                <h2>{label}</h2>
                <p>{value}</p>
            </OverViewSectionWrapper>
        )
    }

    renderOpportunityDetailView= (context) => {
        const overViewDetails = getOverViewDetails(context)
        const renderOverView = overViewDetails.map(this.renderOverViewList)
        return (
            <div>
                <h1> Overview </h1>
                {renderOverView}
            </div>
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

export { OverView }