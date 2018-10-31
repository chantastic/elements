import React from "react";

function Button({ as: As = "button", className, ...props }) {
  return <As className={[className, "button"].join(" ")} {...props} />;
}
Button.defaultProps = {
  type: "button"
};

export default Button;
