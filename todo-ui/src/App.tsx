import { useState, useCallback } from "react";
import apiClient from "./api/apiClient";
import Button from "@mui/material/Button";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Routes, Route } from "react-router-dom";

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
      <Navbar />
      <p>Hello</p>
      <Button variant="outlined" onClick={callFetchHandler}>
        Call fetch
      </Button>
      <div>{dataFetch}</div>
      <Button onClick={callAxiosHandler}>Call axios</Button>
      <div>{dataAxios}</div>
      <a href="/login">Login</a>
      <a href="/logout">Log out</a>
      <div>{error}</div>
    </>
  );
}

export default App;
