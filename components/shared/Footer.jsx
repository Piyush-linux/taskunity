export default function Footer() {
    let date = new Date().getFullYear()
    return (
        <>
            <footer className="bg-gray-50">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="flex justify-center items-center text-rose-400 sm:justify-start space-x-3">
                            <img src="/logo.png" className="w-14 h-14" />
                            <span className="font-medium text-2xl">Taskunity</span>
                        </div>

                        <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
                            Copyright &copy; { date }. Developed by Piyush
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}