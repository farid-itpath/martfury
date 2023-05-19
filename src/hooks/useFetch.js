import * as React from "react";
import axios from "axios";
import { API_ERROR_MESSAGE } from "../utils/consts";
import client, { METHODS } from "../api/client";
import { isFunction } from "../utils/helper";

const UNMOUNTED_COMPONENT = "component unmount";
const useFetch = ({
  initialUrl = null,
  initialData = null,
  config = {},
  skipOnStart = false,
  onSuccess,
  onFailure,
  transform,
}) => {
  const [url, updateUrl] = React.useState(initialUrl);
  const [data, setData] = React.useState(initialData);
  const [isLoading, setIsLoading] = React.useState(!skipOnStart);
  const [hasError, setHasError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(null);
  const [fetchIndex, setFetchIndex] = React.useState(skipOnStart ? 0 : 1);

  const transformResponse = React.useCallback(
    (response) => {
      try {
        const parsedResponse = JSON.parse(response);
        return transform?.(parsedResponse) ?? parsedResponse;
      } catch (error) {
        throw new Error("Error parsing response JSON data");
      }
    },
    [transform]
  );

  const [axiosConfig, updateConfig] = React.useState({
    ...config,
    ...(transform && { transformResponse }),
  });

  const updateView = React.useCallback((newConfig) => {
    setHasError(false);
    setIsLoading(true);
    if (newConfig) {
      updateConfig((prevConfig) => ({
        ...prevConfig,
        ...newConfig,
      }));
    }

    setFetchIndex((prevFetchIndex) => prevFetchIndex + 1);
  }, []);

  const callFetch = updateView;

  React.useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source();

    const fetchData = async () => {
      const URL = url;
      const { data: response, error } = await client({
        url: URL,
        cancelToken: cancelTokenSource.token,
        method: METHODS.GET,
        ...axiosConfig,
      });
      if (!error) {
        setData(response);
        setHasError(false);
        setErrorMessage(null);
        setIsLoading(false);
        setFetchIndex(0);
        if (isFunction(onSuccess)) onSuccess(response);
      } else {
        const errorMsg = error?.message || API_ERROR_MESSAGE;
        // in case cancel token error - do not update react state to prevent memory leak
        if (errorMsg === UNMOUNTED_COMPONENT) return null;

        setHasError(true);
        setIsLoading(false);
        setFetchIndex(0);
        setErrorMessage(`error_${errorMsg}`);

        if (isFunction(onFailure)) onFailure(errorMsg);
      }
      return { response, error };
    };

    if (fetchIndex > 0 && url) {
      fetchData();
    }

    return () => {
      cancelTokenSource.cancel(UNMOUNTED_COMPONENT);
    };
  }, [url, axiosConfig, fetchIndex, onSuccess, onFailure]);

  return {
    data,
    isLoading,
    hasError,
    errorMessage,
    callFetch,
    updateUrl,
    updateConfig,
  };
};

export default useFetch;
