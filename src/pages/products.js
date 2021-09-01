import React from "react";
import ProductsItem from "../components/ProductsItem";
import ProductsApi from "../api/products";


export default class Products extends React.Component{
 
 
 state = {
   products: [],

  };
      componentDidMount(){     /* cette fonction utuliser data et fait mise a jour a
                                                          notre component */ 
         ProductsApi.getAll()
         .then( data => {
         this.setState({
             products: data
          })      
          });
        }

   render(){
        return(

       <div>  
          <h1>Products</h1>
      
           <div className="row">

        {this.state.products.map(product =>  //boucle pour cree 4 produits
         <div className={'col-3'} key={product.id}>
                 <ProductsItem product={product}/>
        </div>
        )}
   </div>
 </div>
  
        );
  }}
