import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import recordsService from './recordsService';

const initialState = {
  records: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Get records
export const getRecords = createAsyncThunk(
  'records/getAll',
  async (queryParams, thunkAPI) => {
    try {
      return await recordsService.getRecords(queryParams)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const recordsSlice = createSlice({
  name: 'records',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRecords.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getRecords.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.records = action.payload
      })
      .addCase(getRecords.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = recordsSlice.actions
export default recordsSlice.reducer
