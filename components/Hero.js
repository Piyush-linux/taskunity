import { Github, Twitter} from 'lucide-react';

  

export default function Hero() {
    return (
        <>
            <section className="">
                <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1
                            className="bg-gradient-to-r from-rose-300 to-rose-500 bg-clip-text text-3xl py-6 font-extrabold text-transparent sm:text-5xl"
                        >
                            Seamlessly Assign, Track, and Achieve Together.

                        </h1>

                        <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                        TaskUnity brings clarity and unity to your task management needs as well as Streamline your tasks and strengthen collaboration.
                        </p>

                        <div className="mt-8 flex flex-wrap text-slate-700 justify-center gap-4">
                            <Github   size={24} />
                            <Twitter size={24} />
                        </div> 
                    </div>
                </div>
            </section>
        </>
    )
}

