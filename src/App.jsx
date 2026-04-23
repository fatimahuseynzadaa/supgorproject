import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Layout/Header";
import Blog from "./pages/Blog";
import Shop from "./pages/Shop";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Footer from "./Layout/Footer";
import { ModeProvider } from "./context/ModeProvider";
import { ApiProvider } from "./context/ApiProvider";
import Basket from "./pages/Basket";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";

import NotFound from "./pages/NotFound";
import Dashboard from "./pages/admin/Dashboard";
import ProductList from "./pages/admin/product/ProductList";
import ProductAdd from "./pages/admin/product/ProductAdd";
import { setProducts } from "./tools/actions/productAction";
import { setCategoryProducts } from "./tools/actions/categoryActions";
import products from "./data/products";
import categories from "./data/categories";
import { useEffect } from "react";
import CategoryList from "./pages/admin/category/CategoryList";
import CategoryAdd from "./pages/admin/category/CategoryAdd";
import ProductEdit from "./pages/admin/product/ProductEdit";
import CategoryEdit from "./pages/admin/category/CategoryEdit";

// import { useContext } from "react";

function App() {
  // const[mode,setMode]= useContext()
  // const product = useSelector(p=>p)

  // const products = useSelector(state => state.product);
  // const filteredProducts = useSelector(state => state.product.basket);
  // const categories = useSelector(state => state.category);

  // console.log("products",products);
  // console.log("basket",filteredProducts );
  // console.log("categories:", categories);

  const dispatch = useDispatch();

  dispatch(setProducts(products));
  dispatch(setCategoryProducts(categories));

  return (
    <BrowserRouter>
      <ApiProvider>
        <ModeProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            {/* <Route path="/shop" element={<Shop />} /> */}
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/dashboard/product" element={<ProductList />}></Route>
            <Route
              path="/dashboard/product/add"
              element={<ProductAdd />}
            ></Route>
            <Route
              path="/dashboard/product/edit/:id"
              element={<ProductEdit />}
            />
            <Route
              path="/dashboard/category"
              element={<CategoryList />}
            ></Route>
            <Route
              path="/dashboard/category/add"
              element={<CategoryAdd />}
            ></Route>
            <Route
              path="/dashboard/category/edit/:value"
              element={<CategoryEdit />}
            />
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
          <Footer />
          <ToastContainer />
        </ModeProvider>
      </ApiProvider>
    </BrowserRouter>
  );
}

export default App;
