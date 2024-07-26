export default function Loader() {
  return (
    <>
      <div className="">
        <div className="flex justify-center items-center h-screen">
          <div className="relative inline-flex">
            <div className="w-8 h-8 bg-rose-500 rounded-full" />
            <div className="w-8 h-8 bg-rose-400 rounded-full absolute top-0 left-0 animate-ping" />
            <div className="w-8 h-8 bg-rose-200 rounded-full absolute top-0 left-0 animate-pulse" />
          </div>
        </div>
      </div>
    </>
  );
}
