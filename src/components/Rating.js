import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Rating = ({ value, text, color }) => {
  let star;
  let star2;
  let star3;
  let star4;
  let star5;
  if (value >= 1) {
    star = <BsStarFill style={{ color }} />;
  } else if (value >= 0.5) {
    star = <BsStarHalf style={{ color }} />;
  } else {
    star = <BsStar style={{ color }} />;
  }

  if (value >= 2) {
    star2 = <BsStarFill style={{ color }} />;
  } else if (value >= 1.5) {
    star2 = <BsStarHalf style={{ color }} />;
  } else {
    star2 = <BsStar style={{ color }} />;
  }

  if (value >= 3) {
    star3 = <BsStarFill style={{ color }} />;
  } else if (value >= 2.5) {
    star3 = <BsStarHalf style={{ color }} />;
  } else {
    star3 = <BsStar style={{ color }} />;
  }

  if (value >= 4) {
    star4 = <BsStarFill style={{ color }} />;
  } else if (value >= 3.5) {
    star4 = <BsStarHalf style={{ color }} />;
  } else {
    star4 = <BsStar style={{ color }} />;
  }

  if (value >= 5) {
    star5 = <BsStarFill style={{ color }} />;
  } else if (value >= 4.5) {
    star5 = <BsStarHalf style={{ color }} />;
  } else {
    star5 = <BsStar style={{ color }} />;
  }

  return (
    <div className='rating'>
      <span>{star}</span>
      <span>{star2}</span>
      <span>{star3}</span>
      <span>{star4}</span>
      <span>{star5}</span>
    </div>
  );
};

export default Rating;
