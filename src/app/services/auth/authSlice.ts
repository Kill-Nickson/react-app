import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { DetailResponse, TokenObtainPairWithExpiration, TokenWithExpirationResponse } from '../../../openapi/api';
import { AxiosError } from "axios";
import ApiService from '@/openapi/apiService';
import { PURGE } from 'redux-persist';

export const signIn = createAsyncThunk<TokenWithExpirationResponse, TokenObtainPairWithExpiration, { rejectValue: DetailResponse }>(
    'auth/sign-in',
    async (loginDto, thunkApi) => {
        try {
            const response = await ApiService.accounts().accountsLoginCreate({ data: loginDto });
            return response.data;
        } catch (error: unknown) {
            if (error instanceof AxiosError && error?.response?.data?.detail) {
                return thunkApi.rejectWithValue(error.response?.data);
            } else {
                return thunkApi.rejectWithValue({ detail: "Unknown error"});
            }
        }
    }
);

interface AuthState {
    access_token: string | null | undefined;
    refresh_token: string | null;
    user_id: number | null | undefined;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    isAuth: boolean;
}

const initialState: AuthState = {
    access_token: null,
    refresh_token: null,
    user_id: null,
    status: 'idle',
    isAuth: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signIn.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(signIn.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.access_token = action.payload.access;
                state.refresh_token = action.payload.refresh;
                state.user_id = action.payload.user_id;
                state.isAuth = true;
            })
            .addCase(signIn.rejected, (state) => {
                state.status = 'failed';
                state.access_token = null;
                state.refresh_token = null;
                state.user_id = null;
                state.isAuth = false;
            })
            .addCase(PURGE, () => initialState);
    },
});

export const authInitialState = initialState;
export default authSlice.reducer;
