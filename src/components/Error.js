import { useRouteError } from "react-router";




const Error = () => {
    const {status,statusText} = useRouteError();
    //console.log(error);
  return (
    <div>
        <h1>Error</h1>
        <h2>{status} : {statusText}</h2>
    </div>
  );
}

export default Error;