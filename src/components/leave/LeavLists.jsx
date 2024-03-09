import React, { useState } from "react";
import editIcon from "../../assets/editIcon.png";
import { useStateContext } from "../../utils/StateContext";

const LeavLists = () => {
  const { selectedUser, password } = useStateContext();
  let listData = JSON.parse(localStorage.getItem("userleaveDataArray"));
  const [editButton, setEditButton] = useState(null);
  const [userLeaveData, setUserLeaveData] = useState(listData);
  let userType = selectedUser.userType;

  const handleApprovedButton = (id, action) => {
    const selectedItemIndex = listData.findIndex((item) => item.id === id);
    if (selectedItemIndex !== 1) {
      const updatedArray = [...userLeaveData];
      if (action === "approved" && userType === "manager") {
        updatedArray[selectedItemIndex] = {
          ...updatedArray[selectedItemIndex],
          managerStatus: "Approved",
        };
      } else if (action === "reject" && userType === "manager") {
        updatedArray[selectedItemIndex] = {
          ...updatedArray[selectedItemIndex],
          managerStatus: "Reject",
        };
      } else if (action === "approved" && userType === "HR") {
        updatedArray[selectedItemIndex] = {
          ...updatedArray[selectedItemIndex],
          hrStatus: "Approved",
        };
      } else {
        updatedArray[selectedItemIndex] = {
          ...updatedArray[selectedItemIndex],
          hrStatus: "Reject",
        };
      }

      setUserLeaveData(updatedArray);
      localStorage.setItem("userleaveDataArray", JSON.stringify(updatedArray));
    }
  };

  return (
    <div className="relative overflow-x-auto">
      <table className="table-auto w-full text-sm text-left rtl:text-right text-black  dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3 "> Employee Name</th>
            <th className="px-6 py-3 ">Leave Type Name</th>
            <th className="px-6 py-3">Leave Type Details</th>
            <th className="px-6 py-3">Start Date</th>
            <th className="px-6 py-3">End Date</th>
            <th className="px-6 py-3">Manager Status</th>
            <th className="px-6 py-3">HR Status</th>
            {userType !== "employee" && <th className="px-6 py-3"> Action</th>}
          </tr>
        </thead>
        <tbody>
          {userLeaveData.map((item) => (
            <tr
              className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 h-[100px]"
              key={item.id}
            >
              <td className="px-6 py-3 ">{item.name}</td>
              <td>{item.leaveType}</td>
              <td>{item.reason}</td>
              <td>{item.startDate}</td>
              <td>{item.endDate}</td>
              <td>{item.managerStatus ? item.managerStatus : "pending"}</td>
              <td>{item.hrStatus ? item.hrStatus : "pending"}</td>
              {userType !== "employee" && (
                <td>
                  {" "}
                  <button type="button" onClick={() => setEditButton(item.id)}>
                    <img className="text-white  w-5" src={editIcon} />
                  </button>
                  {editButton === item.id ? (
                    <>
                      <button
                        type="button"
                        class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4
             focus:ring-green-300 font-smaller rounded-md text-sm  p-1 text-center me-2 mb-2 dark:bg-green-600
              dark:hover:bg-green-700 dark:focus:ring-green-800 w-16"
                        onClick={() =>
                          handleApprovedButton(item.id, "approved")
                        }
                      >
                        Approved
                      </button>
                      <button
                        type="button"
                        class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-smaller rounded-md text-sm p-1 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 w-16"
                        onClick={() => handleApprovedButton(item.id, "reject")}
                      >
                        Reject
                      </button>
                    </>
                  ) : (
                    ""
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      ​
    </div>
  );
};

export default LeavLists;
