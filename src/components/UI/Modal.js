import { BackdropWrapper, ModalStyled } from "./Styles/ModalStyles";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <BackdropWrapper />;
};

const ModalOverlay = (props) => {
  return (
    <ModalStyled>
      <div className="content">{props.children}</div>
    </ModalStyled>
  );
};

const portalHTMLElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalHTMLElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalHTMLElement
      )}
    </>
  );
};

export default Modal;
