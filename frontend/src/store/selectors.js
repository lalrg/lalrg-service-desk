import { selector } from "recoil";
import { AuthState } from "./store";

const isLoggedInSelector = selector({
  key: "isLoggedIn",
  get: ({ get }) => {
    if (!get(AuthState)) return false;
    return true;
  },
});

export { isLoggedInSelector };
