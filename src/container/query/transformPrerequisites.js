// TODO: move this to graphql

function transformPrerequisitesList (context) {
    const { getOpportunityDetails } = context
    const { nationalities, skills, backgrounds, languages } = getOpportunityDetails
    const transformedResult = [
        {
            label: "Backgrounds",
            value: backgrounds
        },
        {
            label: "Skills",
            value: skills
        },
        {
            label: "Citizenships",
            value: nationalities
        },
        {
            label: "Languages",
            value: languages
        }
    ]
    return transformedResult
}

export { transformPrerequisitesList }