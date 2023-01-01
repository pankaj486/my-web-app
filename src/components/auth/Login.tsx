import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import InputField from "../FormInput/FormInput";
import Button from "../ButtonComponent/ButtonField";
import ReducerHandler from "../../StateService/ReducerHandler";
import React,{ useReducer, Fragment, useCallback } from "react";
import ToastifyMessage from "../ToastifyAlerts/ToastifyMessage";

const StyledDiv = styled.div`
  display: grid;
`;

const LoginForm = () => {
  const { onLoginReducer } = ReducerHandler();
  const {showToast} = ToastifyMessage();

  const initialState = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();
  const MemoizedStyledDiv = React.memo(StyledDiv);
  const [state, dispatch] = useReducer(onLoginReducer, initialState);
  const authUser = JSON.parse(localStorage.getItem("_state") as any)

  const handleChange = useCallback((e:any) => {
    dispatch({
        type: "AUTHENTICATE",
        name: e.target.name,
        value: e.target.value,
      });
  },[dispatch]);;

  const handleSubmit = useCallback((event:any) => {
    event.preventDefault();
    if(state.email === "" || state.password === "") {
      const message = "field not be empty"
      showToast(message, "error")
    }
    if (
      state.email === authUser.email &&
      state.password === authUser.password
    ) {
      const message = "Logged In"
      showToast(message, "success")
      return navigate("/dashboard");
    } else {
      const message = "Please enter a valid email and password"
      showToast(message, "error")
    }
  },[authUser, navigate, showToast, state]);

  

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Log In</h3>
          {["email", "password"].map((item:string, index:number) => {
            let capitalizedName = item[0].toUpperCase() + item.slice(1);
            return (
              <Fragment key={index}>
                <InputField 
                  label={capitalizedName}
                  type={item}
                  name={item}
                  value={item === 'email' ? state.email : state.password}
                  onChange={handleChange}
                  className="form-control"
                  placeholder={`Enter: ${item}`}
                />
              </Fragment>
            );
          })}
          <MemoizedStyledDiv>
            <Button type="submit" className="btn btn-primary">
              Submit
            </Button>
          </MemoizedStyledDiv>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
