import React, { useState } from "react";

import Button, { ButtonType, ButtonSize } from "./components/Button/button";
import Alert, { AlertType } from "./components/Alert/alert";

import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Icon from "./components/Icon/icon";

import Transition from "./components/Transition/transition";

library.add(fas);

function App() {
  const [toggle, setToggle] = useState(true);
  const [show, setShow] = useState(false);
  return (
    <div>
      <Icon icon="arrow-down" theme="warning" size="10x" />
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
      <Button
        size={ButtonSize.Large}
        onClick={() => {
          setShow(!show);
        }}
      >
        Toggle
      </Button>
      <Transition in={show} timeout={300} animation="zoom-in-left">
        <div>
          <p>123</p>
          <p>123</p>
          <p>123</p>
        </div>
      </Transition>
      <Transition in={show} timeout={300} animation="zoom-in-left" wrapper>
        <Button size={ButtonSize.Large} btnType={ButtonType.Primay}>
          testBtn
        </Button>
      </Transition>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
