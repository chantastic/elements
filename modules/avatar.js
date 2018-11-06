import React from "react";

function excludesWithLog(e, s) {
  let excluded = e.indexOf(s) === -1;
  if (excluded) {
    console.warn(
      "nope. use one of these values for height: ",
      e
    );
  }
  return excluded;
}

let sizes = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export function avatarSize(size) {
  size = excludesWithLog(sizes, size) ? 6 : size;

  return `avatar--size_${size}`;
}

export function Avatar({
  className,
  size,
  border,
  ...props
}) {
  return (
    <img
      className={[
        className,
        "avatar",
        border && "avatar--border_true",
        avatarSize(size)
      ].join(" ")}
      {...props}
    />
  );
}
Avatar.defaultProps = {};

export default Avatar;
