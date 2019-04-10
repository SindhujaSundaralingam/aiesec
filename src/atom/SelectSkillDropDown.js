import React from 'react'
import {observer} from 'mobx-react'
import { Select } from 'react-dropdown-select';
import { selectedValueState } from '../component/Forms/selectedValueState'
import { state } from '../component/state'

class SelectDropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            selectedDropdown: this.props.selectedDropdown,
            selectValues: [],
            labelField: "name",
            valueField: "id",
        };
    }
    renderoptions = (option) => {
        return <option value={option.name}>{option.name}</option>
    }

    setValues = selectValues => { 
        if(this.props.value === 'background')
        {
            selectedValueState.backgroundSelectedList = selectValues
        }
        else {
            selectedValueState.skillsList = selectValues
        }
        this.setState({selectValues})
    }
    
    render() {
        const defaultSelectedValues = this.props.value === 'background' ? state.backgroundList : state.skillsList
        return (
            <Select 
                multi={true}
                value={[this.state.value]}
                options={this.props.options}
                onChange={values => this.setValues(values)}
                labelField={this.state.labelField}
                valueField={this.state.valueField}
                dropdownGap={5}
                keepSelectedInList={true}
                values={defaultSelectedValues}
                />
        )
    }
}
const SelectDropdown = observer(SelectDropDown)

export default SelectDropdown
export { SelectDropdown }