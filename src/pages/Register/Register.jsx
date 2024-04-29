import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../routes/ContextProvider";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import Swal from "sweetalert2";
import { LuEye, LuEyeOff } from "react-icons/lu";


const Register = () => {

    const {signUp,googleLogin,githubLogin,profileUpdate,logOut} = useContext(AuthContext)
    const [error,setError] = useState("")
    const [showPassword,setShowPassword] = useState(false)
    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        setError("")
       
        if(!/^(?=.*[A-Z])(?=.*[a-z]).*$/.test(password)){
            return setError("Password must have an Lowercase and Uppercase Letter")
        }
        if(!/^.{6}/.test(password)){
          return  setError("Password must at least 6 character")
        }
        
        console.log(error)
        signUp(email, password)
        .then(result => {
            form.reset()
          profileUpdate(name, photo)
            .then((result) => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
           logOut()
           .then()
           .catch()
           Swal.fire({
            position: "top-end",
            icon: "success",
            title: "You have successfully Register",
            showConfirmButton: false,
            timer: 1500
        });
        console.log(result.user)

        })
        .catch(error => {
            console.log(error)
        })
    }


    return (
        <div className=" flex justify-center  lg:py-20 py-10 lg:p-0 p-5  lg:max-w-[1240px] mx-auto">
             <div className="card shrink-0 lg:w-1/3 w-full  hover:shadow-2xl border bg-base-100 ">
             <form onSubmit={handleRegister} className="card-body  pb-0">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Enter name" name="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Photo URL</span>
                </label>
                <input type="text" placeholder="Enter Photo URL" name="photo"className="input input-bordered" required />
                </div>
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
                {
                    error ? <div className="relative">
                        <input type={showPassword ? "text" : "password"} placeholder="password" name="password" className="input w-full input-bordered" required />
                        <span className="text-xl absolute right-3 top-4" onClick={()=>setShowPassword(!showPassword)}>{showPassword ? <LuEyeOff />:<LuEye />}</span>
                        <span className="text-red-500">{error}</span>
                    </div> :
                   <div className="relative">
                         <input type={showPassword ? "text" : "password"} placeholder="password" name="password" className="input w-full input-bordered" required />
                         <span className="text-xl absolute right-3 top-4" onClick={()=>setShowPassword(!showPassword)}>{showPassword ? <LuEyeOff />:<LuEye />}</span>
                   </div>
                }
               
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
                <div className="flex justify-between p-5">
                <p>Already have account? Please</p>
                <Link to="/login" className="text-[#378CE7]">Login</Link>
                </div>
                </div>
               </form>
             <div className="divider w-1/3 mx-auto mt-0">OR</div>
                    <div className="justify-center  gap-5 flex lg:pb-16 pb-10 items-center rounded-box ">
                       <button onClick={()=>googleLogin()} className="text-2xl "><FcGoogle /></button>
                       <button onClick={()=>githubLogin()} className="text-2xl"><SiGithub /></button>
                        </div>
            </div>
        </div>
    );
};

export default Register;