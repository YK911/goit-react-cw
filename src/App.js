import React from "react";
import { useRouter } from "./router";
import { StateController } from "./context/StateController";
function App() {
  const router = useRouter(true);
  return <StateController>{router}</StateController>;
}

export default App;
