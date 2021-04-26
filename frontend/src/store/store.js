import { atom } from "recoil";

const AuthState = atom({
  key: "auth",
  default: false,
});

export { AuthState };
