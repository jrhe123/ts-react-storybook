import React, { useState } from "react";

import Button, { ButtonType, ButtonSize } from "./components/Button/button";
import Alert, { AlertType } from "./components/Alert/alert";

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      {toggle && (
        <Alert
          alertType={AlertType.Danger}
          title="this is my title"
          message="this is my message"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          this is my children
        </Alert>
      )}
      <Button className="abc">default</Button>
      <Button disabled>default disabled</Button>
      <Button btnType={ButtonType.Primay} size={ButtonSize.Large}>
        primary large
      </Button>
      <Button btnType={ButtonType.Primay} size={ButtonSize.Small}>
        primary small
      </Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
        danger small
      </Button>
      <Button
        btnType={ButtonType.Link}
        href="https://www.google.ca"
        target="_blank"
      >
        link
      </Button>
      <Button
        btnType={ButtonType.Link}
        href="https://www.google.ca"
        target="_blank"
        disabled
      >
        link disabled
      </Button>
    </div>
  );
}

export default App;
