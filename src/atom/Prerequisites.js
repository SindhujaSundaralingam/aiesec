import React, { Component } from 'react'
import { getOpportunityContext } from '../component/OpportunityPage'
import { ColumnWrapper } from './style'
 
class Prerequisites extends Component {
    static contextType = getOpportunityContext;

    renderList = (list) => {
        const { id, name } = list
        return <li key={id}>{name}</li>
    }

    renderPrerequisitesList = (item) => {
        const { label, value } = item
        const renderListView = value.map(this.renderList)
        return (
            <ColumnWrapper>
                <h4>{label}</h4>
                <ul>
                    {renderListView}
                </ul>  
            </ColumnWrapper>
        )
    }

    renderPrerequisitesView = (context) => {
        const { prerequisitesList } = context.getOpportunityDetails
        const list = prerequisitesList
        const renderPrerequisitesListView = list.map(this.renderPrerequisitesList)
        return (
            <div>
                <h2>Prerequisites</h2>
                {renderPrerequisitesListView}
            </div>
        )
    }
    render() {
        return (
            <getOpportunityContext.Consumer>
                {context => {
                    return this.renderPrerequisitesView(context)
                }}
            </getOpportunityContext.Consumer>
        )
    }
}

export default Prerequisites
export { Prerequisites }