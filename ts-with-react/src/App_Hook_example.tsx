import React from "react";

import useURLLoader from "./hooks/useURLLoader";

interface IShowResult {
  message: string;
  status: string;
}

function App() {
  const [data, loading] = useURLLoader(
    "https://dog.ceo/api/breeds/image/random",
    []
  );
  const dogResult = data as IShowResult;

  return (
    <div className="App">
      {loading ? (
        <p>loading...</p>
      ) : (
        <img src={dogResult && dogResult.message} />
      )}
    </div>
  );
}

export default App;
