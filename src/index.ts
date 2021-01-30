if (typeof window === "undefined") {
  throw new Error(`bgon-custom-hooks package can only be used on browser`);
}

export { useLocalStorage } from "./useLocalStorage";
