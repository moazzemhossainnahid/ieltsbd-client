
import { Link, useNavigate } from "react-router-dom";

import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { sendEmailVerification } from "firebase/auth";
import Loading from "../../../Others/Loading/Loading";
import auth from "../../../../../firebase.init";

const Signup = () => {
  const [createUserWithEmailAndPassword, cuser, cloading, cerror] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  let signupError;


  if (cloading) {
    return <Loading />
  };


  if (cerror) {
    signupError = <p className="text-red-700">{cerror?.message}</p>
  };



  const handleSignupform = async (data) => {

    const displayName = data.displayName;
    const email = data.email;
    const password = data.password;
    await createUserWithEmailAndPassword(email, password)
    verifyEmail()
    await updateProfile({ displayName: displayName })
      .then(() => {
        reset();
      })
  }


  // const handleGoogleSignin = async () => {
  //   await signInWithGoogle()
  // }


  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then(() => {
        navigate("/signin");
        toast.success('Verification Email Sent Successfully');
      })
  }



  return (
    <div className="w-full bg-white py-10">
      <div className="w-5/6 md:w-2/5 bg-slate-300 mx-auto text-center rounded">
        <h2 className="font-bold text-black text-2xl py-5">Create Account</h2>
        {/* <div className="py-5">
          <div className="py-5 w-4/5 md:w-2/5 mx-auto">
            <div
              onClick={handleGoogleSignin}
              className="flex items-center justify-center border rounded py-2 my-2 cursor-pointer hover:bg-gray-300"
            >
              <img className="w-6" src={google} alt="" />
              <span className="pl-2">Continue With Google</span>
            </div>
          </div>
        </div>
        <span className="text-gray-400">or create an account</span> */}
        <form
          onSubmit={handleSubmit(handleSignupform)}
          action=""
          className="py-3 space-y-3"
        >
          <input
            {...register("displayName")}
            type="text"
            placeholder="Enter Your Name"
            required
            className="input bg-slate-100 my-2 input-ghost w-full block mx-auto max-w-xs"
          />
          <input
            {...register("email")}
            type="email"
            placeholder="Enter Your Email"
            required
            className="input bg-slate-100 my-2 input-ghost w-full block mx-auto max-w-xs"
          />
          <input
            {...register("password")}
            type="password"
            placeholder="Enter Your Password"
            required
            className="input bg-slate-100 my-2 input-ghost w-full block mx-auto max-w-xs"
          />
          {signupError}
          <input
            className="btn btn-outline px-7 btn-natural my-5 block mx-auto"
            type="submit"
            value="SIGN UP"
          />
        </form>
        <p className="text-gray-800 mt-1 pb-5 text-center">
          Already Have an Account?{" "}
          <Link
            to="/signin"
            className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
