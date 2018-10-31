import React from "react";
import Button from "./button";

export default function UpdateButton({ className, ...props }) {
  return (
    <Button className={[className, "update-button"].join(" ")} {...props} />
  );
}
