import React, { useRef } from "react";

const RegisterPage = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const registerForm = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
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
