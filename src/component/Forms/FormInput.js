const formInput = (basicsOpportunityDetail) => {
    return [
        {
            name: 'title',
            value: (basicsOpportunityDetail && basicsOpportunityDetail.title) || ''
        },
        {
            name: 'description',
            value: (basicsOpportunityDetail && basicsOpportunityDetail.description) || ''
        },
        {
            name: 'earliestStartDate',
            value: (basicsOpportunityDetail && basicsOpportunityDetail.earliestStartDate) || ''
        },
        {
            name: 'latestEndDate',
            value: (basicsOpportunityDetail && basicsOpportunityDetail.latestEndDate) || ''
        },
        {
            name: 'selectionProcess',
            value: (basicsOpportunityDetail && basicsOpportunityDetail.selectionProcess) || ''
        },
        {
            name: 'salary',
            value: (basicsOpportunityDetail && basicsOpportunityDetail.salary) || ''
        },
        {
            name: 'city',
            value: (basicsOpportunityDetail && basicsOpportunityDetail.location) || ''
        },
        {
            name: 'background',
            value: (basicsOpportunityDetail && basicsOpportunityDetail.backgrounds) || ''
        },
        {
            name: 'skill',
            value: (basicsOpportunityDetail && basicsOpportunityDetail.skills) || ''
        },
    ]
}

export { formInput }