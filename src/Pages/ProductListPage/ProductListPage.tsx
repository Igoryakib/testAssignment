import React, { FC, useEffect } from "react";
import styles from './ProductListPage.module.css';
// redux
import { getAllProducts } from "../../redux/operations";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

// components
import ListProducts from "../../components/ListProducts/ListProducts";


const ProductListPage: FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(state => state.productsReducer.products);
  useEffect(() => {
    dispatch(getAllProducts())
  }, [])
  return (
    <main className={styles.homepage}>
      <ListProducts list={products} />
    </main>
  );
};

export default ProductListPage;