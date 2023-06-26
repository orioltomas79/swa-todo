import React, { useState, useCallback } from "react";
import apiClient from "./api/apiClient";


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
      let text = await apiClient.client.getUserClaims();
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
      <a href="/login">Login</a>
      <a href="/logout">Log out</a>
      <div>{error}</div>
    </>
  );
}

export default App;
