import axios from "axios-jsonp-pro";
import { createContext, useState, useEffect, Children } from "react";

const AppState = ({ children }) => {
  const [resources, setResources] = useState({
    data: null,
    loading: true,
  });

  const getResources = async () => {
    const getData = async (resource) => {
      const { data } = await axios.get(
        `http://0.0.0.0:3001/${resource}`
      );
      return data;
    };
    const postData = async (resource) => {
      const { data } = await axios.post(
        `http://0.0.0.0:3001/${resource}`
      );
      return data;
    };
    const putData = async (resource) => {
      const { data } = await axios.put(
        `http://0.0.0.0:3001/${resource}`
      );
      return data;
    };
    const deleteData = async (resource) => {
      const { data } = await axios.delete(
        `http://0.0.0.0:3001/${resource}`
      );
      return data;
    };

    setResources({
      data: {
        getMonitoria: await getData("allMonitoria"),
        getMonitor: await getData("allMonitor"),
        getAsignatura: await getData("allAsignatura"),
        postMonitoria: await postData("guajolotas"),
        postMonitor: await postData("bebidas"),
        postAsignatura: await postData("bebidas"),
        putMonitoria: await putData("guajolotas"),
        putMonitor: await putData("bebidas"),
        putAsignatura: await putData("bebidas"),
        delMonitoria: await deleteData("guajolotas"),
        delMonitor: await deleteData("bebidas"),
        delAsignatura: await deleteData("bebidas"),
      },
      loading: false,
    });
  };

  useEffect(() => {
    getResources();
  }, []);

  return (
    <AppContext.Provider
      value={{
        resources,
        getResources,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const AppContext = createContext();

export default AppState;
