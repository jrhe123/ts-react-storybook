import React, { useState } from "react";

import Button, { ButtonType, ButtonSize } from "./components/Button/button";
import Alert, { AlertType } from "./components/Alert/alert";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <Menu
        mode="vertical"
        defaultIndex="0"
        defaultOpenSubMenus={["3"]}
        onSelect={(index) => console.log(index)}
      >
        <MenuItem>link 1</MenuItem>
        <MenuItem disabled>link 2</MenuItem>
        <MenuItem>link 3</MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>link 4</MenuItem>
          <MenuItem>link 5</MenuItem>
        </SubMenu>
      </Menu>
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
    </div>
  );
}

export default App;
