import { createSlice } from "@reduxjs/toolkit";

const Loginslice = createSlice({
  name: "login",
  initialState: {
    userName: "",
  },
  reducers: {
    LoginData: (state, action) => {
      state.userName = action.payload;
    },
  },
});

export const { LoginData } = Loginslice.actions;
export default Loginslice.reducer;
