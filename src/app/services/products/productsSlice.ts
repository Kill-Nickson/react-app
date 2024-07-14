import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { DetailResponse, PaginatedProduct, Product, ProductsApiProductsListRequest } from '../../../openapi/api';
import { AxiosError } from "axios";
import ApiService from '@/openapi/apiService';

type ProductsApiProductsListRequestWithSignal = {
    requestDto: ProductsApiProductsListRequest;
    signal: AbortSignal;
}

export const productsList = createAsyncThunk<PaginatedProduct, ProductsApiProductsListRequestWithSignal,{ rejectValue: DetailResponse }>(
    'products/list',
    async (RequestWithSignalDto, thunkApi) => {
        const { requestDto, signal } = RequestWithSignalDto;
        try {
            const response = await ApiService.products().productsList(requestDto, { signal });
            return response.data;
        } catch (error: unknown) {
            if (error instanceof AxiosError && error?.response?.data?.detail) {
                return thunkApi.rejectWithValue(error.response?.data);
            } else {
                return thunkApi.rejectWithValue({ detail: "Unknown error" });
            }
        }
    }
);

interface ProductsState {
    products: Array<Product>;
    count: number;
    status: string;
}

const initialState: ProductsState = {
    products: [],
    count: 0,
    status: 'idle',
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(productsList.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(productsList.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = action.payload.results;
                state.count = action.payload.count;
            })
            .addCase(productsList.rejected, (state) => {
                state.status = 'failed';
            })
    },
});

export const productsInitialState = initialState;
export default productsSlice.reducer;
