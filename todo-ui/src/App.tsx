import React, { useState, useCallback } from "react";
import { Client } from "./api/apiClient.g.nswag";
import axios from "axios";

function App() {
  const [dataAxios, setDataAxios] = useState("");
  const [dataFetch, setDataFetch] = useState("");
  const [error, setError] = useState(null);

  const callFetchHandler = useCallback(async () => {
    try {
      const text = await (await fetch(`/api/GetUserClaims`)).text();
      setDataFetch(text);
    } catch (error: any) {
      setError(error.message);
    }
  }, []);

  const callAxiosHandler = useCallback(async () => {
    try {
      const axiosInstance = axios.create({ transformResponse: (data) => data });
      let client = new Client("/api", axiosInstance);
      let text = await client.getUserClaims();
      setDataAxios(text.name! + " - " + text.authType);
    } catch (error: any) {
      setError(error.message);
    }
  }, []);

  return (
    <>
      <p>Hello</p>
      <button onClick={callFetchHandler}>Call fetch</button>
      <div>{dataFetch}</div>
      <button onClick={callAxiosHandler}>Call axios</button>
      <div>{dataAxios}</div>
      <a href="/.auth/login/github">Login</a>
      <a href="/.auth/logout">Log out</a>
      <div>{error}</div>
    </>
  );
}

export default App;
