import React from "react";

const Table = ([
  {
    rows,
    columns,
    handleCheckboxChange,
    handleEdit,
    handleDelete,
    handleDropdownToggle,
    dropdownVisible,
    currentPage,
    totalPages,
    currentRangeStart,
    currentRangeEnd,
    totalRows,
    handleNextPage,
    handlePreviousPage,
    labelNames,
    action1,
    action2,
  },
]) => {
  const [checkedRows, setCheckedRows] = useState([]);

  const handleRowCheckboxChange = (index) => {
    const isChecked = checkedRows.includes(index);
    if (isChecked) {
      setCheckedRows(checkedRows.filter((rowIndex) => rowIndex !== index));
    } else {
      setCheckedRows([...checkedRows, index]);
    }
  };

  const handleCheckAll = () => {
    if (checkedRows.length === rows.length) {
      setCheckedRows([]);
    } else {
      setCheckedRows(rows.map((_, index) => index));
    }
  };

  return (
    <div className="flex flex-col gap-10 ">
      <div className=" rounded-[12px] bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          <div className="flex flex-col justify-between md:flex-row">
            <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
              All Blogs
            </h4>
          </div>
          <table className="w-full table-auto">
            <thead>
              <div className="bg-[#000] pt-5 rounded-[12px]  ">
                <div className="w-full flex items-center py-2 px-6 bg-[#F8FAFC] pt-4">
                  {columns.map((column, index) => (
                    <div
                      key={index}
                      className="flex uppercase gap-3 items-center w-[490.97px]"
                    >
                      {index === 0 && (
                        <label className="flex items-center cursor-pointer relative">
                          <input
                            type="checkbox"
                            className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded-[6px] shadow hover:shadow-md border border-slate-300 checked:bg-[#1A55A5] checked:border-[#1A55A5]"
                            checked={checkedRows.length === rows.length}
                            onChange={handleCheckAll}
                          />
                          <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                            <svg
                              width="10"
                              height="8"
                              viewBox="0 0 10 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3.5775 7.22786C3.3775 7.22786 3.1875 7.14786 3.0475 7.00786L0.2175 4.17786C-0.0725 3.88786 -0.0725 3.40786 0.2175 3.11786C0.5075 2.82786 0.9875 2.82786 1.2775 3.11786L3.5775 5.41786L8.7175 0.277864C9.0075 -0.0121362 9.4875 -0.0121362 9.7775 0.277864C10.0675 0.567864 10.0675 1.04786 9.7775 1.33786L4.1075 7.00786C3.9675 7.14786 3.7775 7.22786 3.5775 7.22786Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                        </label>
                      )}
                      <h6 className="text-[#4D515A] font-montserrat text-sm font-semibold leading-[22px]">
                        {labelNames[index]}
                      </h6>
                      <img src={updown} alt="arrow" />
                    </div>
                  ))}
                </div>
              </div>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                  Image
                </th>
                <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                  Title
                </th>
                <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                  Link
                </th>
                <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                  Date
                </th>
                <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  sdfgsd
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">dfdf</p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">ddfdf</p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">sdfg</p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <div className="flex items-center space-x-3.5">
                    <button className="hover:text-primary">Del</button>
                    <button className="hover:text-primary">Edit</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
