import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function Ratings() {
  const [rating, setRating] = useState(null);
  const [hoverFill, setHoverFill] = useState(null);

  return (
    <div class="flex mt-1 mr-2">
      <div className="star">
        {[...Array(5)].map((_, index) => {
          const ratingValue = index + 1;

          return (
            <button
              className="border-0 px-0.5"
              key={index}
              onMouseEnter={() => setHoverFill(ratingValue)}
              onMouseLeave={() => setHoverFill(null)}
              onClick={() => setRating(ratingValue)}
            >
              <FaStar
                className=""
                size={20}
                style={{
                  color:
                    ratingValue <= (hoverFill || rating) ? "#ffe101" : "#ccc",
                }}
                onChange={() => setRating(ratingValue)}
                value={ratingValue}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
