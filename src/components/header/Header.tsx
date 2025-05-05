import { FC } from "react";
import "./header.css";
import { IHeaderProps } from "./interface";

const Header: FC<IHeaderProps> = (props) => {
  const { text } = props;
  return (
    <div className="header_container">
      <p className="hey">{text}</p>
    </div>
  );
};

export default Header;
