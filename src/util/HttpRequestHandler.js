import axios from 'axios';


export default class HttpRequestHandler{

    ACTIVE_BASE_URL_PREFIX = "/api";
    GROCERY_URL_SUFFIX = "/grocery";
    CART_URL_SUFFIX ="/cart";
    ADMIN_URL_SUFFIX="/admin";
    USER_URL_SUFFIX ="/user";

    config ={
        'headers' : {
            "Content-Type": "application/json"
        }};

    getListOfallGroceryIteams = ()=>{
        console.log("HttpRequestHandler ");
        let url = this.ACTIVE_BASE_URL_PREFIX + this.GROCERY_URL_SUFFIX;
        console.log(url);
        return axios.get(url, this.config);

    };

    postIteamSelectedtoCart =(iteam)=>{
        console.log(" post the item selected to db");
        let url = this.ACTIVE_BASE_URL_PREFIX + this.CART_URL_SUFFIX;
        console.log(url);
        return axios.post(url,iteam,this.config);

    };

    fetchAllIteminCart = () =>{
        console.log(" get all fetchAllIteminCart");
        let url = this.ACTIVE_BASE_URL_PREFIX + this.CART_URL_SUFFIX;
        console.log(url);
        return axios.get(url, this.config);
    };

    submitUserInfo = (data)=>{
        console.log("Post User Details"+data);
        let url = this.ACTIVE_BASE_URL_PREFIX + this.ADMIN_URL_SUFFIX+this.USER_URL_SUFFIX;
        axios.post(url,data,this.config)
    };

    getUserDetails =(id)=>{
        console.log("get User Details by Id "+id);
        let url = this.ACTIVE_BASE_URL_PREFIX + this.ADMIN_URL_SUFFIX+this.USER_URL_SUFFIX+"/"+id;
        console.log("get User Details URL "+url);
        axios.get(url,this.config);
    };

}





