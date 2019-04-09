import React from 'react'
import DatePicker from 'react-datepicker';
import { selectedValueState } from '../component/Forms/selectedValueState'

class Datepicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          date: new Date(this.props.value)
        };
    }
    
    handleChange = (value) => {
        if(this.props.name === 'earliestStartDate') {
            selectedValueState.earliestStartDateValue = value
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
            <DatePicker selected={this.state.date} onChange={this.handleChange} />
        )
    }
}

export default Datepicker
export { Datepicker }