import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addLoginUsers } from "../utils/loginUserSlice";
import data from "../../appData.json";

const useMediaList = () => {
  const dispatch = useDispatch();
  // Fetch Data from store
  const uers = useSelector((store) => store.loginUser?.uers);

  const getUsers = () => {
    const userData = data.leaveMangement[1].usersList
    dispatch(addLoginUsers(userData));
  };

  useEffect(() => {
    !uers && getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useMediaList;