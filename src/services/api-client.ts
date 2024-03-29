import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "0818af8714b9436da86d8ad51c0c5e3c" },
});
