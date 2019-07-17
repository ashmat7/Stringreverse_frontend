import axios from "axios";

const BASE_URL = "http://localhost:8000/api/";

const string_rev = string => {
  var promise = axios
    .get(BASE_URL, {
      params: {
        string: string
      }
    })
    .then(response => {
      console.log(response);
      return response.data.string;
    });

  return promise;
};

export default string_rev;
