import {useEffect, useState} from 'react';
import {ListArticleProps, ServerError} from '../../types/interfaces';
import axios, {AxiosError} from 'axios';

const useFetch = (params: string) => {
  const [data, setData] = useState<ListArticleProps>();
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [onRefresh, setOnRefresh] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios(
          `https://raw.githubusercontent.com/damaryosaaji/freeapi/main/${params}.json`,
        );
        if (response.status === 200) {
          setData(response.data);
          setError(null);
        }
      } catch (err) {
        if (axios.isAxiosError(err)) {
          const serverError = err as AxiosError<ServerError>;
          if (serverError && serverError.response) {
            setError(serverError.response.data);
          }
        }
      } finally {
        setLoading(false);
        setOnRefresh(false);
      }
    };
    fetchData();
  }, [params, onRefresh]);

  return {data, error, loading, onRefresh, setOnRefresh};
};

export default useFetch;
