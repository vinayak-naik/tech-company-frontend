import React from "react";

function TextError({ children }: React.PropsWithChildren<{}>) {
  return <div className="error">{children}</div>;
}

export default TextError;
