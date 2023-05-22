import { useEffect, useState } from "react";

const useInstructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("https://ieltsbd-server-production.up.railway.app/api/v1/instructors")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);

  return instructors;
};

export default useInstructors;