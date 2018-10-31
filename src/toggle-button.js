import React from "react";
import Button from "./button";

export default function ToggleButton({ className, ...props }) {
  return (
    <Button className={[className, "toggle-button"].join(" ")} {...props} />
  );
}
