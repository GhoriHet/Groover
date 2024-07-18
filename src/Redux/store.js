import { configureStore } from "@reduxjs/toolkit";
import AddCategory from "./Slice/AddCategory";
import AddSubcategorySlice from "./Slice/AddSubcategorySlice";

export const store = configureStore({
    reducer: {
        category: AddCategory,
        subcategory: AddSubcategorySlice,
        // product: AddProduct
    }
})