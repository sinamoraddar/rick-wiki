import React from "react";

const Card = ({ info }: { info: any }) => {
  return (
    <div>
      {info.image !== "" && <img src={info.image} alt={info.name} />}
      <p>{info.name}</p>
      <p>{info.status}</p>
      <p>{info.gender}</p>
      <p>{info.species}</p>
    </div>
  );
};

export default Card;
