import { selector } from "recoil";
import { dataState } from "./atom";
export const updateDataState = selector({
  key: "updateDataState",
  get: ({ get }) => {
    const data = get(dataState);
    return data;
  },
});
