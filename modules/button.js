import React from "react";

function excludesWithLog(e, s) {
  let excluded = e.indexOf(s) === -1;
  if (excluded) {
    console.warn(
      "nope. use one of these values for height: ",
      variants
    );
  }
  return excluded;
}

let variants = [
  "action",
  "create",
  "default",
  "destroy",
  "update"
];

export function buttonVariant(variant) {
  variant = excludesWithLog(variants, variant)
    ? "default"
    : variant;

  return `button--variant_${variant}`;
}

let heights = [2, 3, 4, 5, 6, 7, 8];

export function buttonHeight(height) {
  height = excludesWithLog(heights, height)
    ? 4
    : height;

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