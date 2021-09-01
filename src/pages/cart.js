import React from "react";
import CartItem from "../components/CartItem";
import ProductsApi from "../api/products";
import {connect} from "react-redux" ;
import  {clearCart} from "../store/actions/actions";



class Cart extends React.Component{

 

 
  placeOrder = () =>{
//send request to the server
//clear cart

this.props.clearCart();
alert('we recieved your order, and we are working on it. ');



  };
  
   render(){


        return(

              <div>  

                <br/>                
                <br/>
                
                

                  <h1>Cart</h1>
              
                  <div className="row">

                {this.props.cartItems.map((item,index) =>  //boucle pour cree 4 produits
                <div className={'col-3'} key={index}>
                          <CartItem item={item} index={index}/>
                </div>
                )}
              </div>

          <br/>
          <h3> Total : {this.props.total} </h3>
          <br/>


        <div class="d-grid gap-2">
          <button className="btn btn-primary" type="button"  onClick={this.placeOrder} >Place order</button>
        </div>  
        <br/>
        <br/>

        </div>
          
                );
          }}

  const  mapStateToProps = (state) => {
            return {

                cartItems:state.cart,

            total:  state.cart.reduce((total,item) => total + item.quantity * item.product.price, 0),
          
            };
  }
   
  const  mapDispatchToProps = (dispatch) => {
    return {
  
     clearCart: ()  => dispatch(clearCart()),    
    };
  }

export default connect(mapStateToProps,mapDispatchToProps)(Cart);