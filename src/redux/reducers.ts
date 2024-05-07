import { createReducer, PayloadAction } from "@reduxjs/toolkit";

import { getAllProducts } from "./operations";
import { IProduct, IProductState } from "../types/interfaces";
  
  const initialState: IProductState = {
    products: [],
    loading: false,
    error: null
  };

  const productsReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllProducts.fulfilled, (state, action: PayloadAction<IProduct[]>) => {
        state.loading = false;
        state.error = null;
        state.products = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action: PayloadAction<unknown>) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  });

export {productsReducer};