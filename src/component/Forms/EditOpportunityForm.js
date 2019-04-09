import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Form } from 'react-advanced-form'
import { Query } from 'react-apollo'
import { Inputs, SelectDropdown } from '../../atom'
import { GET_SKILL_LIST } from '../../container/query'
import { state } from '../state'
import { formInput } from './FormInput'
import { feildRules, errorMessage } from './fixture'

class EditOpportunityFormDetails extends Component {
    updateOpportunity = (serializedData) => {

    }

    renderInputFeild = (formInput) => {
        const { name, value } = formInput
        if(Array.isArray(value)) {
            if(name === 'Backgrounds') {
                return (<Query query={GET_SKILL_LIST}>
                    {({ loading, data }) => !loading && (
                       <SelectDropdown options={data.getSkillList} value={name} />
                    )}
                </Query>)
            }
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
        console.log('My state is ', state.opportunityDetails)
        const renderFormInput = formInput(state.opportunityDetails)
        const renderFormView = renderFormInput.map(this.renderFormInput)
        return (
            <Form rules={feildRules} messages={errorMessage}>
            {renderFormView}
            </Form>
        )
    }
}

const EditOpportunityForm = observer(EditOpportunityFormDetails)

export default EditOpportunityForm
export { EditOpportunityForm }