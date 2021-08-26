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
        `http://192.168.1.81:3001/${resource}`
      );
      return data;
    };
    const postData = async (resource) => {
      const { data } = await axios.post(
        `http://192.168.1.81:3001/${resource}`
      );
      return data;
    };
    const putData = async (resource) => {
      const { data } = await axios.put(
        `http://192.168.1.81:3001/${resource}`
      );
      return data;
    };
    const deleteData = async (resource) => {
      const { data } = await axios.delete(
        `http://192.168.1.81:3001/${resource}`
      );
      return data;
    };

    setResources({
      data: {
        getMonitoria: await getData("allMonitoria"),
        getMonitor: await getData("allMonitor"),
        
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
