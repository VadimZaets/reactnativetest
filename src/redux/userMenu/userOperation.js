import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRollsApi, getSetsApi } from "../../utils/fetch";

export const getRolls = createAsyncThunk("menu/rolls", async (_, thunkApi) => {
  try {
    const data = await getRollsApi();

    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const getSets = createAsyncThunk("menu/sets", async (_, thunkApi) => {
  try {
    const data = await getSetsApi();
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
