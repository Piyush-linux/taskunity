export default function BlogCard() {
    return(
        <>
            <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
              <a
                href="#"
                className="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
              >
                <img
                  src="https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  loading="lazy"
                  alt=""
                  className="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200"
                />
              </a>
              <div className="flex flex-col gap-2">
                <span className="text-sm text-gray-400">April 2, 2022</span>
                <h2 className="text-xl font-bold text-gray-800">
                  <a
                    href="#"
                    className="active:text-rose-600 transition duration-100 hover:text-rose-500"
                  >
                    The Pines and the Mountains
                  </a>
                </h2>
                <p className="text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                  necessitatibus molestias explicabo.
                </p>
                <div>
                  <a
                    href="#"
                    className="active:text-rose-700 font-semibold text-rose-500 transition duration-100 hover:text-rose-600"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </article>
        </>
    )
}