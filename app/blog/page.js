"use client"
import BlogCard from "@/components/blog";
import { fetcher } from "@/lib/utils";
import useSWR from 'swr'

// export const metadata = {
//   title: "Blog Page",
//   description: "Blog description",
// };



export default function Blog() {

    // const fetcher = (...args) => fetch(...args).then(res => res.json())    
    // Fetch Blogs
    const { data, error, isLoading } = useSWR("/api/blog", fetcher)
    console.log(data);
  return (
    <div>
      
      <main>
        <article>
          <header className="mx-auto mt-20 max-w-screen-lg rounded-t-lg bg-white pt-16 text-center shadow-lg">
            <p className="text-gray-500">Published April 4, 2022</p>
            <h1 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
              Why quit now?
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              You've come way farther than you expected
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">
                Marketing
              </button>
              <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">
                Branding
              </button>
              <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">
                Digital
              </button>
              <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">
                Identity
              </button>
            </div>
            <img
              className="-z-10 absolute top-0 left-0 mt-10 h-96 w-full object-cover"
              src="https://images.unsplash.com/photo-1504672281656-e4981d70414b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </header>
          <div className="mx-auto max-w-screen-lg space-y-12 rounded-b-lg bg-white px-8 pt-10 pb-20 font-serif text-lg tracking-wide text-gray-700 sm:shadow-lg">
            <h2 className="text-2xl font-semibold">
              First Steps to Life Betterment
            </h2>
            <blockquote className="max-w-lg border-l-4 px-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              maiores tempora quod ducimus dolore!
              <span className="whitespace-nowrap text-sm">— Daniel Lehmer</span>
            </blockquote>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              enim maxime sit laudantium! Dolore atque, maxime iusto ut quas
              distinctio reiciendis animi voluptatibus soluta molestias,
              mollitia officiis laboriosam illum earum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              similique reiciendis et recusandae provident repellendus rem
              doloremque eaque error assumenda?
            </p>
          </div>
        </article>
      </main>
      <div className="w-fit mx-auto mt-10 flex space-x-2">
        <div className="h-0.5 w-2 bg-gray-600" />
        <div className="h-0.5 w-32 bg-gray-600" />
        <div className="h-0.5 w-2 bg-gray-600" />
      </div>
      <aside
        aria-label="Recent Posts"
        className="mx-auto mt-10 max-w-screen-xl py-20"
      >
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          {/* Heading */}
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Most Recent Posts
            </h2>
            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
              necessitatibus molestias explicabo.
            </p>
          </div>
          {/* /Heading */}
          <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">

          {
            !isLoading && data.map((itm,index)=>{
              return(
                <BlogCard key={index} title={itm.title} desc={itm.desc} cover={itm.cover} />
              )
            })
          }
          </div>
        </div>
      </aside>
    </div>
  );
}
