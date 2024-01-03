
import TaskApiConfig from "../api/TaskApiConfig";
/*import { AppContext } from "../context";
import { useContext } from 'react';
*/
const ApiGet = async (url_endpoint: string) => {
  //const { login } = useContext( AppContext );
  const resp = await TaskApiConfig.get(`api/${url_endpoint}`).then((response)=>{return handleResponse(response)}).catch((error) => {
    handleError(error);
    return [];
  });


  return resp;
};


const ApiPost = async (url_endpoint: string, data: Object) => {
  const resp = await TaskApiConfig.post(`api/${url_endpoint}`, data).then((response)=>{return response.data}).catch(
    (error) => {
      handleError(error);
      return [];
    }
  );

  return resp;
};
const ApiDelete = async (url_endpoint: string) => {
  const resp = await TaskApiConfig.delete(`api/${url_endpoint}`).then((response)=>{return response.data}).catch(
    (error) => {
      handleError(error);
      return [];
    }
  );

  return resp;
};
const ApiPatch = async (url_endpoint: string) => {
  const resp = await TaskApiConfig.patch(`api/${url_endpoint}`).then((response)=>{return response.data}).catch(
    (error) => {
      handleError(error);
      return [];
    }
  );

  return resp;
};

const handleError = (error: any) => {

  if (error.name === "AxiosError") {
    if (error.response && error.response.status === 401) {
      //Unauthenticated


    } else {
      console.log("Alert Message")

    }
  } else {
    //show alert message
    console.log("Alert Message")
  }
};

const handleResponse = (resp: any) => {
  //console.log("resp", resp)

  if (resp.status !== 200) {
    //Show message
      console.log("Error al llamar un recurso del servidor, por favor contactar al administrador")

  } 

  return resp.data;
};

export { ApiGet, ApiPost, ApiDelete, ApiPatch};
