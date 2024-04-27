import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../routes/ContextProvider";


const Register = () => {

    const {signUp,googleLogin,githubLogin,profileUpdate} = useContext(AuthContext)
    const [error,setError] = useState("")

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)
        if(!/^(?=.*[A-Z])/.test(password)){
            setError("Password must have an Uppercase Letter")
        }
        if(!/(?=.*[a-z])/.test(password)){
            setError("Password must have an Lowercase Letter")
        }
        if(!/^.{6}$/.test(password)){
            setError("Password must at least 6 character")
        }
        console.log(error)
        signUp(email, password)
        .then(result => {
            form.reset()
            console.log(result.user)
            profileUpdate(name, photo)
            .then()
            

        })
        .catch(error => {
            console.log(error)
        })
    }


    return (
        <div className="lg:h-[calc(100vh-340px)] flex justify-center h-[calc(100vh-549px)] lg:max-w-[1240px] mx-auto">
             <div className="card shrink-0 w-1/3 shadow-2xl bg-base-100 h-[700px]">
             <form onSubmit={handleRegister} className="card-body ">
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
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                {
                    error && <span className="text-red ">{error}</span>
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
             <div className="divider">OR</div>
                    <div className="justify-around gap-2 flex items-center rounded-box ">
                       <button onClick={()=>googleLogin()} className="btn btn-primary">Google</button>
                       <button onClick={()=>githubLogin()} className="btn btn-secondary">Github</button>
                        </div>
            </div>
        </div>
    );
};

export default Register;