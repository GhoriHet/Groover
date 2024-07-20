import { configureStore } from "@reduxjs/toolkit";
import AddCategory from "./Slice/AddCategory";
import AddSubcategorySlice from "./Slice/AddSubcategorySlice";
import AddProductSlice from "./Slice/AddProductSlice";
import selectcategorySlice from "./Slice/SelectCategory";

export const store = configureStore({
    reducer: {
        category: AddCategory,
        selectcategory: selectcategorySlice,
        subcategory: AddSubcategorySlice,
        product: AddProductSlice
    }
})