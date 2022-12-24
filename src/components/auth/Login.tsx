import { useReducer } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const initialState = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();

  const formReducer = (state: any, action: any) => {
    switch (action.type) {
      case "AUTHENTICATE":
        return { ...state, [action.name]: action.value };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(formReducer, initialState);
  const authUser = JSON.parse(localStorage.getItem("_state") as any);

  const handleChange = (e: any) => {
    dispatch({
      type: "AUTHENTICATE",
      name: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (
      state.email === authUser.email &&
      state.password === authUser.password
    ) {
      return navigate("/dashboard");
    } else {
      throw new Error("Please enter a valid email and password");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Log In</h3>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              value={state.email}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={state.password}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
