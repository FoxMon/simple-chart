import { useRef, useEffect } from "react";

function Base({ node }) {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.appendChild(node);
  }, []);

  return <div className="base-component-wrapper" ref={ref}></div>;
}

export default Base;
