import React, { useState } from 'react';
// import StarRateIcon from '@material-ui/icons/StarRate';
import { FaStar } from "react-icons/fa";

const starArray = (length) => [...Array(length)];

export default function RatingStars({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(Math.floor(Math.random() * 5));
  return (
    <>
      {starArray(totalStars)
        .map((num, idx) => (
          <Star
            key={idx}
            selected={selectedStars > idx}
            // onSelect={() => setSelectedStars(idx + 1)}
          />
        ))}
      <p>
        {/* {selectedStars} of {totalStars} stars */}
      </p>
    </>
  );
}
// fakeFunction simply does notting, it just return whatever argument was sent to it.
// However, if we do not set a default function, and the onSelect property is not defined, 
// an error will occur when we click the FaStar component because the value 
// for onSelect must be a function.

const Star = ({ selected = false, onSelect = (fakeFunction) => fakeFunction }) => (
    <FaStar
      color={selected ? "red" : "lightgrey"}
      size={15}
      onClick={onSelect} />
  );


