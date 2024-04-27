import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const SocialLogin = () => {
    const { GoogleLogin, GithubLogin } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();


    const [LogError, setLogError] = useState('');
    const [LogSuccess, setLogSuccess] = useState('');

    const handleGoogleLogin = () => {
        GoogleLogin()
            .then(result => {
                console.log(result.user);
                toast.success('Google account logged in successfully!');
                setLogSuccess('User created successfully');
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
                toast.error('Failed to log in with Google account. Please try again.');
            })
    };

    const handleGithubLogin = () => {
        GithubLogin()
            .then(result => {
                console.log(result.user);
                toast.success('GitHub account logged in successfully!');
                setLogSuccess('User created successfully')
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
                toast.error('Failed to log in with GitHub account. Please try again.');
            })
    };

    return (
        <div className='mx-auto flex justify-center gap-5 mb-5'>
            <button onClick={handleGoogleLogin} className='btn btn-outline h-16'>
                <FcGoogle size={40} />
            </button>
            <button onClick={handleGithubLogin} className='btn btn-outline h-16'>
                <FaGithub size={40} />
            </button>
        </div>
    );
};

export default SocialLogin;