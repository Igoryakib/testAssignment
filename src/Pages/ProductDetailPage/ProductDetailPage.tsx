import React, { FC, useEffect, useState } from "react";
import styles from './ProductDetailPage.module.css';
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../../utils/fetchApi";

const ProductDetailPage: FC = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [detailProduct, setDetailProduct] = useState({
        id: 1,
        imageUrl: "https://th.bing.com/th/id/OIG3.5u5ZBGkvLQn1ELp4UqXH",
        name: "Product name",
        count: 4,
        size: {
            width: 200,
            height: 200
        },
        weight: "200g",
        comments: [
            {
                id: 3,
                productId: 1,
                description: "some text here",
                date: "14:00 22.08.2021"
            },
            {
                id: 3,
                productId: 1,
                description: "some text here",
                date: "14:00 22.08.2021"
            }
        ]
    });
    useEffect(() => {
        if (productId)
            getProductById(+productId as number).then(res => setDetailProduct(res)).catch(err => console.log(err))
    }, []);
    const onClickBtnGoBack = () => {
        navigate(-1);
    };
    return (
        <main className={styles.detailPage}>
            <button onClick={onClickBtnGoBack} className={styles.goBackBtn} type="button">Go back</button>
            <section>
                <img className={styles.cardImg} src={detailProduct.imageUrl} alt="productImg" />
                <h3 className={styles.cardTitle}>{detailProduct.name}</h3>
                 <div>
                <div>
                <span>{`Count: ${detailProduct.count}`}</span>
                <span>{`Width: ${detailProduct.size.width}`}</span>
                <span>{`Height: ${detailProduct.size.height}`}</span>
                </div>
                <ul>
                    {detailProduct.comments.map(item => {
                        return(
                            <div>
                                <p>{item.description}</p>
                                <h4>{item.date}</h4>
                            </div>
                        );
                    })}
                </ul>
            </div>
            </section>
        </main>
    );
};

export default ProductDetailPage;