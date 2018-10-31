import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import "./scaled-text.css";
import ScaledText from "./scaled-text";

import "./button.css";
import Button from "./button";
import "./action-button.css";
import ActionButton from "./action-button";
import "./create-button.css";
import CreateButton from "./create-button";
import "./destroy-button.css";
import DestroyButton from "./destroy-button";
import "./toggle-button.css";
import ToggleButton from "./toggle-button";
import "./update-button.css";
import UpdateButton from "./update-button";

// import "./elements-button.css";
// import ElementsButton from "./elements-button";

function sizedButton(units) {
  return `sized-button sized-button--size_${units}`;
}

// broken. start here
// better as buttonSize(), buttionAction() ?
function actionedButton(action) {
  return `action-button action-button--action_${action}`;
}

function SizedActionButton({ className, size, ...props }) {
  return (
    <Button
      className={[className, actionedButton(), sizedButton(6)].join(" ")}
      {...props}
    />
  );
}

function App() {
  return (
    <div
      className="App"
      style={{ backgroundColor: "#eee", margin: 0, padding: "1rem" }}
    >
      <section style={{ backgroundColor: "white", padding: "1rem" }}>
        <ScaledText as="h2" scale={7}>
          Buttons
        </ScaledText>

        <div
          style={{
            "--theme-color-action": "#1c7ed6",
            "--theme-color-update": "#f59f00",
            "--theme-color-destroy": "#e03131",
            "--theme-color-create": "#37b24d",
            "--theme-color-toggle": "#ced4da"
          }}
        >
          <SizedActionButton>SizedActionButton</SizedActionButton>
          <ActionButton>ActionButton</ActionButton>
          <CreateButton>CreateButton</CreateButton>
          <UpdateButton>UpdateButton</UpdateButton>
          <DestroyButton>DestroyButton</DestroyButton>
          <ToggleButton>ToggleButton</ToggleButton>
          <Button>Button</Button>
        </div>
      </section>

      <br />

      <section style={{ backgroundColor: "white", padding: "1rem" }}>
        <ScaledText as="h2" scale={7}>
          ScaledText
        </ScaledText>

        <ScaledText scale={0}>ScaledText scale=0</ScaledText>
        <ScaledText scale={1}>ScaledText scale=1</ScaledText>
        <ScaledText scale={2}>ScaledText scale=2</ScaledText>
        <ScaledText scale={3}>ScaledText scale=3</ScaledText>
        <ScaledText scale={4}>ScaledText scale=4</ScaledText>
        <ScaledText scale={5}>ScaledText scale=5</ScaledText>
        <ScaledText scale={6}>ScaledText scale=6</ScaledText>
      </section>

      <br />

      <section style={{ backgroundColor: "white", padding: "1rem" }}>
        <ScaledText as="h2" scale={7}>
          ScaledText(as)
        </ScaledText>

        <ScaledText as="h1" scale={7}>
          ScaledText as=h1 scale=7
        </ScaledText>
        <ScaledText as="h1" scale={6}>
          ScaledText as=h1 scale=6
        </ScaledText>
        <ScaledText as="h1" scale={5}>
          ScaledText as=h1 scale=5
        </ScaledText>
        <ScaledText as="h1" scale={4}>
          ScaledText as=h1 scale=4
        </ScaledText>
        <ScaledText as="h1" scale={3}>
          ScaledText as=h1 scale=3
        </ScaledText>
        <ScaledText as="h1" scale={2}>
          ScaledText as=h1 scale=2
        </ScaledText>
        <ScaledText as="h1" scale={1}>
          ScaledText as=h1 scale=1
        </ScaledText>
        <ScaledText as="h1" scale={0}>
          ScaledText as=h1 scale=0
        </ScaledText>
      </section>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
