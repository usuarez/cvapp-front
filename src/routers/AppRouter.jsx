import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';
import { useSelector } from 'react-redux'
import { PrivateRouter } from './PrivateRouter';
import BrowsePage from "../pages/BrowsePage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import PreviewPage from "../pages/PreviewPage";
import MobileBottomMenu from '../components/MobileBottomMenu';


function AppRouter() {

    const {_id: uid} = useSelector(state => state.auth)
    
    const isAuth = !!uid
    
        
    return (
            
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/search" component={BrowsePage} />
                    <Route exact path="/preview/:resumeId" component={PreviewPage} />
                    <Route exact path="/login" component={LoginPage} />
                    <PrivateRouter 
                        exact path="/export"
                        Component={App}
                        isAuth={ isAuth }
                    />
                    <PrivateRouter 
                        exact path="/profile"
                        Component={App}
                        isAuth={ isAuth }
                    />
                    <PrivateRouter 
                        exact path="/new-profile"
                        Component={App}
                        isAuth={ isAuth }
                    />
                    <PrivateRouter 
                        exact path="/walktrought"
                        Component={App}
                        isAuth={ isAuth }
                    />
                    <PrivateRouter 
                        exact path="/user-data"
                        Component={App}
                        isAuth={ isAuth }
                    />
          
                    <Redirect to="/" />
                </Switch>
                <MobileBottomMenu />
            </Router>
            

        
    )}

export default AppRouter
