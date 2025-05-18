import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function AOSInit() {
  useEffect(() => {
    Aos.init({
      duration: 700,
    });
  }, []);

  return null;
}

export default AOSInit;
