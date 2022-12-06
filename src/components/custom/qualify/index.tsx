import React, { useState } from 'react';
import { Star } from '../../ui/icons/star';

interface QualifyProps {
  rate: number;
  changeRate: (index: number) => void;
  isEditable?: boolean;
}

export function Qualify({ rate, changeRate, isEditable = true }: QualifyProps) {
  const rating = new Array(5).fill(0);
  const [tempRating, setTempRating] = useState<number>(-1);
  return (
    <div className="flex gap-0 items-center justify-center mt-[16px] w-full" role="ratingContainer">
      {rating.map((_, index) => (
        <div
          role="ratingTestbtn"
          key={`rating${index}`}
          onClick={() => isEditable && changeRate(index)}
          className="cursor-pointer"
          onMouseEnter={() => isEditable && setTempRating(index)}
          onMouseLeave={() => isEditable && setTempRating(-1)}
        >
          <Star
            key={`star ${index}`}
            id={`star ${index}`}
            active={index <= rate || index <= tempRating}
          />
        </div>
      ))}
    </div>
  );
}
