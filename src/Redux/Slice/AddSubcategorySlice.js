import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSubcategory = createAsyncThunk(
    "subcategory/fetchSubcategory",
    async () => {
        const response = await fetch("http://localhost:9001/api/subcategory/get-subcategory/");
        const data = await response.json();
        return data;
    }
);

export const postSubcategory = createAsyncThunk(
    "subcategory/postSubcategory",
    async (data) => {
        try {
            const response = await axios.post("http://localhost:9001/api/subcategory/create-subcategory/", data);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
);

export const putSubcategory = createAsyncThunk(
    "subcategory/putSubcategory",
    async ({ subcategoryId, data }) => {
        try {
            const response = await axios.put(`http://localhost:9001/api/subcategory/update-subcategory/${subcategoryId}`, data);
            console.log(response.data, "30{Slice}")
            return response.data;
        } catch (error) {
            throw error;
        }
    }
);

export const deleteSubcategory = createAsyncThunk(
    "subcategory/deleteSubcategory",
    async (subcategoryId) => {
        try {
           let response = await axios.delete(`http://localhost:9001/api/subcategory/delete-subcategory/${subcategoryId}`);

            return response.subcategoryId; 
        } catch (error) {
            throw error;
        }
    }
);

const AddSubcategorySlice = createSlice({
    name: "subcategory",
    initialState: {
        data: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSubcategory.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchSubcategory.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchSubcategory.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });

        builder.addCase(postSubcategory.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(postSubcategory.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(postSubcategory.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });

        builder.addCase(putSubcategory.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(putSubcategory.fulfilled, (state, action) => {
            state.loading = false;
            state.data = state.data.map(item => {
                if (item.id === action.payload.id) {
                    return action.payload;
                }
                return item;
            });
        });
        builder.addCase(putSubcategory.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });

        builder.addCase(deleteSubcategory.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(deleteSubcategory.fulfilled, (state, action) => {
            state.loading = false;
            if (Array.isArray(state.data)) {
                state.data = state.data.filter(item => item.id !== action.payload);
            }
        });
        builder.addCase(deleteSubcategory.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

export default AddSubcategorySlice.reducer;