import Link from 'next/link'

export default function Navbar() {
    return (
        <>
            <header className="bg-white">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="md:flex md:items-center md:gap-12">
                            <Link className="flex justify-center items-center space-x-3" href="/">
                                <img src="/logo.png" className='w-10 h-10' />
                                <span className='text-rose-400 font-extrabold text-xl'>Taskunity</span>
                            </Link>
                        </div>

                        {/* <div className="hidden md:block">
                            <nav aria-label="Global">
                                <ul className="flex items-center gap-6 text-sm">
                                    <li>
                                        <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> About </a>
                                    </li>

                                    <li>
                                        <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Careers </a>
                                    </li>

                                    <li>
                                        <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> History </a>
                                    </li>

                                    <li>
                                        <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Services </a>
                                    </li>

                                    <li>
                                        <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Projects </a>
                                    </li>

                                    <li>
                                        <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Blog </a>
                                    </li>
                                </ul>
                            </nav>
                        </div> */}

                        <div className="flex items-center gap-4">
                            <div className="sm:flex sm:gap-4">
                                <Link
                                    className="rounded-md bg-rose-400 px-5 py-2.5 text-sm font-bold text-white shadow"
                                    href="/sign-in"
                                >
                                    Login
                                </Link>

                                <div className="hidden sm:flex">
                                    <Link
                                        className="rounded-md bg-gray-100 hover:bg-rose-100 px-5 py-2.5 text-sm font-medium text-rose-500"
                                        href="/sign-up"
                                    >
                                        Register
                                    </Link>
                                </div>
                            </div>

                            <div className="block md:hidden">
                                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}