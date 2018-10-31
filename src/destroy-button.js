import React from "react";
import Button from "./button";

export default function DestroyButton({ className, ...props }) {
  return (
    <Button className={[className, "destroy-button"].join(" ")} {...props} />
  );
}
