import { Link, useLocation, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const SignUp = () => {

    const {createUser} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const [regError,setRegError] = useState('');
    const [regSuccess,setRegSuccess] = useState('');
    const [showPass,setShowPass] = useState(false);

    const handleReg = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        const photo = form.get('photo');

        console.log(password);

        if(password.length < 6 ){
            setRegError("Password should be at least 6 characters or longer");
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setRegError("Password should have at least one Uppercase character");
            return;
        }
        else if(!/[a-z]/.test(password)){
            setRegError("Password should have at least one Lowercase character");
            return;
        }

        setRegError('')
        setRegSuccess('')

        createUser(email,password)
        .then(result =>{
            console.log(result.user)
            setRegSuccess('Registration Successful')
            updateProfile(result.user, {
                displayName: name,
                photoURL: photo
            })
            .then(()=> {
                navigate(location?.state ? location.state : '/');
                toast.success("User created successfully");
            })
            .catch()
        })
        .catch(error=>{
            console.log(error);
            setRegError(error.code.split('auth/')[1]);
        })

    }

    return (
        <div className="hero">
            <Helmet>
                <title>SAM Travels | Register</title>
            </Helmet>
            <div className="hero-content">
                <div className="text-center lg:text-left px-20">
                    <h1 className="text-5xl font-bold my-10">Register now!</h1>
                    <p> For Getting Your personlised Tourists Spots</p>
                    </div>
                <div className="card shrink-0 shadow-2xl bg-base-100 w-[33vw] min-w-96">
                    <form onSubmit={handleReg} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"></span>
                            </label>
                            <input type="text" required name='name' placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"></span>
                            </label>
                            <input type="email" required name='email' placeholder="Your email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"></span>
                            </label>
                            <input type="link" name='photo' placeholder="Photo URL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"></span>
                            </label>
                            <input
                                type={showPass ? "text" : "password"}
                                required name='password'
                                placeholder="password"
                                className="input input-bordered" />
                            <span className="relative bottom-8 left-72 lg:left-96" onClick={() => setShowPass(!showPass)}>{
                                showPass ? <VscEyeClosed></VscEyeClosed> : <VscEye />} </span>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline">Register</button>
                        </div>
                    </form>
                    {
                        regError && <p className="text-red-700 ml-7 -mt-4 mb-4">*{regError}</p>
                    }
                    {
                        regSuccess && <p className="text-green-700 text-center -mt-4 mb-4">{regSuccess}</p>
                    }
                    <p className='mx-auto pb-5'>Already have an account <Link to={'/login'} className='font-bold'>Log In</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;