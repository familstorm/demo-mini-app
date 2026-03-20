import { useState, useEffect } from 'react'

const useFetch = (url, method = 'GET', payload = null, option = {}) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const config = {
      method,
      headers: {
        "Content-Type": "application/json",
        ...option?.headers || {}
      },
      ...option,
    }
    if (payload)
      config.body = JSON.stringify(payload)
    fetch(url, config)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url, method]);

  return [data];
}

export default useFetch;
