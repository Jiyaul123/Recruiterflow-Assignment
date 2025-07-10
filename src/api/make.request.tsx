import axios from "axios";
import { toast } from "react-hot-toast";

export default async function makeRequest(
  url: any,
  method: any,
  inputPayload?: any
) {
  const requestConfig = {
    baseURL: import.meta.env.VITE_BASE_URL,
    url: url,
    method: method,
    data: {},
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  };

  if (method !== "get" && inputPayload) {
    requestConfig.data = inputPayload;
  }

  return await axios
    .request(requestConfig)
    .then((res) => {
      if (res.status === 200) {
        return res;
      }
    })
    .catch((e) => {
      console.log(e, "error makeReuqesr");
      toast.error(e.response.data || e.response.data.message || "Something went wrong");
      return e;
    });
}
