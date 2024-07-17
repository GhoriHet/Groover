import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategory = createAsyncThunk(
    "category/fetchCategory",
    async () => {
        const response = await fetch("http://localhost:9001/api/category/list-category/");
        const data = await response.json();
        return data;
    }
);

export const postCategory = createAsyncThunk(
    "category/postCategory",
    async (data) => {
        try {
            const response = await axios.post("http://localhost:9001/api/category/create-category/", data);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
);

export const putCategory = createAsyncThunk(
    "category/putCategory",
    async ({ categoryId, data }) => {
        try {
            const response = await axios.put(`http://localhost:9001/api/category/update-category/${categoryId}`, data);
            console.log(response.data, "30{Slice}")
            return response.data;
        } catch (error) {
            throw error;
        }
    }
);

export const deleteCategory = createAsyncThunk(
    "category/deleteCategory",
    async (categoryId) => {
        try {
           let response = await axios.delete(`http://localhost:9001/api/category/delete-category/${categoryId}`);

            return response.categoryId; 
        } catch (error) {
            throw error;
        }
    }
);

const AddCategorySlice = createSlice({
    name: "category",
    initialState: {
        data: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCategory.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchCategory.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchCategory.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });

        builder.addCase(postCategory.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(postCategory.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(postCategory.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });

        builder.addCase(putCategory.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(putCategory.fulfilled, (state, action) => {
            state.loading = false;
            state.data = state.data.map(item => {
                if (item.id === action.payload.id) {
                    return action.payload;
                }
                return item;
            });
        });
        builder.addCase(putCategory.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });

        builder.addCase(deleteCategory.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(deleteCategory.fulfilled, (state, action) => {
            state.loading = false;
            if (Array.isArray(state.data)) {
                state.data = state.data.filter(item => item.id !== action.payload);
            }
        });
        builder.addCase(deleteCategory.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

export default AddCategorySlice.reducer;