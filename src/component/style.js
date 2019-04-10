import styled from 'styled-components'
import { Form } from 'react-advanced-form'

const ContentWrap = styled.div`
    display: flex;
    padding: 0 100px;
    flex-direction: row;
`
const TitleConatiner = styled.div`
    text-transform: capitalize;
`
const StyledForm = styled(Form)`
    .form-input-container:nth-last-child(1) {
        display: inline-flex;
        flex: 100%;
    }
`
const StyledSelect = styled.div`
    width: 224px;
    margin: 1.5rem 0;
    padding-right: 12px;
`
const StyledButton = styled.div`
    display: flex;
    justify-content: center;
    button {   
        width: 237px;
        padding: 15px;
        margin: 1.5rem 0;
        background-color: #037ef3;
        display: flex;
        justify-content: center;
        text-decoration: none;
        color: white;
        border-radius: 5px; 
        font-size: 1rem;
        border: none;
    }
`
const FormConatiner = styled.div.attrs({
    className: 'form-input-container'
})`
    display: flex;
    flex: 0 0 50%;
    flex-direction: column;
    align-items: flex-start;
`
const InputCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex: 0 0 100%;
    flex-wrap: wrap;
    padding: 50px 0 0 150px;
`
export {
    ContentWrap,
    TitleConatiner,
    StyledForm,
    StyledSelect,
    StyledButton,
    FormConatiner,
    InputCont
}