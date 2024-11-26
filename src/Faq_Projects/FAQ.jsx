import React, { useState } from "react";

export default function FAQ({ id, title, desc }) {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <article>
        <div className="onlyOneDiv">
          <h2>{title}</h2>
          <button
            className="btn"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            {toggle ? "-" : "+"}
          </button>
        </div>
        {toggle && <p>{desc}</p>}
      </article>
    </>
  );
}
