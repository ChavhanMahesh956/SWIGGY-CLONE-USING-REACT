import { MENU_APL_URL } from "../utils/constants";
import { useState, useEffect } from "react";

const useRestroMenu = (resId) => {

  const [menuInfo, setMenuInfo] = useState(null); 

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_APL_URL + resId);
    const json = await data.json();

    setMenuInfo(json.data);
  }
  return menuInfo;
};

export default useRestroMenu;
