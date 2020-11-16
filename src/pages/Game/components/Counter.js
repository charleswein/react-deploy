import React from "react";

export const Counter = (props) => {

  return (
    <div className='container'>
      <p className="h3 text-right">Шаги:{props.count}</p>
    </div>
  );
};
