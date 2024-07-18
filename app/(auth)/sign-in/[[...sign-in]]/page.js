// app/sign-in/[[...sign-in]]/page.tsx
import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='mx-auto'>
        <h1 className='text-2xl font-extrabold text-center py-3'>Welcome Back 🌸</h1>
        <SignIn />
      </div>
    </div>
  );
};

export default SignInPage;