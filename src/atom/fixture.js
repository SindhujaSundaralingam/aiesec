const headerTitle = [
    'Overview',
    'Prerequisites',
    'Visa and Logistics'
]

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
            "value": "dsfsdfsdfds"
        }
    ]
    return overViewDetails
}

export {
    headerTitle,
    getOverViewDetails
}