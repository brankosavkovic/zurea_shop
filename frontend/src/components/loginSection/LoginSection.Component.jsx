import { useState } from "react";

const LoginSectionComponent = () => {
  const [signInObj, setSignInObj] = useState([
    {
      email: "",
      password: "",
    },
  ]);

  const [validationMsg, setValidationMsg] = useState("");

  const handleSignInObj = (e) => {
    let newStateObj = signInObj;
    newStateObj[e.target.name] = e.target.value;
    setSignInObj(newStateObj);
    console.log(signInObj);
  };

  const onLoginSubmit = () => {
    console.log(signInObj);
    if (!signInObj.password || !signInObj.email) {
      return setValidationMsg(
        `Required field: ${!signInObj.email ? "email" : "password"}`
      );
    } else {
      return setValidationMsg("");
    }
  };
  return (
    <>
      <h1 className="page-title">Log in to your account</h1>
      <div className="form-wrapper">
        <div className="login-form">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              name="email"
              onChange={(e) => handleSignInObj(e)}
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              onChange={(e) => handleSignInObj(e)}
            />
          </div>

          {validationMsg ? <p>{validationMsg}</p> : null}

          <button onClick={onLoginSubmit} className="btn btn-primary">
            Sign in
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginSectionComponent;
