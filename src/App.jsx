import { Route, Routes } from "react-router-dom"
import { MasterLayout } from "./components/layouts/MasterLayout"
import { ErrorPage } from "./pages/ErrorPage"
import { HomePage } from "./pages/HomePage"
import { ProductPage } from "./pages/product/ProductPage"
import { Selected } from "./pages/product/Selected"
import { SingleProductPage } from "./pages/product/SingleProductPage"
import { ProductItemPage } from "./pages/product/ProductItemPage"
import { Cart } from "./pages/product/Cart"
import { Logged } from "./pages/user/Logged"

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<MasterLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path='product/:id' element={<ProductPage/>}/>
                <Route path='product/:id/:item' element={<ProductItemPage/>}/>
                <Route path='product/:id/:item/:product' element={<SingleProductPage/>}/>
                <Route path='wishlist' element={<Selected/>}/>
                <Route path='user' element={<Logged/>}/>
                <Route path='cart' element={<Cart/>}/>
                <Route path='*' element={<ErrorPage/>}/>
            </Route>
        </Routes>
    )
}

export { App }