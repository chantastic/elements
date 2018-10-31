import React from "react";

export default function Text({ as: As = "span", ...props }) {
  return <As {...props} />;
}
