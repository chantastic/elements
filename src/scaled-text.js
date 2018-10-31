import React from "react";
import Text from "./text";

export default function ScaledText({ className, scale = 1, ...props }) {
  return (
    <Text
      className={[className, "scaled-text", `scaled-text--scale_${scale}`].join(
        " "
      )}
      {...props}
    />
  );
}
