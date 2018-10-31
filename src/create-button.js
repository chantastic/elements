import React from "react";
import Button from "./button";

export default function CreateButton({ className, ...props }) {
  return (
    <Button className={[className, "create-button"].join(" ")} {...props} />
  );
}
