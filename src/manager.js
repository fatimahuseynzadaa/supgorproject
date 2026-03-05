

// import products from "../src/data/products";
// import { deleteFromCategory, filterCategory, setCategoryProducts } from "./tools/actions/categoryActions";
// import { addToBasket, deleteFromBasket, setProducts } from "./tools/actions/productAction";

let mystore;
export const setStore = (store) => {
    mystore = store;
};

// export const manager = () => {

//     mystore.dispatch(setProducts(products));
//     mystore.dispatch(setCategoryProducts(products));
//     console.log("initial state", mystore.getState());

//     const product1 = mystore.getState().product.all[0];
//     const product2 = mystore.getState().product.all[1];
//     mystore.dispatch(addToBasket(product1));
//     mystore.dispatch(addToBasket(product2));
//     console.log("sebete elave olunduqdan sonra", mystore.getState().product);

//     mystore.dispatch(deleteFromBasket(product1.id));
//     console.log("sebetden silindikden sonra:", mystore.getState().product);



//     mystore.dispatch(deleteFromCategory("healthcare"))
//      console.log("categoryden silindikden sonra:", mystore.getState().category);

//     mystore.dispatch(filterCategory("bakery"));
//      console.log("categoryden filterden sonra:", mystore.getState().category);
   


// };
