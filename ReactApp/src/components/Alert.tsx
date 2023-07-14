import { ReactNode } from "react";

interface AlertProp {
  children: ReactNode;
  onClose: ()=>void
}

const Alert = ({ children ,onClose}: AlertProp) => {
  return (
    <div
      className="alert alert-danger alert-dismissible fade show"
      role="alert"
    >
      {children}
      <button onClick={onClose}
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
