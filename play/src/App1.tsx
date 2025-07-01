import React, { useEffect, useState } from "react";

export default function App1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const observer = new MutationObserver((e) => {
      console.log("MutationObserver触发了一次", e[0].type);
    });

    observer.observe(document.body, {
      subtree: true,
      childList: true,
    });
  }, []);
  return (
    <div>
      <button
        onClick={() =>
          setCount((pre) => {
            return pre + 100;
          })
        }
      >
        添加100个元素
      </button>
      <div className="container">
        {new Array(count).fill(null).map((_, index) => (
          <div>第{index}个元素</div>
        ))}
      </div>
    </div>
  );
}
