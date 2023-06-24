import React, { useState, useCallback } from "react";
import { Client } from "./api/apiClient.g.nswag";

function App() {
  const [dataAxios, setDataAxios] = useState("");
  const [dataFetch, setDataFetch] = useState("");
  const [error, setError] = useState(null);

  const callFetchHandler = useCallback(async () => {
    try {
      const text = await (await fetch(`/api/HttpGetUserClaims`)).text();
      setDataFetch(text);
    } catch (error: any) {
      setError(error.message);
    }
  }, []);

  const callAxiosHandler = useCallback(async () => {
    try {
      let client = new Client("/api");
      let text = await client.httpGetUserClaims();
      setDataAxios(text.name!);
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
