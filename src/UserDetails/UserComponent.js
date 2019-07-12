import React from "react";
import {Card} from "@material-ui/core";
import HeaderComponent from "../components/HeaderComponent";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ProductMiddleware from "../middleware/ProductMiddleware"
import queryString from "query-string";


export default class UserComponent extends React.Component{

    constructor(props){
        super(props);
        this.state={
            'name': "",          //props.context.userDetails.name,
            'contactNumber': "", //props.context.userDetails.contactNumber,
            'address': ""        //props.context.userDetails.address
        };
        this.productMiddleware = new ProductMiddleware();
    }

    onNameChangeHandler=(value)=>{
        console.log(value);
        this.setState({...this.state,'name':value})
    };
    onMobileNoChangeHandler=(value)=>{
        console.log(value);
        this.setState({...this.state,'contactNumber':value})
    };
    onAddressChangeHandler=(value)=>{
        console.log(value);
        this.setState({...this.state,'address':value})
    };

    getQueryStringParams = query => {
        return queryString.parseUrl(query).query;
    };

    getUserDetails = async ()=>{
        debugger;
        let queryParameters = this.getQueryStringParams(window.location.href);
        let userId = queryParameters.userId;

        let responseData = await this.productMiddleware.getUserDetails(userId);
        console.log(responseData.userDetails);
        let userDetails = responseData.userDetails;
        this.setState({name:userDetails.name,contactNumber:userDetails.contactNumber,address:userDetails.address});
        if(!responseData.hasError){
           // this.props.context.dispatch(Actions.UPDATE_USER_DETAILS,{userDetails:responseData.data});
            this.setState( {userDetails:responseData.data});
        }else{
            console.log("User not found for userId"+userId)
        }
    };

    componentDidMount() {
        this.getUserDetails();
    };

    render() {
        debugger;
        return(
            <React.Fragment>
            <HeaderComponent {...this.props}/>
            <Card style= {{ width: "80%", marginTop: "theme.spacing.unit * 3", overflowX: "auto"}}>
                <legend style={{fontFamily: 'initial'}}>User Details</legend>
                <TextField
                    id="outlined-name"
                    label="Name"
                    value={this.state.name}
                    onChange={e => this.onNameChangeHandler(e.target.value)}
                    margin="normal"
                    variant="outlined"
                />
                <br></br>
                <TextField
                    id="outlined-multiline-flexible"
                    label="Address"
                    multiline
                    rowsMax="4"
                    value={this.state.address}
                    onChange={e => this.onAddressChangeHandler(e.target.value)}
                    margin="normal"
                    variant="outlined"
                />

                <br></br>
                <TextField
                    id="outlined-name"
                    label="Mobile Number"
                    value={this.state.contactNumber}
                    onChange={e => this.onMobileNoChangeHandler(e.target.value)}
                    margin="normal"
                    variant="outlined"
                />
                <br></br>
                <Button variant="contained" color="primary" onClick={this.submitUserInfo}>
                    Add User
                </Button>

            </Card>
            </React.Fragment>
        )
    }
}