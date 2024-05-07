import React, {FC} from "react";
import styles from './ListProduct.module.css';
// types
import { IListProducts } from "../../types/interfaces";

//components
import Product from "../Product/Product";

const ListProducts:FC<IListProducts> = ({list}) => {
    return(
        <ul className={styles.productList}>
            {list.map(item => <Product key={item.id} id={item.id} imageUrl={item.imageUrl} name={item.name} count={item.count} weight={item.weight} size={item.size} comments={item.comments}/>)}
        </ul>
    );
};

export default ListProducts;