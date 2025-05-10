import { useEffect } from "react";
import { useRef } from "react";

export function useEscapePress(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(() => {
    function handleKeyPress(e) {
      if (ref && !ref.current.contains(e.traget) && e.key === "Escape")
        handler();
    }

    document.addEventListener("keydown", handleKeyPress, listenCapturing);

    return () =>
      document.removeEventListener("keydown", handleKeyPress, listenCapturing);
  }, [handler, listenCapturing]);
}
