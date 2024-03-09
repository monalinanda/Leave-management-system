import React, { useState, useEffect } from "react";
import data from "../../../appData.json";
import { useStateContext } from "../../utils/StateContext";
import { v4 as uuidv4 } from "uuid";

const NewLeaveForm = () => {
  const { setUserLeaveData, userleaveData, selectedUser } = useStateContext();
  const listData = data.leaveMangement[0].leaveTypeList;
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingData =
      JSON.parse(localStorage.getItem("userleaveDataArray")) || [];
    const userleaveDataArray = [
      ...existingData,
      { ...formData, id: uuidv4(), name: selectedUser.name },
    ];
    setUserLeaveData(userleaveDataArray);
    setFormData({});
    localStorage.setItem(
      "userleaveDataArray",
      JSON.stringify(userleaveDataArray)
    );
  };
  useEffect(() => {
    const storedData = localStorage.getItem("userleaveDataArray");
    if (storedData) {
      setUserLeaveData(JSON.parse(storedData));
    }
  }, []);

  return (
    <div className="max-w-sm mx-auto sm:max-w-[80%]">
      <form className="">
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Leave Type
                </label>
                <div className="mt-2">
                  <select
                    id="leaveType"
                    name="leaveType"
                    autoComplete="leave-Type"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                 ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    value={formData.leaveType || ""}
                    onChange={handleInputChange}
                  >
                    {listData.map((item) => (
                      <option>{item.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Number of Days
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="numberOfDays"
                    id="numberOfDays"
                    autoComplete="numberOf-Days"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-1"
                    value={formData.numberOfDays || ""}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm  font-bold leading-6 text-gray-900"
                >
                  Start Date
                </label>
                <div className="mt-2">
                  <input
                    type="date"
                    name="startDate"
                    id="startDate"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-1"
                    value={formData.startDate || ""}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  End Date
                </label>
                <div className="mt-2">
                  <input
                    type="date"
                    name="endDate"
                    id="endDate"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-1"
                    value={formData.endDate || ""}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm font-bold leading-6 text-gray-900"
              >
                Reason
              </label>
              <div className="mt-2">
                <textarea
                  id="reason"
                  name="reason"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset 
                  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-1 "
                  value={formData.reason || ""}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-start gap-x-6">
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm 
          hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
          focus-visible:outline-indigo-600"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewLeaveForm;
