import { useState, useEffect } from "react";

const useAutoId = () => {
  const [id, setId] = useState(0);

  useEffect(() => {
    if(localStorage.getItem("ID")) {
        
    }
    const storedId = localStorage.getItem("ID");
  }, [])
};

export default useAutoId;
