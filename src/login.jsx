import React from "react";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const history = useHistory();
return (
  <>
    <h2>login</h2>
    <button onClick={()=> history.push('/home')}>Go to home</button>
  </>
);
}

export default Login;
