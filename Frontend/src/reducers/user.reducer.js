import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authSvc from "../services/auth.service";

export const getLoggedInUser = createAsyncThunk(
  "user/getLoggedInUser",
  async (data = null, thunkAPI) => {
    try {
      let userData = await authSvc.getLoggedInUser();
      if (userData.status) {
        return userData.result;
      } else {
        throw userData;
      }
    } catch (exception) {
      throw exception;
    }
  }
);

const UserSlicer = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    setLoggedInUser: (state, action) => {
      state.loggedInUser = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getLoggedInUser.fulfilled, (state, action) => {
      state.loggedInUser = action.payload;
    });
    builder.addCase(getLoggedInUser.rejected, (state, action) => {
      state.loggedInUser = null;
    });
  },
});

export const { setLoggedInUser } = UserSlicer.actions;
export default UserSlicer.reducer;
