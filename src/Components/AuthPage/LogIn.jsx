import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

import { useStateContext } from "../../Contexts/ContextProvider";
import HeroSection from "../Shared/HeroSection";
import logo from "../../assets/logo-static.svg";
import Loader from "../Shared/Loader";

const LogIn = () => {
  const { setLoginUser, showToastHandler } = useStateContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user")) navigate("/");
  }, [navigate]);

  return (
    <div className="w-full flex flex-col">
      <HeroSection
        title={"Login"}
        desc={
          ""
        }
        breadParams={[
          {
            title: "Instruo",
            url: "/",
          },
          {
            title: "Login",
            url: "",
          },
        ]}
      />

      <div className="flex flex-col items-center my-16">
        <div className="flex gap-4 lg:gap-8 justify-center items-center">
          <img src={logo} className="inline" width="10%" />
          <p className="text-4xl lg:text-8xl font-bold">Instruo 2k23</p>
        </div>
        <div className="lg:w-2/3 mx-4 shadow-xl bg-base-100 border-2 rounded-2xl border-base-200 mt-8">
          <div className="card-body">
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validate={(values) => {
                const errors = {};
                if (!values.email) errors.email = "Required";

                if (values.password.trim() === "")
                  errors.password = "Password cannot be empty";
                return errors;
              }}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                try {
                  const { data: res } = await axios.post(
                    "/api/v1/users/login",
                    values
                  );
                  // console.log(res)
                  localStorage.setItem(
                    "user",
                    JSON.stringify({
                      ...res.data.user,
                    })
                  );
                  localStorage.setItem("token", res.data.token);

                  setLoginUser({ ...res.data.user });

                  setSubmitting(false);

                  showToastHandler("Login successful", "success");
                  navigate("/");
                } catch (error) {
                  showToastHandler("Login failed", "error");
                  console.log(error);
                  resetForm();
                  setSubmitting(false);
                }
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="form-control">
                    <label className="label" htmlFor="email">
                      Email
                    </label>
                    <Field
                      id="email"
                      type="email"
                      name="email"
                      className="input input-bordered"
                    />
                    <ErrorMessage
                      name="email"
                      className="label text-sm text-red-500"
                      component={"div"}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">Password</label>
                    <Field
                      id="password"
                      type="password"
                      name="password"
                      className="input input-bordered"
                    />
                    <ErrorMessage
                      name="password"
                      className="label text-sm text-red-500"
                      component={"div"}
                    />
                  </div>

                  <div className="mt-6 mb-2">
                    <Link to="/signup" className="link">
                      First time user? Click here to register
                    </Link>
                  </div>

                  <div className="form-control mt-6 w-40 mx-auto">
                    {!isSubmitting ? (
                      <button type="submit" className="btn btn-primary">
                        Login
                      </button>
                    ) : (
                      <Loader />
                    )}
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
