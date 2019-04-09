import { observable, decorate } from 'mobx'

class State {
    opportunityDetails = {}
    backgroundList = []
    skillsList = []
}

decorate(State,{
    opportunityDetails: observable,
    backgroundList: observable,
    skillsList:  observable
})

const state = new State()

export default State
export { state }