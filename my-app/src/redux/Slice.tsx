import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  IFeed,
  IHomeApi,
  ILeft,
  IMovie,
  IRashi,
  IRashiDetail,
} from "./Article";

export interface IType {
  isloading: boolean;
  homeApiData: Array<IHomeApi>;
  movieData: IMovie | null;
  leftApiData: ILeft | null;
  feedApiData: IFeed | null;
  rashiApiData: Array<IRashi>;
  rashidetailApiData: IRashiDetail | null;
  error: boolean;
}

export const initialState: IType = {
  isloading: false,
  homeApiData: [],
  movieData: null,
  leftApiData: null,
  feedApiData: null,
  rashiApiData: [],
  rashidetailApiData: null,
  error: false,
};

export const fetchHomeApi = createAsyncThunk("fetchHomeApi", async () => {
  const homeApiData = await fetch("http://localhost:4000/product");
  return homeApiData.json();
});
export const fetchLeft = createAsyncThunk("fetchLeft", async () => {
  const leftApiData = await fetch(
    "https://nikhilsingh137.github.io/React_data/data/user.json"
  );
  return leftApiData.json();
});
export const fetchFeed = createAsyncThunk("fetchFeed", async () => {
  const feedApiData = await fetch(
    "https://nikhilsingh137.github.io/React_data/data/feed.json"
  );
  return feedApiData.json();
});
export const fetchRashi = createAsyncThunk("fetchRashi", async () => {
  const rashiApiData = await fetch("http://localhost:3000/data");
  return rashiApiData.json();
});
export const fetchRashiDetail = createAsyncThunk(
  "fetchRashiDetail",
  async () => {
    const rashidetailApiData = await fetch("http://localhost:3000/Detail");
    return rashidetailApiData.json();
  }
);

export const fetchMovie = createAsyncThunk(
  "fetchMovie",
  async ({ query }: any) => {
    const movieData = await fetch(
      `https://www.omdbapi.com/?s=${query}&apikey=8e7fcd67`
    );
    return movieData.json();
  }
);

const Slice = createSlice({
  name: "Api",
  initialState,
  extraReducers(builder) {
    builder.addCase(fetchHomeApi.pending, (state, action) => {
      state.isloading = true;
    });
    builder.addCase(fetchHomeApi.fulfilled, (state, action) => {
      state.homeApiData = action.payload;
    });
    builder.addCase(fetchMovie.fulfilled, (state, action) => {
      state.movieData = action.payload;
    });
    builder.addCase(fetchLeft.fulfilled, (state, action) => {
      state.leftApiData = action.payload;
    });
    builder.addCase(fetchFeed.fulfilled, (state, action) => {
      state.feedApiData = action.payload;
    });
    builder.addCase(fetchRashi.fulfilled, (state, action) => {
      state.rashiApiData = action.payload;
    });
    builder.addCase(fetchRashiDetail.fulfilled, (state, action) => {
      state.rashidetailApiData = action.payload;
    });
    builder.addCase(fetchHomeApi.rejected, (state, action) => {
      state.error = true;
    });
  },
  reducers: {},
});

export default Slice.reducer;
