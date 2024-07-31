import { useState } from "react";

export default function LoginBoard() {
  const [isLog, setIsLog] = useState(true);
  return (
    <div className="login-signin-bord">
      <div className={`sater ${isLog ? "active" : ""}`}>
        <LoginForm setIsLog={setIsLog} isLog={isLog} />
        <SigninForm setIsLog={setIsLog} isLog={isLog} />
      </div>
    </div>
  );
}

function InputField({ id, label, type }) {
  return (
    <div className="c">
      <label htmlFor={id} className={`${id}-label`}>
        {label}
      </label>
      <input id={id} className={`${id}-input`} type={type} />
    </div>
  );
}

// PasswordField Component
function PasswordField({ id, label }) {
  const [isPasVisable, setIsPasVisabel] = useState(true);

  return (
    <div className="c">
      <label htmlFor={id} className={`${id}-label`}>
        {label}
      </label>
      <input
        style={{
          paddingRight: "5rem",
        }}
        id={id}
        className={`${id}-input`}
        type={isPasVisable ? "password" : "Text"}
      />
      <button
        onClick={() => {
          setIsPasVisabel(!isPasVisable);
        }}
        type="button"
        className="show-password-btn material-symbols-outlined"
      >
        {isPasVisable ? "visibility" : "visibility_off"}
      </button>
    </div>
  );
}

// LoginForm Component
function LoginForm({ isLog, setIsLog }) {
  return (
    <form className="login">
      <InputField id="user-name" label="User name" type="text" />
      <InputField id="email" label="Email" type="email" />
      <PasswordField id="password" label="Password" />
      <button type="submit" className="sign-btn">
        Sign Up
      </button>
      <div className="sign-link">
        <h5 className="already-account">Already have an account?</h5>
        <h5
          onClick={() => {
            setIsLog(true);
          }}
          style={{ cursor: "pointer", color: "#1a82c7", paddingLeft: "1rem" }}
          className="sign-in"
        >
          Sign in
        </h5>
      </div>
    </form>
  );
}

// SigninForm Component
function SigninForm({ isLog, setIsLog }) {
  return (
    <form className="signin">
      <InputField id="signin-email" label="Email" type="email" />
      <PasswordField id="signin-password" label="Password" />
      <button type="submit" className="sign-btn">
        Sign In
      </button>
      <div className="sign-link">
        <h5 className="no-account">Don't have an account?</h5>
        <h5
          onClick={() => {
            setIsLog(false);
          }}
          style={{ cursor: "pointer", color: "#1a82c7", paddingLeft: "1rem" }}
          className="sign-up"
        >
          Sign up
        </h5>
      </div>
    </form>
  );
}

// LoginBoard Component
