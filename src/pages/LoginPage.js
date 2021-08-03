import React, { useState } from "react";
import Input from "../components/Input";

const LoginPage = (props) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [spaceControl, setSpaceControl] = useState(false);

  const onClickLogin = async () => {
    if (username === undefined || password === undefined) {
      setSpaceControl(true);
    } else {
      if (username.length > 0 && password.length > 0) {
        const { push } = props.history;
        try {
          await navigator.mediaDevices.getUserMedia({ video: true });
        } catch (error) {}
        push("/home");
      }
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <h1 className="text-center">Login</h1>
        <hr></hr>
        {spaceControl && (
          <h3 className="text-center m-2" style={{ color: "red" }}>
            It is not possible to enter with a space, please enter anything
          </h3>
        )}
        <Input
          label="Username"
          onChange={(event) => {
            setUsername(event.target.value);
            setSpaceControl(false);
          }}
        ></Input>
        <Input
          label="Password"
          type="password"
          onChange={(event) => {
            setPassword(event.target.value);
            setSpaceControl(false);
          }}
        ></Input>
        <div className="text-center mt-3">
          <button className="btn btn-primary" onClick={onClickLogin}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
