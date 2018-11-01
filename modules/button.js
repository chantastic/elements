import React from "react";

let variants = [
  "action",
  "create",
  "default",
  "destroy",
  "update"
];

export function buttonVariant(variant) {
  if (variants.indexOf(variant) === -1) {
    variant = "default";
    console.log(
      "nope. use one of these values for height: ",
      variants
    );
    return;
  }
  return `button--variant_${variant}`;
}

let heights = [2, 3, 4, 5, 6, 7, 8];

export function buttonHeight(height) {
  if (heights.indexOf(height) === -1) {
    height = 4;
    console.log(
      "nope. use one of these values for height: ",
      heights
    );
  }

  return `button--height_${height}`;
}

export function Button({
  as: As,
  className,
  variant,
  height,
  ...props
}) {
  return (
    <As
      className={[
        className,
        "button",
        buttonVariant(variant),
        buttonHeight(height)
      ].join(" ")}
      {...props}
    />
  );
}
Button.defaultProps = {
  as: "button",
  type: "button",
  variant: "default",
  height: 4
};

export default Button;
