import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-200">
        <h1 className="text-4xl font-semibold">Sign in</h1>
        <p className="font-medium text-lg text-gray-500 mt-4">
          Please enter your details.
        </p>
        <div className="mt-8">
          <div>
            <label className="text-lg font-medium">Email</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="text-lg font-medium">Password</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Enter your password"
            />
          </div>
          <div className="mt-8 flex justify-between items-center gap-3">
            <div>
              <input type="checkbox" id="remember" />
              <label className="ml-2 font-lighht text-base" htmlFor="remember">
                Remember for 30 days
              </label>
            </div>
            <button className="font-light text-base text-violet-500">
              Forgot password
            </button>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-y-4">
          <button className="py-3 rounded-xl bg-violet-500 text-white text-lg font-bold active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out">
            Sign in
          </button>
        </div>
        <div className="mt-8 flex justify-center items-center">
          <p className="font-medium text-base">Don&apos;t have an account?</p>
          <Link
            to="/signup"
            className="text-violet-500 text-base font-medium ml-4"
          >
            Sign up
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
