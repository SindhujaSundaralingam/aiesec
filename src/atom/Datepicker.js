import React from 'react'
import DatePicker from 'react-datepicker'
import { observer } from 'mobx-react'
import { selectedValueState } from '../component/Forms/selectedValueState'

class DatePickerView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          date: new Date(this.props.value)
        };
    }
    
    handleChange = (value) => {
        if(this.props.name === 'earliestStartDate') {
            selectedValueState.earliestStartDate = value
        }
        else {
            selectedValueState.latestEndDate = value
        }
    this.setState({
        date: value
    });
    }
    render() {
        return (
            <DatePicker 
            selected={this.state.date} 
            onChange={this.handleChange}
            value={new Date(this.props.value)} />
        )
    }
}

const Datepicker = observer(DatePickerView)

export default Datepicker
export { Datepicker }