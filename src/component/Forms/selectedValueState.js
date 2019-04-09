import { observable, decorate } from 'mobx'

class SelectedValueState {
    backgroundSelectedList = []
    selectedSkillList = []
    latestEndDate = ''
    earliestStartDate = ''
}

decorate(SelectedValueState,{
    backgroundList: observable,
    skillsList:  observable,
    latestEndDate: observable,
    earliestStartDate: observable
})

const selectedValueState = new SelectedValueState()

export default selectedValueState
export { selectedValueState }