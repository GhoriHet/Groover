import { configureStore } from "@reduxjs/toolkit";
import AddCategory from "./Slice/AddCategory";

export const store = configureStore({
    reducer: {
        category: AddCategory
    }
})