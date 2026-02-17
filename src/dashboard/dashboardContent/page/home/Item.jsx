const Item = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-red-50">
          <img
            src="/assets/img/icons/student.svg"
            alt="student"
            className="w-8 h-8"
          />
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">3654</h2>
            <span className="text-sm px-2 py-1 rounded-md bg-red-100 text-red-600 font-medium">
              1.2%
            </span>
          </div>
          <p className="text-gray-500 text-sm">Total Students</p>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-gray-300 mt-4 pt-4 text-sm">
        <p>
          Active :<span className="font-semibold text-gray-800 ml-1">3643</span>
        </p>

        <span className="text-gray-300">|</span>

        <p>
          Inactive :<span className="font-semibold text-gray-800 ml-1">11</span>
        </p>
      </div>
    </div>
  );
};

export default Item;
