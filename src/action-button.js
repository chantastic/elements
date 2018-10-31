import React from "react";
import Button from "./button";

export default function ActionButton({ className, ...props }) {
  return (
    <Button className={[className, "action-button"].join(" ")} {...props} />
  );
}
