import { useLocalStorage } from "./useLocalStorage";

if (typeof window === "undefined") {
  throw new Error("bgon/custom-hooks package can only be executed on browser");
}

export default {
  useLocalStorage,
};
