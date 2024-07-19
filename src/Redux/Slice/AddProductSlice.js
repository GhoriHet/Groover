import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk(
    "product/fetchProduct",
    async () => {
        const response = await fetch("http://localhost:9001/api/product/list-product/");
        const data = await response.json();
        return data;
    }
);

export const postProduct = createAsyncThunk(
    "product/postProduct",
    async (data) => {
        try {
            const response = await axios.post("http://localhost:9001/api/product/create-product/", data);
            console.log(response.data, "{SLice}")
            return response.data;
        } catch (error) {
            throw error;
        }
    }
);

export const putProduct = createAsyncThunk(
    "product/putProduct",
    async ({ productId, data }) => {
        try {
            const response = await axios.put(`http://localhost:9001/api/product/update-product/${productId}`, data);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
);

export const deleteProduct = createAsyncThunk(
    "product/deleteProduct",
    async (productId) => {
        try {
           let response = await axios.delete(`http://localhost:9001/api/product/delete-product/${productId}`);

            return response.productId; 
        } catch (error) {
            throw error;
        }
    }
);

const AddProductSlice = createSlice({
    name: "product",
    initialState: {
        data: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });

        builder.addCase(postProduct.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(postProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(postProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });

        builder.addCase(putProduct.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(putProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.data = state.data.map(item => {
                if (item.id === action.payload.id) {
                    return action.payload;
                }
                return item;
            });
        });
        builder.addCase(putProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });

        builder.addCase(deleteProduct.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(deleteProduct.fulfilled, (state, action) => {
            state.loading = false;
            if (Array.isArray(state.data)) {
                state.data = state.data.filter(item => item.id !== action.payload);
            }
        });
        builder.addCase(deleteProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

export default AddProductSlice.reducer;