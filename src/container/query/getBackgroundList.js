import gql from 'graphql-tag';

const GET_BACKGROUND_LIST = gql`
{
    getBackgroundList {
        id
        name  
    }
}
`

export { GET_BACKGROUND_LIST }