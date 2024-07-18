import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='mx-auto'>
        <h1 className='text-2xl font-extrabold text-center py-3'>Create Your Task 🌸</h1>
        <SignUp />
      </div>
    </div>
  );
};

export default SignUpPage;