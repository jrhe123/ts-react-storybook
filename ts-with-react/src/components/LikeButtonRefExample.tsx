import React, { useState, useEffect, useRef } from "react";

const LikeButtonRefExample: React.FC = () => {
  const [like, setLike] = useState(0);
  const likeRef = useRef(0);
  const didMountRef = useRef(false);
  const domRef = useRef<HTMLInputElement>(null);

  // mock componentDidMount
  useEffect(() => {
    if (didMountRef.current) {
      console.log("this is updated");
    } else {
      didMountRef.current = true;
    }
  });

  useEffect(() => {
    if (domRef && domRef.current) {
      domRef.current.focus();
    }
  });

  function handleAlertClick() {
    setTimeout(() => {
      alert("now: " + likeRef.current);
    }, 3000);
  }

  return (
    <>
      <input type="text" ref={domRef} />
      <button
        onClick={() => {
          setLike(like + 1);
          likeRef.current++;
        }}
      >
        {like}
      </button>
      <button onClick={handleAlertClick}>alert</button>
    </>
  );
};

export default LikeButtonRefExample;
