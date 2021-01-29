import { name } from '../package.json'

if (typeof window === "undefined") {
  throw new Error(`${name} package can only be used on browser`);
}

export { useLocalStorage } from "./useLocalStorage";
