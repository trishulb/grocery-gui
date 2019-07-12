import React from 'react';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import GroceryComponent from "./GroceryComponent";
import UserComponent from "./UserDetails/UserComponent";
import CartComponent from "./components/CartComponent"



function WrapperComponent() {
    debugger;
    return(
        <Router>
            <Switch>
                <Route path={'/'} exact component={GroceryComponent}/>
                <Route path={'/user'} exact component={UserComponent}/>
                <Route path={'/cart'} exact component={CartComponent}/>
            </Switch>
        </Router>
    )

}
export default WrapperComponent;