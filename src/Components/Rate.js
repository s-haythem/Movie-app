import React from "react";
import StarIcon from "@material-ui/icons/Star";

const Rate = ({ setRating }) => {
  let arr = Array(5).fill(<StarIcon style={{ color: "yellow" }} />);

  return (
    <div className="Rate">
      {arr.map((el, i) => (
        <button onClick={() => setRating(i+1)} className="star-btn">
          {el}
        </button>
      ))}
    </div>
  );
};

export default Rate;
