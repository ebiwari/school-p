import StudentForm from "@/components/student/StudentForm";

const Student = () => {
  return (
    <div className="-m-1.5 overflow-auto">
      <div className="p-1.5 min-w-full inline-block align-middle">
        <div className="overflow-hidden">
          <div className="table border-collapse table-auto w-full divide-y divide-gray-200 dark:divide-neutral-700">
            <div className="table-header-group">
              <div className="table-row">
                <div className="table-cell px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                  Name
                </div>
                <div className="table-cell px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                  Status
                </div>
                <div className="table-cell px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                  Date
                </div>
                <div className="table-cell px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                  Action
                </div>
              </div>
            </div>
            <div className="table-row-group divide-y divide-gray-200 bg-white dark:divide-neutral-700 dark:bg-neutral-800">
              <div className="table-row">
                <div className="table-cell px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                  Acceptance
                </div>
                <div className="table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                  Pending
                </div>
                <div className="table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                  Not Net
                </div>
                <div className="table-cell px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                  <button
                    type="button"
                    className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400"
                  >
                    Make Payment
                  </button>
                </div>
              </div>
              <div className="table-row">
                <div className="table-cell px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                  School Fees
                </div>
                <div className="table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                  Pending
                </div>
                <div className="table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                  Not Yet
                </div>
                <div className="table-cell px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                  <button
                    type="button"
                    className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400"
                  >
                    Make Fees Payment
                  </button>
                </div>
              </div>
              <div className="table-row">
                <div className="table-cell px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                  Hostel
                </div>
                <div className="table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                  Pending
                </div>
                <div className="table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                  Not Yet
                </div>
                <div className="table-cell px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                  <button
                    type="button"
                    className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400"
                  >
                    Make Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
