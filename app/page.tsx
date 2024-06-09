import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-screen flex bg-slate-200">
      <div className="w-1/5 bg-black shadow-2xl flex flex-col justify-between">
        <div>
          <div className="flex flex-col justify-center items-center mb-6">
            <h1 className="text-4xl text-pink-700 shadow-md drop-shadow-md">
              SKool Logo
            </h1>
            <p className="text-slate-100 text-xl drop-shadow-md">tile menu</p>
          </div>

          <div className="flex flex-col justify-center items-center p-2 gap-2">
            <button className="bg-slate-400 pl-9 p-1 text-xl w-full rounded-lg text-center">
              Dashboard
            </button>
            <button className="bg-slate-400 pl-9 p-1 text-xl w-full rounded-lg text-center">
              Profile
            </button>

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
          <h1 className="text-2xl text-pink-700 shadow-md drop-shadow-md">
            SKool Logo
          </h1>
          <p className="text-slate-100 text-sm drop-shadow-md">tile menu</p>
        </div>
      </div>

      <div className="4/5 bg-red-200">
        <table className="">
          <caption className="caption-top">Payment Status</caption>
          <thead>
            <tr>
              <th className="bg-blue-100 border text-left px-8 py-4">Name</th>
              <th className="bg-blue-100 border text-left px-8 py-4">Amount</th>
              <th className="bg-blue-100 border text-left px-8 py-4">Status</th>
              <th className="bg-blue-100 border text-left px-8 py-4">
                Date Paid
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Acceptance</td>
              <td>30000</td>
              <td>Pending</td>
              <td>10-10-2023 20:09:00</td>
            </tr>

            <tr>
              <td>Skool Fees</td>
              <td>30000</td>
              <td>Pending</td>
              <td>10-10-2023 20:09:00</td>
            </tr>

            <tr>
              <td>Hostel Fees</td>
              <td>30000</td>
              <td>Pending</td>
              <td>10-10-2023 20:09:00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
