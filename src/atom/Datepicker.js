import React from 'react'
import DatePicker from 'react-datepicker'
import { observer } from 'mobx-react'
import styled from 'styled-components'
import { selectedValueState } from '../component/Forms/selectedValueState'

const DatePickerCont = styled(DatePicker)`
    color: rgb(34, 34, 34);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 16px;
    font-weight: 300;
    transition-duration: 0.2s;
    padding: 0.6rem 50px 0.6rem 0.7rem;
    border-width: 1px;
    border-style: solid;
    border-image: initial;
    border-radius: 3px;
    border-color: rgb(187, 187, 187);
    margin: 1.5rem 0px;
`
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
            <DatePickerCont
            className={`date-picker`}
            selected={this.state.date} 
            onChange={this.handleChange}
            value={new Date(this.props.value)} />
        )
    }
}

const Datepicker = observer(DatePickerView)

export default Datepicker
export { Datepicker }