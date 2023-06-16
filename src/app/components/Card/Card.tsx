import React from "react";

const Card = ({ info }: { info: any }) => {
  return (
    <div>
      <p>Image</p>
      <p>{info.name}</p>
      <p>Survival status</p>
    </div>
  );
};

export default Card;
