import "./auth.css";
import { Link } from "react-router-dom";
import { useReducer, Fragment } from "react";
import InputField from "../FormInput/FormInput";
import ReducerHandler from "../../StateService/ReducerHandler";

const SignUpForm = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const inputItems = ["firstName", "lastName", "email", "password"]
  const { onSignUpReducer } = ReducerHandler();
  const [state, dispatch] = useReducer(onSignUpReducer, initialState);

  const handleChange = (e: any) => {
    dispatch({
      type: "UPDATE_VALUE",
      name: e.target.name,
      value: e.target.value,
    });
  };

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
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered
            <Link to="/login">Login?</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
