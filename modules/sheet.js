import React from "react";

function sheetDepth(depth) {
  return `sheet--depth_${depth}`;
}

export function Sheet({
  as: As,
  className,
  depth,
  ...props
}) {
  return (
    <As
      className={["sheet", sheetDepth(depth)]
        .join(" ")
        .trim()}
      {...props}
    />
  );
}
Sheet.defaultProps = {
  as: "section",
  depth: 0
};

export default Sheet;
