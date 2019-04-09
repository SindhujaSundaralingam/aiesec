import { observable, decorate } from 'mobx'

class SelectedValueState {
    backgroundSelectedList = []
    selectedSkillList = []
    latestEndDate = ''
    earliestEndDate = ''
}

decorate(SelectedValueState,{
    backgroundList: observable,
    skillsList:  observable
})

const selectedValueState = new SelectedValueState()

export default selectedValueState
export { selectedValueState }