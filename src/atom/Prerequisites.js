import React, { Component } from 'react'
import { getOpportunityContext } from '../component/OpportunityPage'
 
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
            <div>
                <h3>{label}</h3>
                <ul>
                    {renderListView}
                </ul>  
            </div>
        )
    }

    renderPrerequisitesView = (context) => {
        const { prerequisitesList } = context.getOpportunityDetails
        const list = prerequisitesList
        const renderPrerequisitesListView = list.map(this.renderPrerequisitesList)
        return (
            <div>
                <h1>Prerequisites</h1>
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