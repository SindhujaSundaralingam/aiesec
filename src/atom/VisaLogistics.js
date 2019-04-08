import React, { Component } from 'react'
import { getOpportunityContext } from '../component/OpportunityPage'

class VisaLogistics extends Component {
    static contextType = getOpportunityContext;

    renderList = (item) => {
        return <li key={item}>{item}</li>
    }

    renderLogistics = (logisticsDetail) => {
        const { food_covered, food_weekends, accommodation_covered, accommodation_provided} = logisticsDetail
        const list = [
            food_covered,
            food_weekends,
            accommodation_covered,
            accommodation_provided
        ]
        const renderListView = list.map(this.renderList)

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

        const { visa_link, visa_type, visa_duration} = legalDetails
        const list = [ // TODO move to graphql
            {
                label: "VISA TYPE",
                value: visa_type
            },
            {
                label: "VISA DURATION",
                value: visa_duration
            },
            {
                label: "VISA LINK",
                value: visa_link
            }

        ]
        const renderVisaDetails = list.map(this.renderVisaList)

        return (
            <div>
                <h3>Visa</h3>
                {renderVisaDetails}
            </div>)
    }

    renderHealthInsurance = (insuranceDetails) => {
        const { health_insurance_info } = insuranceDetails
        return (
            <div>
                <h3>Health Insurance</h3>
                <p>{health_insurance_info}</p>
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
        const { logistics_info, legal_info } = getOpportunityDetails
        const renderWorkingHours = ''
        const renderLogisticsView = this.renderLogistics(logistics_info)
        const renderVisaView = this.renderVisa(legal_info)
        const renderHealthInsuranceView = this.renderHealthInsurance(legal_info)
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