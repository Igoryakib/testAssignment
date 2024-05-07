import React from 'react';
import { Route, Routes } from 'react-router-dom';

// utils
import routes from '../utils/routes';

// Pages
import ProductListPage from '../Pages/ProductListPage/ProductListPage';
import ProductDetailPage from '../Pages/ProductDetailPage/ProductDetailPage';

function App() {
  return (
    <Routes>
      <Route path={routes.productListPage} element={<ProductListPage/>}/>
      <Route path={routes.productPage} element={<ProductDetailPage/>}/>
      <Route path={routes.notFoundPage}/>
    </Routes>
  );
}

export default App;
