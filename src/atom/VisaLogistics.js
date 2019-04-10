import React, { Component } from 'react'
import { getOpportunityContext } from '../component/OpportunityPage'
import { ColumnWrapper } from './style'

class VisaLogistics extends Component {
    static contextType = getOpportunityContext;

    renderValue = (label) => {
        switch(label) {
            case 'food_covered': return 'Food Provided'
            case 'food_weekends': return 'Not on weekends'
            case 'accommodation_covered': return 'Accommodation Covered'
            case 'accommodation_provided': return 'Accommodation Provided'
            default: return ''
        }
    }

    renderList = (item) => {
        const { value } = item
        return <li key={value}>{value}</li>
    }

    renderLogistics = (logisticsDetail) => {
        const renderListView = logisticsDetail.map(this.renderList)

        return (
            <ColumnWrapper>
                <h4>Logistics</h4>
                <ul>
                    {renderListView}
                </ul>
            </ColumnWrapper>
        )
    }

    renderVisaList = (list) => {
        const { label, value } = list
        
        if(label !== 'Health Insurance') {
            return (
                <React.Fragment>
                    <h5>{label}</h5>
                    <p>{value}</p>
                </React.Fragment>
            )
        }
        else {
            return (
                <React.Fragment>
                </React.Fragment>
            )
        }
        
    }

    renderVisa = (legalDetails) => {
        const renderVisaDetails = legalDetails.map(this.renderVisaList)

        return (
            <ColumnWrapper>
                <h4>Visa</h4>
                <div>
                    {renderVisaDetails}
                </div>
            </ColumnWrapper>
        )
    }

    getHealthIsurance = (legalDetails) => {
        return legalDetails.find(item  => item.label === 'Health Insurance')
    }

    renderHealthInsurance = (legalDetails) => {
        const healthInsurance = this.getHealthIsurance(legalDetails)
        return (
            <ColumnWrapper>
                <h4>Health Insurance</h4>
                <p>{healthInsurance.value}</p>
            </ColumnWrapper>
        )
    }

    renderTestimonials = () => {
        return (
            <div>
                <h4> Testimonials </h4>
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
            <ColumnWrapper>
                <h4>Working hours</h4>
                <ul>
                    {list.map(renderWorkingHourList)}
                </ul>
            </ColumnWrapper>
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
                <h2>Visa and Logistics</h2>
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