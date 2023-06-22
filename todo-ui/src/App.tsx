import React, { useState, useEffect } from "react";
import { Client } from "./api/apiClient.g.nswag";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    (async function () {
      let c = new Client("http://localhost:7071/api");
      let r = await c.function("Oriol");
      setData(r);
    })();
  });

  return (
    <>
      <p>Hello</p>
      <div>{data}</div>
      <a href="/.auth/login/github">Login</a>
      <a href="/.auth/logout">Log out</a>
    </>
  );
}

export default App;
