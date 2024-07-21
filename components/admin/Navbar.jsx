import { SignOutButton } from "@clerk/nextjs";


export default function Navbar(props) {
    return(
        <>
            <header>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="text-center sm:text-left">
                            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Welcome Back, {props.username}!</h1>

                            <p className="mt-1.5 text-sm text-gray-500">Let's Create a new Task ! 🎉</p>
                        </div>

                        <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                        <SignOutButton>
                            <button
                                className="text-sm font-medium inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-5 py-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring"
                                type="button"
                            >
                                <span className=""> Sign Out </span>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                </svg>
                            </button>
                            </SignOutButton>
                            <button
                                className="block rounded-lg bg-rose-400 px-5 py-3 text-sm font-bold text-white transition hover:bg-rose-500 focus:outline-none focus:ring focus:ring-rose-400"
                                type="button"
                                onClick={()=>props.openModal(true)}
                            >
                                Create Task
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}