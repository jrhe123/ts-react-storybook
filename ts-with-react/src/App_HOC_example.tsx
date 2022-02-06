import React from "react";

import withLoader from "./components/withLoader";

interface IShowResult {
  message: string;
  status: string;
}

const DogShow: React.FC<{
  data: IShowResult;
}> = ({ data }) => {
  return (
    <>
      <h2>Dog show: {data.status}</h2>
      <img src={data.message} />
    </>
  );
};

function App() {
  const WrappedDogShow = withLoader(
    DogShow,
    "https://dog.ceo/api/breeds/image/random"
  );
  return (
    <div className="App">
      <WrappedDogShow />
    </div>
  );
}

export default App;
