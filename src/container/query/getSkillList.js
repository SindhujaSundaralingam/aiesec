import gql from 'graphql-tag';

const GET_SKILL_LIST = gql`
{
    getSkillList {
        id
        name  
    }
}
`

export { GET_SKILL_LIST }