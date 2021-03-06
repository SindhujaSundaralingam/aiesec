import React, { Component } from 'react'
import { getOpportunityContext } from '../component/OpportunityPage'
import { getOverViewDetails } from './fixture'
import { OverViewSectionWrapper } from './style'
import { isArray } from 'util';

class OverView extends Component {
    static contextType = getOpportunityContext;

    renderOverViewList = (list) => {
        const { label, value } = list

        const renderList = (list) => {
            return <li>{list}</li>
        }

        const renderActivityList = isArray(value) ? (
            <ul>
                {value.map(renderList)}
            </ul>
        ) : <p>{value}</p> 
        return (
            <OverViewSectionWrapper>
                <h4>{label}</h4>
                {renderActivityList}
            </OverViewSectionWrapper>
        )
    }

    renderOpportunityDetailView= (context) => {
        const {getOpportunityDetails} = context
        const overViewDetails = getOverViewDetails(getOpportunityDetails)
        const renderOverView = overViewDetails.map(this.renderOverViewList)
        return (
            <div>
                <h2> Overview </h2>
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