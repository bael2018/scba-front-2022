import { ProductCategoryPage } from "./pages/product/ProductCategoryPage";
import { SingleProductPage } from "./pages/product/SingleProductPage";
import { ProductItemPage } from "./pages/product/ProductItemPage";
import { MasterLayout } from "./components/layouts/MasterLayout";
import { Wishlist } from "./pages/product/Wishlist";
import { Route, Routes } from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage";
import { HomePage } from "./pages/HomePage";
import { Cart } from "./pages/product/Cart";
import { Logged } from "./pages/user/Logged";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<MasterLayout />}>
                <Route index element={<HomePage />} />
                <Route path="product/:id" element={<ProductCategoryPage />} />
                <Route path="product/:id/:item" element={<ProductItemPage />} />
                <Route path="product/:id/:item/:product" element={<SingleProductPage />}/>
                <Route path="wishlist" element={<Wishlist />} />
                <Route path="user" element={<Logged />} />
                <Route path="cart" element={<Cart />} />
                <Route path="*" element={<ErrorPage />} />
            </Route>
        </Routes>
    );
};

export { App };
