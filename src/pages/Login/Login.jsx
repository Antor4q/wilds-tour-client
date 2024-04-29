import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../routes/ContextProvider";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import Swal from "sweetalert2";
import { LuEye, LuEyeOff } from "react-icons/lu";


const Login = () => {
    const {signIn,googleLogin,githubLogin} = useContext(AuthContext)
    const [showPassword,setShowPassword] = useState(false)
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result => {
            form.reset()
            console.log(result.user)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "You have successfully Login",
                showConfirmButton: false,
                timer: 1500
            });
        })
        .catch(error => {
            console.log(error)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Invalid Email and Password!",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
        })
    }

    return (
        <div className="lg:h-[calc(100vh-340px)] md:h-[calc(100vh-441px)] py-10 lg:py-20  lg:p-0 p-5">
            <div className="lg:max-w-[1240px] mx-auto flex justify-center">
            <div className="card shrink-0 w-full max-w-sm border hover:shadow-2xl bg-base-100 ">
             <form onSubmit={handleLogin} className="card-body ">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <div className="relative">
                <input type={showPassword ? "text" : "password"} placeholder="password" name="password" className="input w-full input-bordered" required />
                <span className="text-xl absolute right-3 top-4" onClick={()=>setShowPassword(!showPassword)}>{showPassword ? <LuEyeOff />:<LuEye />}</span>
                </div>
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                <div className="flex justify-between p-5">
                <p>New Here? Please</p>
                <Link to="/register" className="text-[#378CE7]">Register</Link>
                </div>
                </div>
                <div className="divider">OR</div>
                    <div className="justify-center gap-5 flex items-center rounded-box ">
                       <button onClick={()=>googleLogin()} className="text-2xl"><FcGoogle /></button>
                       <button onClick={()=>githubLogin()} className="text-2xl"><SiGithub /></button>
                        </div>
             </form>
            </div>
            </div>
        </div>
    );
};

export default Login;