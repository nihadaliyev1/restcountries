import { useEffect, useState } from "react";

/**
 * Detects if the click made was outside the modal .
 * @param ref Ref to the modal. Can be created by using useRef() hook.
 * @param modal State of the modal. Can be created by using useState() hook.
 */
const DetectOutsideClick = (ref, modal) => {
  const [clickedOutside, setClickedOutside] = useState(false);

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target) && modal)
        setClickedOutside(true);
      else setClickedOutside(false);
    };
    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, [ref, clickedOutside, modal]);

  return clickedOutside;
};

export default DetectOutsideClick;
