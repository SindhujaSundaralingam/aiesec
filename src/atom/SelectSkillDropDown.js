import React from 'react'
import {observer} from 'mobx-react'
import { Select } from 'react-dropdown-select';
import { selectedValueState } from '../component/Forms/selectedValueState'

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

    // setValue = (value) => {
    //     const keyValue = this.props.index
    //     const selectedNode = this.props.isBackground ? 'backgrounds' : 'skills'
    //     if(inputState.selectedValue[selectedNode].length > 0) {
    //         const found = inputState.selectedValue[selectedNode].find(function (item, index) {
    //             return item.key === keyValue
    //         })
    //         if(found) {
    //             switch(this.state.selectedDropdown) {
    //                 case 'option':
    //                     inputState.selectedValue[selectedNode][found.key].option = value
    //                     break;
    //                 case 'level':
    //                     inputState.selectedValue[selectedNode][found.key].level = parseInt(value)
    //                     break;
    //                 default:
    //                     inputState.selectedValue[selectedNode][found.key].name = value
    //                     break;
    //             }
                
    //         }
    //     }
    // }

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

    // handleChange = (event) => {
    //     selectedValueState.backgroundSelectedList.push(event.nextValue)
    //     this.setState({value: (event.nextValue)});
    //   }
    render() {
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
                />
        )
    }
}
const SelectDropdown = observer(SelectDropDown)

export default SelectDropdown
export { SelectDropdown }