import React, { Component } from 'react';
import OpportunityPage from './OpportunityPage'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { EditOpportunityForm } from './EditOpportunityForm'
// import '../style/App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Router>
              <Route path='/' exact component={OpportunityPage} />
              <Route path='/editOpportunity' exact component={EditOpportunityForm} />
          </Router>
        </div>
    );
  }
}

export default App;
export { App }
