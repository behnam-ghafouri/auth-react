import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { history } from "../_helpers";
import { authActions } from "../_store";

export { Login };

function Login() {
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.auth.user);
  const authError = useSelector((state) => state.auth.error);
  const [isSignin, setIsSignin] = useState(null);

  useEffect(() => {
    // redirect to home if already logged in
    if (authUser) history.navigate("/");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // form validation rules
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors, isSubmitting } = formState;

  function onSubmit({ username, role, email, password }) {
    console.log({ username, role, email, password })

    return isSignin
      ? dispatch(
          authActions.signin({ username, role: [role], email, password })
        )
      : dispatch(
          authActions.signup({ username, role: [role], email, password })
        );
  }

  const roleOptions = ["admin", "moderator", "user"]; // List of role options
  if (isSignin == null) {
    return (
      <div className="col-md-6 offset-md-3 mt-5">
        <div className="card">
          <div className="card-body">
            <button className="border border-primary rounded w-100" onClick={() => setIsSignin(true)}>
              <div className=" d-flex justify-content-between">
                <div>
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div>Log in with Email</div>
                <div></div>
              </div>
            </button>
            <button className="border border-primary rounded w-100 mt-2" onClick={() => setIsSignin(false)}>
              <div className=" d-flex justify-content-center">

                <div>Not a member?<span className="text-primary ml-1">join Now</span></div>

              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="col-md-6 offset-md-3 mt-5">
      <div className="card">
        <h4 className="card-header d-flex">
          <span className="mr-auto">{isSignin ? "Login" : "Sign up"}</span>
        <button className="border border-primary rounded pb-2" onClick={() => setIsSignin(!isSignin)}>
            <span className="small" >
                {!isSignin ? "Login" : "Sign up"}
            </span>
        </button>

        </h4>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>Username</label>
              <input
                name="username"
                type="text"
                {...register("username")}
                className={`form-control ${
                  errors.username ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">{errors.username?.message}</div>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                name="email"
                type="email"
                {...register("email")}
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
              />
              <div className="invalid-feedback">{errors.email?.message}</div>
            </div>
            {!isSignin && (
              <div className="form-group">
                <label>Role</label>
                <select
                  name="role"
                  {...register("role")}
                  className={`form-control ${errors.role ? "is-invalid" : ""}`}
                >
                  {roleOptions.map((roleOption) => (
                    <option key={roleOption} value={roleOption}>
                      {roleOption}
                    </option>
                  ))}
                </select>
              </div>
            )}
            <div className="form-group">
              <label>Password</label>
              <input
                name="password"
                type="password"
                {...register("password")}
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">{errors.password?.message}</div>
            </div>
            <button disabled={isSubmitting} className="btn btn-primary">
              {isSubmitting && (
                <span className="spinner-border spinner-border-sm mr-1"></span>
              )}
              {isSignin ? "Login" : "Sign up"}
            </button>
            {authError && (
              <div className="alert alert-danger mt-3 mb-0">
                {authError.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
