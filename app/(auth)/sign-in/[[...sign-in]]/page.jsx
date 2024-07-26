import SignIn from "@/components/auth/signin";

export const metadata = {
  title: 'Login',
}

const SignInPage = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='mx-auto'>
        {/* <SignIn /> */}
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-lg">
            <h1 className="text-center text-2xl font-extrabold text-rose-400 sm:text-3xl">Get started today 🌸</h1>
            <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt dolores deleniti
              inventore quaerat mollitia?
            </p>

            <SignIn/>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;


