import React from "react";
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Home from "@material-ui/icons/Home";
import AccountCircle from '@material-ui/icons/AccountCircle';
import AddShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Card from "@material-ui/core/Card";


export default class HeaderComponent extends React.Component{

    redirectToUsers =()=>{
        this.props.history.push("/user");
    };

    redirectToCartItems =()=>{
        this.props.history.push("/cart");
    };

    redirectToHome =()=>{
        this.props.history.push("/");
    };


    render() {
        return(
            <Card style= {{ marginRight:'10%', width: "80%", marginTop: "theme.spacing.unit * 3", overflowX: "auto"}}>
            <CardHeader
                avatar={
                    <Avatar className={'avatar'} aria-label="Recipe">
                        U
                    </Avatar>
                }
                action={
                    <div>
                        <IconButton style={{margin:'1px'}} aria-label="Settings" onClick={()=>this.redirectToHome()}>
                            <Home/>
                        </IconButton>
                        <IconButton style={{margin:'1px'}} aria-label="Settings" onClick={()=>this.redirectToUsers()}>
                            <AccountCircle/>
                        </IconButton>
                        <IconButton color="primary" style={{margin:'1px'}} aria-label="Add to shopping cart" onClick={()=>this.redirectToCartItems()}>
                            <AddShoppingCartIcon />
                        </IconButton>
                    </div>
                }
                title="GroceryList All Iteams"
                subheader="September 14, 2016"
            />
            </Card>
        )

    }

}


