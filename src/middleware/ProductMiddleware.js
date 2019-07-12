
import HttpRequestHandler from '../util/HttpRequestHandler'

export default class ProductMiddleware{

    constructor(){
        this.httpRequestHandler = new HttpRequestHandler();
    }

    getListOfallGroceryIteams = async ()=>{
        debugger;
        let hasError = false;
        let errorMessage = "";
        let groceryList = {};

        try{
            console.log("=====> ProductMiddleware========.>");
            let response = await this.httpRequestHandler.getListOfallGroceryIteams();
            groceryList = response.data;
        }catch(err){
            hasError = true;
            errorMessage = "grocery list not found ";
        }
        return {
            hasError: hasError,
            errorMessage: errorMessage,
            groceryData : groceryList
        };


    };

    getUserDetails = async (userId)=>{
        let userDetails = {};
        let hasError = false;
        let errorMessage = "";
        try{
            let response =  await this.httpRequestHandler.getListOfallGroceryIteams();
            console.log("response.data ======>",response);
            userDetails = response.data;
        }catch(err){
            hasError = true;
            errorMessage = "Error while getting User Details";
        }
        return {
            hasError: hasError,
            errorMessage: errorMessage,
            userDetails: {"id":"f68b790b-a965-480a-b13b-27d88bef19a8","name":"Snehal","address":"Wakad,pune","contactNumber":"123443353"}
        };
    };

    postIteamSelectedtoCart = async (iteam)=>{
        let item = "";
        let hasError = false;
        let errorMessage = "";

        try{
            let response = await this.httpRequestHandler.postIteamSelectedtoCart(iteam);
            item =response.data;

        }catch(err){
            hasError = true;
            errorMessage = "Error while posting grocery iteam";
        }

        return {
            hasError: hasError,
            errorMessage: errorMessage,
            groceryiteam: item
        };

    };

    fetchAllItemInCart = async ()=>{
        let items = "";
        let hasError = false;
        let errorMessage = "";
        try{
            let response = await this.httpRequestHandler.fetchAllIteminCart();
            items =response.data;
        }catch(err){
            hasError = true;
            errorMessage = "Error while posting grocery iteam";
        }

        return {
            hasError: hasError,
            errorMessage: errorMessage,
            cartIteams: items
        };

    };

    submitUserInfo = async (data)=>{
        let message = "";
        let hasError = false;
        let errorMessage = "";
        try{
            let response = await this.httpRequestHandler.submitUserInfo(data);
            message =response.data;
        }catch(err){
            hasError = true;
            errorMessage = "Error while posting grocery iteam";
        }

        return {
            hasError: hasError,
            errorMessage: errorMessage,
            successMessage: message
        };
    }
}