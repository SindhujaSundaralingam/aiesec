import React, { Component } from 'react';
import { StyledImage, TitleWrapper, StyledLink } from './style'
import { getOpportunityContext } from '../component/OpportunityPage'

class Banner extends Component {
    static contextType = getOpportunityContext;

    renderBannerImage = (imageUrl) => {
        return <StyledImage src={imageUrl} alt="Banner" />
    }

    renderOpportunityHeading = (headingDetails) => {
        const { title, location } = headingDetails

        return (
            <TitleWrapper>
                <h1>{title}</h1>
                <h3>{location}</h3>
                <StyledLink to="/editOpportunity"> Edit Opportunity </StyledLink>
            </TitleWrapper>
        )
    }

    renderChildren = (context) => {
        const { getOpportunityDetails } = context
        const { coverPhoto } = getOpportunityDetails
        const renderBannerImageView = this.renderBannerImage(coverPhoto)
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
