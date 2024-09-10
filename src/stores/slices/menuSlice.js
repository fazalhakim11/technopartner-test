import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: { menu: [] },
  reducers: {
    setMenu: (state, action) => {
      state.menu = action.payload;
    },
  },
});

export const getMenu = () => async (dispatch) => {
  try {
    const res = await axios.post(
      "https://soal.staging.id/api/menu",
      { show_all: "1" },
      {
        headers: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJlNzg4NjlmNzc5ODY2ODRhIiwianRpIjoiMTQwZDFmMzgwMmUyNGQyY2Q5YzhmYzQyNDUyZjY2MmI1NjQxNzQ1YmY0YzE1YmJlM2U1OGU1YjhmNjAyZTgyZjk4NDU3NDMyOWQ3ODQ4MDEiLCJpYXQiOjE3MjU5Mzk2NjguNTIwNTE4LCJuYmYiOjE3MjU5Mzk2NjguNTIwNTIyLCJleHAiOjE3NTc0NzU2NjguNTAyMDA2LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.TSUq_T7nRdukha6_JrQ8gqJyJzbm-_jsI7cQzlZ1XVoZWtzM5TpotZSztm2SwMbWxSvzHeiHnijoZ7t3rEMo7gbtmdRxaFFubMKgZI8D7pmjzKsikab61gN3yx5vm4n0chbkCh1CAEG2Bo2dXgT49csMOiPT9NsnrjRUbteLSD9uAt7NNm88ckg-UPBx5eD13Jzg8AQrYCG38dgwbpB1Dgs569GdeL7be9Hme_GaaU7DcdbPPb-4Nm9--f70RBFXr0YasROTJdrLqI1mmrviKPd2mKbYKL_EvISYyFHLbysBY5KC4LOd5RI7eVcwk81Hw0ZwwvhmT19xr_YM55UWkjIHqVm-i4We4ullPCtbaIJALJMcgGTXrLPf7J038oieCSCWVCwiZYUuGbnIm1h2BU8hPtWxir2Hhur6Kekw8cTkCsoM29jq8k6AvrFJJBhB8NzhTw7zawdIQBVPyLqe2zj4K0IesEiQUhRT0WJAriP962Z0peQdIhklInzOd_9w7LWLCqHVbKvVLZsXORBADil7QGo1rUnbG7VhLLlZ_VMvje9yhaUOGKSVHIcCRmPhIVI0grTvMwurFmR8-yW8dBsVzUfDodr9H8u1YbxM9zk9y5YCLtOUfVLnuta6tGFSgjY2J55cMk-TzNa-gH6RmsIzfj7y_d6lWJgtKI2cCbY",
        },
      }
    );
    dispatch(setMenu(res.data.result));
  } catch (error) {
    console.log(error);
  }
};

export const { setMenu } = menuSlice.actions;
export default menuSlice.reducer;
