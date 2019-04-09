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
        return legalDetails.find(item  => item.label === 'Health Insurance')
    }

    renderHealthInsurance = (legalDetails) => {
        const healthInsurance = this.getHealthIsurance(legalDetails)
        return (
            <div>
                <h3>Health Insurance</h3>
                <p>{healthInsurance.value}</p>
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
    
    renderWorkingHoursDetails = (list) => {
        const renderWorkingHourList = (item) => {
            const { value } = item
            return <li>{value}</li>
        }

        return (
            <div>
                <h3>Working hours</h3>
                <ul>
                    {list.map(renderWorkingHourList)}
                </ul>
            </div>
        )
    }

    renderHostDetailView = (host_lc) => {
        const { full_name } = host_lc
        return (
            <div>
                <h3>Host AIESEC office</h3>
                <p>{full_name}</p>
            </div>
        )
    }

    renderVisaLogisticView = (context) => {
        const { getOpportunityDetails } = context
        const { logisticDetails, legalDetails, workingHours, host_lc } = getOpportunityDetails
        const renderWorkingHours = this.renderWorkingHoursDetails(workingHours)
        const renderLogisticsView = this.renderLogistics(logisticDetails)
        const renderVisaView = this.renderVisa(legalDetails)
        const renderHealthInsuranceView = this.renderHealthInsurance(legalDetails)
        const renderTestimonialsView = this.renderTestimonials()
        const renderHostView = this.renderHostDetailView(host_lc)
        return (
            <div>
                <h1>Visa and Logistics</h1>
                {renderWorkingHours}
                {renderLogisticsView}
                {renderVisaView}
                {renderHealthInsuranceView}
                {renderTestimonialsView}
                {renderHostView}
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