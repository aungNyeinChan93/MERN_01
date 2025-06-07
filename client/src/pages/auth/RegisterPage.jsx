import React, { useRef } from "react";
import { useNavigate, redirect } from "react-router";

const RegisterPage = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  const registerForm = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `${import.meta.env.VITE_URL}/api/auth/register`,
      {
        method: "POST",
        body: JSON.stringify({
          name: nameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      console.log(`registeration failed!`);
    }
    const data = await response.json();
    if (data?.mess === "success") {
      navigate("/");
    }
  };

  return (
    <React.Fragment>
      <section>
        <h4 className="text-center text-2xl text-red-600">Register Page</h4>
        <div className="grid grid-cols-3 gap-3 mt-10">
          <div></div>
          <form
            className="border  p-6 rounded border-red-400"
            onSubmit={registerForm}
          >
            <input
              type="text"
              placeholder="Enter UserName"
              className="p-2 border border-amber-200 w-full rounded-2xl my-2"
              ref={nameRef}
            />
            <input
              type="email"
              placeholder="Enter Email"
              className="p-2 border border-amber-200 w-full rounded-2xl my-2"
              ref={emailRef}
            />
            <input
              type="password"
              placeholder="Enter Password"
              className="p-2 border border-amber-200 w-full rounded-2xl my-2"
              ref={passwordRef}
            />
            <input
              type="submit"
              value="Register"
              className="w-full my-2 bg-blue-500 hover:bg-blue-600 px-2 py-2 text-white rounded-2xl"
            />
          </form>
        </div>
      </section>
    </React.Fragment>
  );
};

export default RegisterPage;
