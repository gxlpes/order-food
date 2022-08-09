import { BackdropWrapper, ModalStyled } from "./Styles/ModalStyles";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <BackdropWrapper onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <ModalStyled>
      <div className="content">{props.children}</div>
    </ModalStyled>
  );
};

const Modal = (props) => {
  const portalHTMLElement = document.getElementById("overlays");

  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalHTMLElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalHTMLElement
      )}
    </>
  );
};

export default Modal;
