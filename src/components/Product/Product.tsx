import React, {FC, useEffect} from "react";
import styles from './Product.module.css';

// types
import { IProduct } from "../../types/interfaces";
import { getListProducts } from "../../utils/fetchApi";
import { Link } from "react-router-dom";



const Product:FC<IProduct> = ({imageUrl, name, count, size, comments, id}) => {
    return(
        <div className={styles.card}>
            <img className={styles.cardImg} src={imageUrl} alt="productImg"/>
            <h3 className={styles.cardTitle}>{name}</h3>
            <Link className={styles.btnReadMore} to={`/${id}`}> Read more...</Link>
            {/* <div>
                <div>
                <span>`Count: ${count}`</span>
                <span>`Width: ${size.width}`</span>
                <span>`Height: ${size.height}`</span>
                </div>
                <ul>
                    {comments.list.map(item => {
                        return(
                            <div>
                                <p>{item.description}</p>
                                <h4>{item.date}</h4>
                            </div>
                        );
                    })}
                </ul>
            </div> */}
        </div>
    );
};

export default Product;