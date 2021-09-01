import React from "react";
import { connect } from "react-redux";
import  {removeFromCart} from "../store/actions/actions";


 function ProductItem (props)
{
    const {item,index}= props;
    const {product}= item;


    return(

          <div class="card">
             <img src={product.image} class="card-img-top" alt="..."/>
              <div class="card-body">
             <h5 class="card-title">{product.name}</h5>
               <p class="card-text">
                  Price {product.price}$
      <br />
       Quantity : {item.quantity}
       <br />

      total :  {item.quantity * product.price}

               </p>
                <button onClick={() =>props.removeFromCart(index)} className="btn btn-danger">
                  <i className="fa fa-trash"  ></i>  Delete
                    </button>
        </div>
</div>
    );
}
const  mapDispatchToProps = (dispatch) => {
  return {

   removeFromCart: (index)  => dispatch(removeFromCart(index)),    
  };

}

export default connect(null,{removeFromCart})(ProductItem);