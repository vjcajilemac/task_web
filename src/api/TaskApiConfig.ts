import axios from "axios";

const config = localStorage.token
  ? {
      baseURL: process.env.REACT_APP_BASE_API_URL,
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.token)}`,
      },
    }
  : {
      baseURL: process.env.REACT_APP_BASE_API_URL,
    };


const TaskApiConfig = axios.create(config);

export default TaskApiConfig;
