import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="custom_container">{children}</div>;
};

export default Container;
