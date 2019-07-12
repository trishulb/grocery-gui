import React,{ Component } from "react";
import Card from '@material-ui/core/Card';
import HeaderComponent from './components/HeaderComponent';
import  GroceryIteams from "./components/GroceryIteams";


export default class GroceryComponent extends Component{
    constructor(props){
        super(props);
        this.props = props;
    }

    redirectToUsers(){
        this.props.history.push("/user");
    };

    redirectToCartItems(){
        debugger;
        this.props.history.push("/cart");
    }

    render(){
        return(
            <React.Fragment>

                <HeaderComponent {...this.props}/>

                 <GroceryIteams/>
            </React.Fragment>

        );
    }

}
