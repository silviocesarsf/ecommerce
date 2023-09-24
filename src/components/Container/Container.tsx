import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="w-full min-h-screen">
      <div className="w-full h-full p-paddingX">{children}</div>
    </div>
  );
};

export default Container;
