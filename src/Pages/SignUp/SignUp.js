import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useToken from '../../useToken/useToken';



const SignUp = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { createUser, updateUser, signInGoogle } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const [createdBuyerEmail, setCreatedBuyerEmail] = useState('');
    const [token] = useToken(createdBuyerEmail)
    const navigate = useNavigate();


    if (token) {
        navigate('/')
    }
    const handleSignup = data => {
        console.log(data)
        setSignUpError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Signup successfully ');
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveBuyers(data.name, data.email, data.select);
                        reset()
                    })
                    .catch(err => console.error(err))
            })
            .catch(err => {
                console.error(err)
                setSignUpError(err.message)
            })

    }

    const saveBuyers = (name, email, select) => {
        const buyers = { name, email, select };
        fetch('https://final-project-server-two.vercel.app/buyers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(buyers)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCreatedBuyerEmail(email)
            })
    }


    const handleGoogleSignIn = () => {
        signInGoogle()
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate('/')
            })
            .catch(err => console.log(err))
    }


    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='w-96 my-7 '>
                <h3 className='text-3xl font-bold text-center'>SignUp</h3>

                <form onSubmit={handleSubmit(handleSignup)} className='mt-5 '>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input {...register("name",
                            {
                                required: 'name is required',
                            })}
                            type="text"
                            className="input input-bordered w-full " />
                    </div>
                    <div>
                        <label className="label"><span className="label-text">select</span></label>
                        <select {...register('select',
                            {
                                required: 'select is required',
                            })}
                            className="select select-bordered w-full">
                            <option>buyer</option>
                            <option>seller</option>
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Email</span> </label>
                        <input {...register("email",
                            {
                                required: 'Email address is required',
                                minLength: { value: 6, message: 'your email must be @.com' }
                            })}
                            type="email"
                            className="input input-bordered w-full " />
                        {errors.email && <p className='text-red-400'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input {...register("password",
                            {
                                required: 'password is required',
                                minLength: { value: 6, message: 'Your Password must be provide 6 characters' },
                                pattern: { value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/, message: 'you must be strong' }
                            })}
                            type="password"
                            className="input input-bordered w-full " />
                        {errors.password && <p className='text-red-400'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-primary w-full mt-4 text-white' type="submit" />
                </form>
                <div>
                    {signUpError && <p className='text-xl text-red-600'>{signUpError}</p>}
                </div>
                <p className='text-center mt-4'>Already Have an Account? Please <Link className='text-primary' to='/login'>Login</Link></p>
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="divider">OR</div>
                    <button onClick={handleGoogleSignIn} className='btn btn-outline'>CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;