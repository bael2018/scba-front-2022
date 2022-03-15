import cls from "../../scss/components/partials/singleproductlist.module.scss";
import { useGetProductsQuery } from "../../store/query/productsApi";
import { setZoomImage } from "../../store/slices/productItemSlice";
import { SingleProductFooter } from "./SingleProductFooter";
import { fillterByid } from "../../utilities/fillters";
import { toArrayWithId } from "../../utilities/toArray";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Currency } from "../elements/Currency";
import { Empty } from "./Empty";
import { ProductImages } from "./ProductImages";
import ProductParams from "./ProductParams";
import { ViewImage } from "./ViewImage";

const SingleProductList = () => {
    const modal = useSelector((state) => state.general.search);
    const { productId } = useSelector((state) => state.product_item);
    const [image, setImage] = useState("");
    const { data } = useGetProductsQuery();
    const dispatch = useDispatch();

    useEffect(() => {
        setImage(fillterByid(data, productId)[0]?.mainImage);
    }, [modal]);

    const activeImage = (pic) => {
        setImage(pic);
    };

    return toArrayWithId(data).length ? (
        <>
            {fillterByid(data, productId).map(
                ({
                    images,
                    productCode,
                    id,
                    price,
                    discountPrice,
                    color,
                    size,
                    title,
                    description,
                }) => {
                    return (
                        <div key={id} className={cls.single}>
                            <ProductImages
                                images={images}
                                active={image}
                                setActive={activeImage}
                            />
                            <div
                                className={cls.single_image}
                                onClick={() => dispatch(setZoomImage())}
                            >
                                <img src={image} alt="inner" />
                            </div>
                            <div className={cls.single_body}>
                                <h3>{title}</h3>
                                <p>Product code: {productCode}</p>
                                <Currency
                                    price={price}
                                    discountPrice={discountPrice}
                                />
                                <ProductParams
                                    description={description}
                                    color={color}
                                    size={size}
                                />
                                <SingleProductFooter id={id} />
                            </div>
                        </div>
                    );
                }
            )}
            <ViewImage image={image} />
        </>
    ) : (
        <Empty text={"Product"} />
    );
};

export { SingleProductList };
