import { configureStore } from "@reduxjs/toolkit";
import AddCategory from "./Slice/AddCategory";
import AddSubcategorySlice from "./Slice/AddSubcategorySlice";
import AddProductSlice from "./Slice/AddProductSlice";

export const store = configureStore({
    reducer: {
        category: AddCategory,
        subcategory: AddSubcategorySlice,
        product: AddProductSlice
    }
})