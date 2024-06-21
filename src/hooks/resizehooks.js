import { useEffect, useState } from "react";

function useResizeHook() {
  const [resize, setResize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function windowResize() {
      setResize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", windowResize);
    windowResize();
    return () => window.removeEventListener("resize", windowResize);
  }, []);

  return resize;
}

export default useResizeHook;
