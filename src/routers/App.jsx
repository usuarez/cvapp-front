import React from 'react'
import { Redirect, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import FirstLogin from '../pages/FirstLogin';
import ExportPage from '../pages/ExportPage'
import ProfilePage from '../pages/ProfilePage'
import WalktroughtPage from '../pages/WalktroughtPage';
import UserData from '../pages/UserData';

function App() {
    return (
      <Router>
        <Switch>
          <Route exact path="/export" component={ExportPage} />
          <Route exact path="/new-profile" component={FirstLogin} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/user-data" component={UserData} />
          <Route exact path="/walktrought" component={WalktroughtPage} />
          
          <Redirect to="/profile" />
        </Switch>
        
    </Router>
    )
}

export default App
