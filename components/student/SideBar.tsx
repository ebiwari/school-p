import Link from "next/navigation";

const SideBar = () => {
  return (
    <div className=" bg-black shadow-2xl flex flex-col justify-between ">
      <div>
        <div className="flex flex-col justify-center items-center mb-6">
          <h1 className="text-4xl text-pink-700 shadow-md drop-shadow-md">
            SKool Logo
          </h1>
          <p className="text-slate-100 text-xl drop-shadow-md">tile menu</p>
        </div>

        <div className="flex flex-col justify-center items-center p-2 gap-2">
          <a
            href="/student"
            className="bg-slate-400 pl-9 p-1 text-xl w-full rounded-lg text-center"
          >
            Dashboard
          </a>

          <a
            href="/student/profile"
            className="bg-slate-400 pl-9 p-1 text-xl w-full rounded-lg text-center"
          >
            Profile
          </a>

          <button className="bg-slate-400 pl-9 p-1 text-xl w-full rounded-lg text-center">
            Register Courses
          </button>

          <button className="bg-slate-400 pl-9 p-1 text-xl w-full rounded-lg text-center">
            Result Manager
          </button>

          <button className="bg-slate-400 pl-9 p-1 text-xl w-full rounded-lg text-center">
            Hostel Manager
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mb-6">
        <a href="/" className="text-2xl text-pink-700 shadow-md drop-shadow-md">
          Logout
        </a>
        <p className="text-slate-100 text-sm drop-shadow-md">tile menu</p>
      </div>
    </div>
  );
};

export default SideBar;
