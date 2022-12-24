import { useReducer } from "react";
import { Link } from "react-router-dom";
import "./auth.css"

const SignUpForm = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  function formReducer(state: any, action: any) {
    switch (action.type) {
      case "UPDATE_VALUE":
        return { ...state, [action.name]: action.value };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e: any) => {
    dispatch({
      type: "UPDATE_VALUE",
      name: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // perform form validation and submission here
    // dispatch({ type: 'SUBMIT_FORM' });
    localStorage.setItem("_state", JSON.stringify(state));
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign Up</h3>

          <div className="mb-3">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              name="firstName"
              value={state.firstName}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              name="lastName"
              value={state.lastName}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              name="email"
              value={state.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              name="password"
              value={state.password}
              onChange={handleChange}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered
            <Link to="/login">Login?</Link>
            {/* <a href="/sign-in">sign in?</a> */}
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
