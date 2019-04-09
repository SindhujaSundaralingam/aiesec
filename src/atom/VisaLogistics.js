import React, { Component } from 'react'
import { getOpportunityContext } from '../component/OpportunityPage'

class VisaLogistics extends Component {
    static contextType = getOpportunityContext;

    renderList = (item) => {
        const { value } = item
        return <li key={value}>{value}</li>
    }

    renderLogistics = (logisticsDetail) => {
        const renderListView = logisticsDetail.map(this.renderList)

        return (
            <div>
                <h3>Logistics</h3>
                <ul>
                    {renderListView}
                </ul>
            </div>
        )
    }

    renderVisaList = (list) => {
        const { label, value } = list
        
        return (
            <div>
                <h5>{label}</h5>
                <p>{value}</p>
            </div>
        )
    }

    renderVisa = (legalDetails) => {
        const renderVisaDetails = legalDetails.map(this.renderVisaList)

        return (
            <div>
                <h3>Visa</h3>
                {renderVisaDetails}
            </div>)
    }

    getHealthIsurance = (legalDetails) => {
        return legalDetails.find(item  => item.value === '')
    }

    renderHealthInsurance = (legalDetails) => {
        const healthInsurance = this.getHealthIsurance(legalDetails)
        return (
            <div>
                <h3>Health Insurance</h3>
                <p>{healthInsurance}</p>
            </div>
        )
    }

    renderTestimonials = () => {
        return (
            <div>
                <h3> Testimonials </h3>
                <p> There are no testimonials for this opportunity, yet </p>
            </div>
        )
    }

    renderVisaLogisticView = (context) => {
        const { getOpportunityDetails } = context
        const { logisticDetails, legalDetails } = getOpportunityDetails
        const renderWorkingHours = ''
        const renderLogisticsView = this.renderLogistics(logisticDetails)
        const renderVisaView = this.renderVisa(legalDetails)
        const renderHealthInsuranceView = this.renderHealthInsurance(legalDetails)
        const renderTestimonialsView = this.renderTestimonials()
        return (
            <div>
                <h1>Visa and Logistics</h1>
                {renderWorkingHours}
                {renderLogisticsView}
                {renderVisaView}
                {renderHealthInsuranceView}
                {renderTestimonialsView}
            </div>
        )
    }

    render() {
        return (
            <getOpportunityContext.Consumer>
                {context => {
                    return this.renderVisaLogisticView(context)
                }}
            </getOpportunityContext.Consumer>
        )
    }
}

export default VisaLogistics
export { VisaLogistics }