import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import { useContext, useState } from 'react';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { AuthContext } from '../../provider/AuthProvider';

const LogIn = () => {

    const { signIn } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const [formValues, setFormValues] = useState({
        email: "",
        password: ""
    });
    const [LogError, setLogError] = useState('');
    const [LogSuccess, setLogSuccess] = useState('');
    const [showPass, setShowPass] = useState(false);


    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const email = form.get('email');
        const password = form.get('password');

        console.log(email, password);

        setLogError('');
        setLogSuccess('');


        signIn(email, password)
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : '/');
                toast.success("Login successful!");
            })
            .catch(error => {
                console.log(error);
                setLogError(error.code.split('auth/')[1]);
                toast.error("Check your email and password!");
            })

        setFormValues({
            email: "",
            password: ""
        });
    }

    return (
        <div className="hero">
            {/* <Helmet>
                <title>SAM's RESIDENCE | Login</title>
            </Helmet> */}
            <div className="hero-content">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold my-10">Login Account</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                value={formValues.email}
                                onChange={(e) =>
                                    setFormValues({ ...formValues, email: e.target.value })
                                }
                                required name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPass ? "text" : "password"}
                                value={formValues.password}
                                onChange={(e) =>
                                    setFormValues({ ...formValues, password: e.target.value })
                                }
                                required name='password' placeholder="password" className="input input-bordered" />
                            <label className="label"><span className="relative bottom-10 left-72" onClick={() => setShowPass(!showPass)}>{
                                showPass ? <VscEyeClosed></VscEyeClosed> : <VscEye />} </span></label>
                        </div>
                        <div className="form-control mt-4">
                            <button className="btn btn-outline">Login</button>
                        </div>

                    </form>
                    {
                        LogError && <p className="text-red-700 ml-7 -mt-4 mb-4">*{LogError}</p>
                    }
                    {
                        LogSuccess && <p className="text-green-700 text-center -mt-4 mb-4">{LogSuccess}</p>
                    }
                    <p className='mb-2 text-xl flex justify-center items-center gap-2'> <span> <hr className='w-20' /> </span> <span> or </span> <hr className='w-20' /> </p>
                    <SocialLogin></SocialLogin>
                    <p className='mx-auto pb-5'>Don't have an account <Link to={'/signUp'} className='font-bold'>Register</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default LogIn;