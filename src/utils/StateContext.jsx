import React, { createContext, useContext, useState, useEffect } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignInSuccessful, setIsSignInSuccessful] = useState(false);
  let user = JSON.parse(localStorage.getItem('user')) 
  const [selectedUser , setSelectedUser] = useState(user);
  const [userType, setUserType] = useState("");
  const[totalLeave , setTotalLeave] = useState(12);
  const[approvedLeave , setApprovedLeave] = useState([]);
  const[pendingLeave, setPendingLeave]= useState([]);
  const[rejectLeave , setRejectLeave]= useState([]);
  let storedUserData = JSON.parse(localStorage.getItem('userleaveDataArray')) 
  const [userleaveData , setUserLeaveData]= useState(storedUserData  || 0);

  const updateData = (newData) => {
    setSelectedUser(newData);
  };
  const fetchTotalleavesUpdate =()=>{
    for(let i = 0 ; i < userleaveData?.length ; i++){
      if(userleaveData[i]?.managerStatus !== undefined & userleaveData[i]?.hrStatus  !== undefined){
      if(userleaveData[i]?.managerStatus === "Approved" & userleaveData[i].hrStatus ==="Approved" ){
        let approvedArray = [];
        approvedArray.push(userleaveData[i])
        console.log(approvedArray,"approvedArray")
      // let x = [approvedArray]
        setApprovedLeave([...approvedArray ,approvedArray] );
      }
      else if(userleaveData[i]?.managerStatus === "Reject" & userleaveData[i].hrStatus ==="Reject"){
        let rejectArray = [];
        rejectArray.push(userleaveData[i])
        setRejectLeave(rejectArray)
      }
      else{
        let OtherrejectArray = [];
        OtherrejectArray.push(userleaveData[i])
        setRejectLeave([...rejectLeave ,OtherrejectArray])
      }
      }
      else {
        let pendingArray = [];
        pendingArray.push(userleaveData[i])
        setPendingLeave(pendingArray)
      }
      
      }
  }
  useEffect(()=>{
    fetchTotalleavesUpdate()

},[])

  return (
    <Context.Provider
      value={{
        email,
        password,
        isSignInSuccessful,
        userType,
        selectedUser,
        totalLeave,
        approvedLeave,
        pendingLeave,
        rejectLeave,
        userleaveData,
        setEmail,
        setPassword,
        setIsSignInSuccessful,
        setUserType,
        setSelectedUser,
        updateData,
        setTotalLeave,
        setUserLeaveData
      }}
    >
      {children}
    </Context.Provider>
  );
};
export const useStateContext = () => useContext(Context);
