import { SingleProductList } from "../../components/partials/SingleProductList";
import { BreadCrumb } from "../../components/partials/BreadCrumb";
import { useEffect } from "react";
import { useGetProductsQuery } from "../../store/query/productsApi";
import { fillterByid } from "../../utilities/fillters";
import { useSelector } from "react-redux";
import { useState } from "react";

const SingleProductPage = () => {
    const modal = useSelector((state) => state.general.search);
    const { productId } = useSelector((state) => state.product_item);
    const [breads, setBreads] = useState([]);
    const { data } = useGetProductsQuery();

    useEffect(() => {
        if (fillterByid(data, productId).length) {
            setBreads([...fillterByid(data, productId)[0].bread]);
        } else {
            setBreads([]);
        }
    }, [modal]);

    return (
        <>
            <BreadCrumb paths={breads} /> : <SingleProductList />
        </>
    );
};

export { SingleProductPage };
