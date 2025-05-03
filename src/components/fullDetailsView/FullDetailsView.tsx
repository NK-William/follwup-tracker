import { FC } from "react";
import "./fullDetailsView.css";
import { FullDetailsViewProps } from "./interface";

const FullDetailsView: FC<FullDetailsViewProps> = (props) => {
  const { title, text, onClose } = props;

  return (
    <div className="fullDetailsView_container">
      <div className="fullDetailsView_frame">
        <p className="fullDetailsView_title">{title}</p>
        <p className="fullDetailsView_text">{text}</p>
      </div>
    </div>
  );
};

export default FullDetailsView;
