import React, { FC } from "react";

export type TitleProps = {
  title: string;
};

const Title: FC<TitleProps> = ({ title }: TitleProps) => {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      <div className="underline"></div>
    </div>
  );
};

export default Title;
