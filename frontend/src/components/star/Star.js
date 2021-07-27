import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

export const firstStar = (value, color) => {
  let output;

  switch (value) {
    case value >= 1:
      output = <BsStarFill style={{ color }} />;
      return output;
    case value >= 0.5:
      output = <BsStarHalf style={{ color }} />;
      return output;

    default:
    //   return <BsStar style={{ color }} />;
  }
};

/**
 * 
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
  <span>{star}</span>
      <span>{star2}</span>
      <span>{star3}</span>
      <span>{star4}</span>
      <span>{star5}</span>
 * 
 */
