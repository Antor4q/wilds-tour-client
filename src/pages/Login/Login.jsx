import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../routes/ContextProvider";


const Login = () => {
    const {signIn,googleLogin,githubLogin} = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result => {
            form.reset()
            console.log(result)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className="lg:h-[calc(100vh-340px)] h-[calc(100vh-549px)]  ">
            <div className="lg:max-w-[1240px] mx-auto flex justify-center">
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 h-[500px]">
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
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
               
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                <div className="flex justify-between p-5">
                <p>New Here? Please</p>
                <Link to="/register" className="text-[#378CE7]">Register</Link>
                </div>
                </div>
                <div className="divider">OR</div>
                    <div className="justify-around gap-2 flex items-center rounded-box ">
                       <button onClick={()=>googleLogin()} className="btn btn-primary">Google</button>
                       <button onClick={()=>githubLogin()} className="btn btn-secondary">Github</button>
                        </div>
             </form>
            </div>
            </div>
        </div>
    );
};

export default Login;