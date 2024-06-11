const StudentForm = () => {
  return (
    <form className="w-full">
      <div className="max-w-sm m-4">
        <div className="flex justify-between items-center">
          <label
            htmlFor="with-corner-hint"
            className="block text-sm font-medium mb-2 dark:text-white"
          >
            Full Name
          </label>
          <span className="block mb-2 text-sm text-gray-500 dark:text-neutral-500">
            Optional
          </span>
        </div>
        <input
          type="email"
          id="with-corner-hint"
          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          placeholder="you@site.com"
        />
      </div>

      <div className="max-w-sm m-4">
        <div className="flex justify-between items-center">
          <label
            htmlFor="with-corner-hint"
            className="block text-sm font-medium mb-2 dark:text-white"
          >
            E-mail
          </label>
          <span className="block mb-2 text-sm text-gray-500 dark:text-neutral-500">
            Optional
          </span>
        </div>
        <input
          type="email"
          id="with-corner-hint"
          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          placeholder="you@site.com"
        />
      </div>

      <div className="max-w-sm m-4">
        <div className="flex justify-between items-center">
          <label
            htmlFor="with-corner-hint"
            className="block text-sm font-medium mb-2 dark:text-white"
          >
            Level
          </label>
          <span className="block mb-2 text-sm text-gray-500 dark:text-neutral-500">
            School Fees is Dependant on Level
          </span>
        </div>
        <input
          type="email"
          id="with-corner-hint"
          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          placeholder="you@site.com"
        />
      </div>

      <div className="max-w-sm m-4">
        <div className="flex justify-between items-center">
          <label
            htmlFor="with-corner-hint"
            className="block text-sm font-medium mb-2 dark:text-white"
          >
            Faculty
          </label>
          <span className="block mb-2 text-sm text-gray-500 dark:text-neutral-500">
            School Fees is Dependant on Level
          </span>
        </div>
        <input
          type="email"
          id="with-corner-hint"
          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          placeholder="Science"
        />
      </div>

      <div className="max-w-sm m-4">
        <div className="flex justify-between items-center">
          <label
            htmlFor="with-corner-hint"
            className="block text-sm font-medium mb-2 dark:text-white"
          >
            Department
          </label>
          <span className="block mb-2 text-sm text-gray-500 dark:text-neutral-500">
            School Fees is Dependant on Level
          </span>
        </div>
        <input
          type="email"
          id="with-corner-hint"
          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          placeholder="department"
        />
      </div>

      <div className="m-4">
        <button
          type="submit"
          className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-teal-500 text-teal-500 hover:border-teal-400 hover:text-teal-400 disabled:opacity-50 disabled:pointer-events-none"
        >
          Button
        </button>
      </div>
    </form>
  );
};

export default StudentForm;
