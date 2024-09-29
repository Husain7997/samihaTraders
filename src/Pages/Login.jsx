// import { FcGoogle } from "react-icons/fc";
import GoogleLoginRegister from "../Components/GoogleLoginRegister";
// import useAuth from "../hooks/useAuth";
// import { AuthContext } from "../AuthProvider/AuthProvider";
// import { useContext } from "react";




const Login = () => {
  // const {googleLogin}=useAuth;
  // const auth =useContext(AuthContext);
  // const {googleLogin} =auth;
  // const handleGoogleLogin = () =>{
  //     googleLogin();
  // }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
          <GoogleLoginRegister></GoogleLoginRegister>

          {/* <button className='btn w-full' onClick={handleGoogleLogin}>
    <div className='flex items-center gap-2'>
        <FcGoogle size={24}/>
        <p>Login With Google</p>
    </div>
</button> */}
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  );
};

export default Login;