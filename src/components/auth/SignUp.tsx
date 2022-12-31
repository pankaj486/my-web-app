import "./auth.css";
import React from "react";
import { Link } from "react-router-dom";
import InputField from "../FormInput/FormInput";
import Button from "../ButtonComponent/ButtonField";
import { useReducer, Fragment, useCallback } from "react";
import ReducerHandler from "../../StateService/ReducerHandler";

const SignUpForm = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const MemoizedLink = React.memo(Link);
  const inputItems = ["firstName", "lastName", "email", "password"]
  const { onSignUpReducer } = ReducerHandler();
  const [state, dispatch] = useReducer(onSignUpReducer, initialState);

  const handleChange = useCallback(
    (e:any) => {
      dispatch({
        type: "UPDATE_VALUE",
        name: e.target.name,
        value: e.target.value,
      });
    },
    [dispatch]
  );

  const handleSubmit = (e: any) => {
    e.preventDefault();
    localStorage.setItem("_state", JSON.stringify(state));
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign Up</h3>

          {inputItems.map((item:string, index:number) => {
            let capitalizedName = item[0].toUpperCase() + item.slice(1);
            return (
              <Fragment key={index}>
                <InputField
                  label={capitalizedName} 
                  type={item}
                  className="form-control"
                  placeholder={capitalizedName}
                  name={item}
                  value={item === state[item] ? item : state[item]}
                  onChange={handleChange}
                />
              </Fragment>
            );
          })}
          <div className="d-grid">
            <Button type="submit" className="btn btn-primary">
              Sign Up
            </Button>
          </div>
          <p className="forgot-password text-right">
            Already registered
            <MemoizedLink to="/login">Login?</MemoizedLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
