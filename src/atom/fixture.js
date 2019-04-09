const headerTitle = [
    'Overview',
    'Prerequisites',
    'Visa and Logistics'
]

function getActivities (activity) {
    return activity
}

function getOverViewDetails (context) {
    const overViewDetails = [
        {
            "label": "Sustainable development goal Peace Justice And Strong Institutions",
            "value": "Significantly reduce all forms of violence and related death rates everywhere"
        },
        {
            "label": "Role description",
            "value": context.description
        },
        {
            "label": "Main activities",
            "value": context.mainActivities.map(getActivities)
        }
    ]
    return overViewDetails
}

export {
    headerTitle,
    getOverViewDetails
}