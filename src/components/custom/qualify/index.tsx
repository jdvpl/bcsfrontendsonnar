import FC from 'react';
import { useState } from 'react';
import { Star } from '../../ui/icons/star';

interface QualifyProps {
  rate: number;
  changeRate: (index: number) => void;
}

export const Qualify = ({ rate, changeRate }: QualifyProps) => {
  const rating = new Array(5).fill(0);
  const [tempRating, setTempRating] = useState<number>(-1);
  return (
    <div className="flex gap-0 items-center justify-center mt-[16px] w-full">
      {rating.map((_, index) => (
        <div
          key={'rating' + index}
          onClick={() => changeRate(index)}
          className="cursor-pointer"
          onMouseEnter={() => setTempRating(index)}
          onMouseLeave={() => setTempRating(-1)}
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
};
