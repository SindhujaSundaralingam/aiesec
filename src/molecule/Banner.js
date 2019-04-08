import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getOpportunityContext } from '../component/OpportunityPage'

class Banner extends Component {
    static contextType = getOpportunityContext;

    renderBannerImage = (imageUrl) => {
        return <img src={imageUrl} alt="Banner" />
    }

    renderOpportunityHeading = (headingDetails) => {
        const { title, location } = headingDetails

        return (
            <div>
                <h1>{title}</h1>
                <h3>{location}</h3>
                <Link to="/editOpportunity"> Edit Opportunity </Link>
            </div>
        )
    }

    renderChildren = (context) => {
        const { getOpportunityDetails } = context
        const { cover_photo_urls } = getOpportunityDetails
        const renderBannerImageView = this.renderBannerImage(cover_photo_urls)
        const renderOpportunityHeadingView = this.renderOpportunityHeading(getOpportunityDetails)

        return (
            <div>
                {renderBannerImageView}
                {renderOpportunityHeadingView}
            </div>
        )
    }

    render() {
        return (
            <getOpportunityContext.Consumer>
                {context => {
                    return this.renderChildren(context)
                }}
            </getOpportunityContext.Consumer>
        )
    }
}


export default Banner
export { Banner }
