import { FC } from "react";
import "./fullDetailsView.css";
import { FullDetailsViewProps } from "./interface";
import { IoIosCloseCircle } from "react-icons/io";

const FullDetailsView: FC<FullDetailsViewProps> = (props) => {
  const { title, text, onClose } = props;

  return (
    <div className="fullDetailsView_container">
      <div className="fullDetailsView_frame">
        <IoIosCloseCircle
          size={25}
          className="fullDetailsView_close_icon"
          onClick={onClose}
        />
        <p className="fullDetailsView_title">{title}</p>
        <p className="fullDetailsView_text">{text}</p>
      </div>
    </div>
  );
};

export default FullDetailsView;
