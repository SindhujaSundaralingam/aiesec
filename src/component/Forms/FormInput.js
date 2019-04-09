const formInput = (basicsOpportunityDetail) => {
    return [
        {
            name: 'Opportunity Title',
            value: (basicsOpportunityDetail && basicsOpportunityDetail.title) || ''
        },
        {
            name: 'Opportunity Description',
            value: (basicsOpportunityDetail && basicsOpportunityDetail.description) || ''
        },
        {
            name: 'Earliest Start Date',
            value: (basicsOpportunityDetail && basicsOpportunityDetail.earliestStartDate) || ''
        },
        {
            name: 'Latest End Date',
            value: (basicsOpportunityDetail && basicsOpportunityDetail.latestEndDate) || ''
        },
        {
            name: 'Selection Process',
            value: (basicsOpportunityDetail && basicsOpportunityDetail.selection_process) || ''
        },
        {
            name: 'Salary',
            value: (basicsOpportunityDetail && basicsOpportunityDetail.salary) || ''
        },
        {
            name: 'City',
            value: (basicsOpportunityDetail && basicsOpportunityDetail.location) || ''
        },
        {
            name: 'Backgrounds',
            value: (basicsOpportunityDetail && basicsOpportunityDetail.backgrounds) || ''
        },
        {
            name: 'Skills',
            value: (basicsOpportunityDetail && basicsOpportunityDetail.skills) || ''
        },
    ]
}

export { formInput }