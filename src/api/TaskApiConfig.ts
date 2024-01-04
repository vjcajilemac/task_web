import axios from "axios";

const config = localStorage.getItem('token')
  ? {
      baseURL: process.env.REACT_APP_BASE_API_URL,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }
  : {
      baseURL: process.env.REACT_APP_BASE_API_URL,
    };


const TaskApiConfig = axios.create(config);

export default TaskApiConfig;
//        Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,