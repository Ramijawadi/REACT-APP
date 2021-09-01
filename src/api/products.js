import Products from "./products.json";



export function getAll(){

return  Promise.resolve(Products);  /*c'est une fonction AJAX recupere data apartir de Api */ 


}
export function getById(id){

  const product = Products.find(item => item.id ===id) ;
    return Promise.resolve(product);
    
 }
export default{
getAll,
getById

}