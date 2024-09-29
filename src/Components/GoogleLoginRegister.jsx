import { FcGoogle } from "react-icons/fc";
// import useAuth from "../hooks/useAuth";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";

const GoogleLoginRegister = () => {
    const auth =useContext(AuthContext);
  const {googleLogin} =auth;
    const handleGoogleLogin = () =>{
        googleLogin();
    };
    return (
<button className='btn w-full' onClick={handleGoogleLogin}>
    <div className='flex items-center gap-2'>
        <FcGoogle size={24}/>
        <p>Login With Google</p>
    </div>
</button>
    );
};

export default GoogleLoginRegister;