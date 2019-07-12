import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import HeaderComponent from "./HeaderComponent";
import ProductMiddleware from "../middleware/ProductMiddleware";


export default class CartComponent extends React.Component{

    constructor(props){
        super(props);
        this.state={
            cartItemsList :[]
        };
        this.productMiddlewere = new ProductMiddleware();
    }

    getCartItemsForUser = async ()=>{

        let response = await this.productMiddlewere.fetchAllItemInCart();
        if(!response.hasError){
             this.setState({cartItemsList:response.cartIteams});
        }
    };


    componentDidMount() {
        this.getCartItemsForUser();
    }

    render() {
         return(
             <React.Fragment>
                 <HeaderComponent {...this.props}/>
             <Paper style= {{ marginRight:'10%', width: "80%", marginTop: "theme.spacing.unit * 3", overflowX: "auto"}}>
                 <Table className="Cart-table">
                     <TableHead>
                         <TableRow>
                             <TableCell>Produce Items</TableCell>
                             <TableCell align="right">Category </TableCell>
                             <TableCell align="right">Volume</TableCell>
                             <TableCell align="right">Comments</TableCell>
                         </TableRow>
                     </TableHead>
                     <TableBody>
                         {this.state.cartItemsList.map(row => (
                             <TableRow key={row._id}>
                                 <TableCell component="th" scope="row"> {row.name} </TableCell>
                                 <TableCell align="right">{row.type}</TableCell>
                                 <TableCell align="right">{row.volume}</TableCell>
                             </TableRow>
                         ))}
                     </TableBody>

                 </Table>

             </Paper>
             </React.Fragment>
         )
     }

}
