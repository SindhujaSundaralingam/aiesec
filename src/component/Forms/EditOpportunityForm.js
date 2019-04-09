import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Query } from 'react-apollo'
import { client } from '../../graphql'
import { Inputs, SelectDropdown, Datepicker } from '../../atom'
import { GET_SKILL_LIST, GET_BACKGROUND_LIST, UPDATE_OPPORTUNITY } from '../../container/query'
import { state } from '../state'
import { selectedValueState } from './selectedValueState' 
import { formInput } from './FormInput'
import { feildRules, errorMessage } from './fixture'
import {
    StyledForm
} from './styles'

class EditOpportunityFormDetails extends Component {

    getListDetails = (item) => {
        const { id, name } = item
        return {
            id,
            name
        }
    }

    updateOpportunity = async (data) => {
        console.log('serialized data', selectedValueState.earliestStartDate)
        console.log('latest end date', selectedValueState.latestEndDate)
        const { title, description, selectionProcess, salary, city} = data.serialized
        const requestData = {
            title,
            description,
            earliestStartDate: (selectedValueState.earliestStartDate) !== '' ? String(selectedValueState.earliestStartDate) : state.opportunityDetails.earliestStartDate,
            latestEndDate: (selectedValueState.latestEndDate) !== '' ? String(selectedValueState.latestEndDate) : state.opportunityDetails.latestEndDate,
            selectionProcess,
            salary,
            city,
            backgroundList: (selectedValueState.backgroundSelectedList).map(this.getListDetails),
            skillList: (selectedValueState.skillsList).map(this.getListDetails),
        }
        
        const response = (await client.mutate({
            mutation: UPDATE_OPPORTUNITY,
            variables: {
              input: requestData,
            },
        }))
        console.log('client request', response)
        if(response && response.data && response.data.updateOpportunity && response.data.updateOpportunity.id === 6125)
        {
            alert('Opportunity Updated Successfully')
            this.props.history.push('/')
        }
    }   

    renderInputFeild = (formInput) => {
        const { name, value } = formInput
        if(Array.isArray(value)) {
            if(name === 'background') {
                return (<Query query={GET_BACKGROUND_LIST}>
                    {({ loading, data }) => !loading && (
                       <SelectDropdown options={data.getBackgroundList} value={name} />
                    )}
                </Query>)
            }
            else {
                return (<Query query={GET_SKILL_LIST}>
                    {({ loading, data }) => !loading && (
                       <SelectDropdown options={data.getSkillList} value={name} />
                    )}
                </Query>)
            }
        }
        else if(name === 'earliestStartDate'|| name === 'latestEndDate') {
            return <Datepicker value={value} name={name} />
        }
        else {
            return <Inputs required type="text" name={name} value={value} />
        }
    }

    renderFormInput = (formInput) => {
        const { name } = formInput
        const renderInputFeildValue = this.renderInputFeild(formInput)
        return (
            <div>
                <div>{name}</div>
                {renderInputFeildValue}
            </div>
        )
    }

    render() {
        const renderFormInput = formInput(state.opportunityDetails)
        const renderFormView = renderFormInput.map(this.renderFormInput)
        return (
            <StyledForm rules={feildRules} messages={errorMessage} action={this.updateOpportunity}>
            {renderFormView}
            <button>Submit</button>
            </StyledForm>
        )
    }
}

const EditOpportunityForm = observer(EditOpportunityFormDetails)

export default EditOpportunityForm
export { EditOpportunityForm }