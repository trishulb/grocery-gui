import React from "react";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import ProductMiddleware from "../middleware/ProductMiddleware";
import Card from "@material-ui/core/Card";


export default class GroceryIteams extends React.Component{
    constructor(){
        super();
        this.productMiddlewere = new ProductMiddleware();
        this.state={
            groceryItemsList:[],
            types:["Weight","Quantity"],
            measurements:[],
            groceryItem:"Select",
            volume:"select",
            measureType:"select",
        }
    }

    setMeasurementType=(e)=>{
        let measurements = [];
        if(e.target.value === "Weight"){
            measurements=[
                "100 gm",
                "200 gm",
                "500 gm",
                "1 kg"
            ];
        } else{
            measurements=[
                "1",
                "2",
                "3"
            ];
        }
        let measureType = e.target.value;
        this.setState({...this.state, measurements, measureType});

    };

    addItemToCart = ()=>{
        console.log("Add Items to carts");
    };

    fetchAllGroceryProducts= async ()=>{
        let response = await this.productMiddlewere.getListOfallGroceryIteams();
       if(!response.hasError){
           this.setState({...this.state,groceryItemsList:response.groceryData[0].items});
       } else {
           console.log("Error while fetching Grocery Items List");
       }

    };

    addItemsToCart = async ()=>{
        let item = {
            name :this.state.groceryItem,
            type : this.state.measureType,
            volume : this.state.volume

        };

        let response = await this.productMiddlewere.postIteamSelectedtoCart(item);

        if(!response.hasError){
            console.log("Item Posted successfully");
        }else {
            console.log("Error while posting item");
        }

    };

    componentDidMount () {
        this.fetchAllGroceryProducts();
    }

    render() {
        return(
            <React.Fragment>
                <Card style= {{  width: "80%", marginTop: "theme.spacing.unit * 3", overflowX: "auto"}}>

                <div style={{width:'100%',marginTop:'3%'}}>
                <div style={{width: '30%',float: 'left'}}><legend style={{fontFamily: 'initial'}}>Items</legend></div>
                <div style={{width: '30%',float: 'left'}}><legend style={{fontFamily: 'initial'}}>MeasurementType</legend></div>
                <div style={{width: '30%',float: 'left'}}><legend style={{fontFamily: 'initial'}}>Quantity</legend></div>
            </div>
            <div style={{width:'100%'}}>
               <Select
                    className={'selectSpacing'}
                    label="groceryItem"
                    value={this.state.groceryItem}
                    onChange={e => this.setState({ groceryItem: e.target.value })}
               >
                    {this.state.groceryItemsList.map(name => (
                        <option value={name} key={name}>
                            {name}
                        </option>
                    ))}>
                </Select>

                <Select
                    className={'selectSpacing'}
                    label="measureType"
                    value={this.state.measureType}
                    onChange={e => this.setMeasurementType(e)}
                >
                    {this.state.types.map(name => (
                        <option value={name} key={name}>
                            {name}
                        </option>
                    ))}>
                </Select>
                <Select
                    className={'selectSpacing'}
                    label="volume"
                    defaultValue = {this.state.measurements[0]}
                    value={this.state.volume}
                    onChange={e => this.setState({ volume: e.target.value })}
                >
                    {this.state.measurements.map(name => (
                        <option value={name} key={name}>
                            {name}
                        </option>
                    ))}>
                </Select>
                <Button color="primary" raised="true" aria-label="Add" className={'fab-grocery'} onClick={()=>this.addItemsToCart()}>
                    Add
                </Button>
            </div>
            </Card>
            </React.Fragment>

        );
    }

};