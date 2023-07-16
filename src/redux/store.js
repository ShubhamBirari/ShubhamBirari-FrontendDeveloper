// ** Redux Imports
import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { baseUrl } from '../../app.config'
import axios from 'axios'

export const allCapsules = createAsyncThunk(
  'capsules/allCapsules',
  async ({ params }, { dispatch }) => {
    const response = await axios.get(baseUrl() + `/capsules`)
    return {
      allCapsules: response?.data
    }
  }
)

export const capsuleSlice = createSlice({
  name: 'capsules',
  initialState: {
    allCapsules: [],
    loader: false,
    params: {
      pageNo: 1,
      pageSize: 10,
      search: '',
      export: false
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
    setSearch: (state, action) => {
      state.params = { ...state.params, search: action.payload }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(allCapsules.fulfilled, (state, action) => {
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

export { store }
