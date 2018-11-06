import React from "react";

function hasWithLog(e, s) {
  let excluded = e.has(s);

  if (!excluded) {
    console.warn(
      "nope. use one of these values for height: ",
      e
    );
  }

  return excluded;
}

let variants = new Set([
  "action",
  "create",
  "default",
  "destroy",
  "update"
]);

export function buttonVariant(variant) {
  variant = hasWithLog(variants, variant)
    ? variant
    : "default";

  return `button--variant_${variant}`;
}

let heights = new Set([2, 3, 4, 5, 6, 7, 8]);

export function buttonHeight(height) {
  height = hasWithLog(heights, height) ? height : 4;

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
