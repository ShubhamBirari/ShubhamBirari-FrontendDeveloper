// ** Redux Imports
import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { baseUrl } from '../app.config'
import axios from 'axios'

export const getAllCapsules = createAsyncThunk(
  'capsules/getAllCapsules',
  async ({ params }) => {
    console.log(params)
    const response = await axios.get(baseUrl() + `/capsules`, { params })
    return {
      allCapsules: response?.data
    }
  }
)

export const capsuleSlice = createSlice({
  name: 'capsules',
  initialState: {
    allCapsules: [],
    loader: true,
    params: {
      offset: 0,
      limit: 9,
      status: '',
      mission: '',
      type: ''
    },
    totalPages: 0,
    selected: null,
    filters: {
      edp: ''
    }
  },
  reducers: {
    selectAttendance: (state, action) => {
      if (action.payload === null) {
        state.selected = null
      } else {
        state.selected = {
          ...action.payload,
          subtrackCompleteDate: ''
        }
      }
    },
    selectedFilters: (state, action) => {
      if (action.payload === null) {
        state.filters = {
          edp: ''
        }
      } else {
        state.filters = action.payload
      }
    },
    setLoader: (state, action) => {
      state.loader = action.payload
    },
    setPageNo: (state, action) => {
      state.params = { ...state.params, pageNo: action.payload }
    },
    setPageSize: (state, action) => {
      state.params = { ...state.params, pageSize: action.payload }
    },
    setParam: (state, action) => {
      state.params = { ...state.params, ...action.payload }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCapsules.fulfilled, (state, action) => {
      state.allCapsules = action?.payload?.allCapsules
      state.totalPages = action?.payload?.totalPages
      state.loader = false
    })
  }
})

const store = configureStore({
  reducer: capsuleSlice,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false
    })
  }
})

export const { setParam, setPageNo, setPageSize, setLoader } =
  capsuleSlice.actions

export { store }
