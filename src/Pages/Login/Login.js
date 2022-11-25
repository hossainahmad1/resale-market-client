import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useToken from '../../useToken/useToken';




const Login = () => {
    const [loginError, setLoginError] = useState('');
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const { loginUser } = useContext(AuthContext);
    const [token] = useToken(loginUserEmail);
    const navigate = useNavigate();
    const location = useLocation();


    const from = location?.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }


    const handleLogin = data => {
        console.log(data);
        setLoginError('')
        loginUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setLoginUserEmail(data.email)
                navigate(from, { replace: true })
                reset()
            })
            .catch(error => {
                console.log(error);
                setLoginError(error.message);
            })
    }




    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='w-96 py-7'>
                <h3 className='text-3xl font-bold text-center'>Login</h3>

                <form onSubmit={handleSubmit(handleLogin)} className='my-3' >
                    <div className="form-control w-full ">
                        <label className="label"> <span className="label-text">Email</span> </label>
                        <input type="text"
                            {...register("email",
                                { required: "Email Address is required" })}
                            className="input input-bordered w-full" />
                        {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full mt-3">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password",
                                {
                                    required: "Password is required",
                                    minLength: { value: 6, message: 'password must be 6 characters' }
                                })}
                            className="input input-bordered w-full " />
                        <label className="label"><span className="label-text">Forget Password?</span></label>
                        {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-primary w-full input-bordered text-white mt-4' value={'Login'} type="submit" />
                </form>
                <div>
                    {loginError && <p className='text-xl text-red-500'>{loginError}</p>}
                </div>
                <p className='text-center'>New to bikroyBaba? <Link className='text-secondary' to='/signup'>Create new account</Link></p>
            </div>
        </div>
    );
};

export default Login;