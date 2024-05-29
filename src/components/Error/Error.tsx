import { Link } from "react-router-dom";
import { ErrorProps } from "./Error.type";

const Error: React.FC<ErrorProps> = ({status, message, link}) => {
  return (
    <div className="errorMessageWrapper">
      <h1 className="errorMessageMainContent"> {status} </h1>
      <h2 className="errorMessageSubContent">
        {message}
      </h2>
      <p className="errorMessageLinkContent">
        <Link to="/">{link}</Link>
      </p>
    </div>
  );
};

export default Error;