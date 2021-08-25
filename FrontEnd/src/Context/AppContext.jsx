import { useEffect, useState } from 'react';
const useResources = () => {
  const song = 'http://192.168.1.5:666/api/v1/resources/music/all';
  const [resources, setResources] = useState();
  useEffect(() => {
    setResources({ loading: true });
    fetch(song, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setResources({ loading: false, data: data.song});
      })
      .catch((error) => error);
  }, [setResources]);

  return resources;
};

export default useResources;
