import styled from 'styled-components'
import { Link } from 'react-router-dom';

const OpportunityWrapper = styled.div`
    padding: 120px 30px 30px 0;
    font-family: "Lato", sans-serif;
`
const VolunteerWrapper = styled.div`
    padding: 120px 0 30px 30px;
    font-family: "Lato", sans-serif;
`

const StyledImage = styled.img`
    width: 99%;
    height: 400px;
    position: absolute;
    z-index: 1;
`

const StyledLink = styled(Link)`
    width: 200px;
    padding: 20px;
    background-color: #037ef3;
    display: flex;
    justify-content: center;
    text-decoration: none;
    color: white;
    border-radius: 5px;  
`

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    padding-top: 120px;
    z-index: 2;
    color: #fff;
    font-family: "Lato", sans-serif;
`

export {
    OpportunityWrapper,
    StyledImage,
    StyledLink,
    TitleWrapper,
    VolunteerWrapper
}