import React from "react";

function TextError({ children }: React.PropsWithChildren<{}>) {
  return <div className="text-red-600">{children}</div>;
}

export default TextError;
