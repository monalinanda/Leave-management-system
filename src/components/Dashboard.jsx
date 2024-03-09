import { useEffect } from "react";
import { useStateContext } from "../utils/StateContext";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
  const { totalLeave, approvedLeave, pendingLeave, rejectLeave ,isSignInSuccessful} =
    useStateContext();
  const users = useSelector((store) => store.loginUser.uers);
  const newUsersArray = users?.filter((item) => item.userType !== "employee");
  const navigateTo = useNavigate();
  useEffect(()=>{
if(isSignInSuccessful === true){
  navigateTo("/dashboard")
}
else{
  navigateTo("/")
}
  })

  return (
    <div className=" w-full">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 flex  flex-col  md:flex-row items-center justify-around ">
          <div className=" sm:w-auto w-full flex flex-col items-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Total leave
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              {totalLeave}
            </p>
          </div>
          <div className=" sm:w-auto w-full flex flex-col items-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Approved leave
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              {approvedLeave?.length}
            </p>
          </div>
          <div className="sm:w-auto w-full flex flex-col items-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Rejected leave
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              {rejectLeave?.length}
            </p>
          </div>
          <div className=" sm:w-auto w-full flex flex-col items-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Pending leave
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              {pendingLeave?.length}
            </p>
          </div>
        </div>
        <div className=" max-w-7xl py-6 sm:px-6 lg:px-8  sm:flex sm:items-center  flex-col">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            Approve By
          </h5>
          <div className="border-gray-400  p-5 border-[1px] rounded-md">
            {newUsersArray?.map((user) => (
              <div className="p-5 ">
                <p class="mb-2 tracking-tight text-gray-900 ">
                  <span>Name: </span>
                  <span className="uppercase text-sm font-bold text-gray-600">
                    {user.name}
                  </span>
                </p>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                  <span>Email: </span>
                  <span className="text-sm font-bold text-gray-600">
                    {user.email}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
export default Dashboard;
