import CryptoJS from "crypto-js";

export default function encryptStr(str: string) {
  return CryptoJS.MD5(str).toString();
}
