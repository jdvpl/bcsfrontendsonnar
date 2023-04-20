import React from 'react';
import { RateForm } from '../../Form/ratingForm';
import Icons from '../../icons';
import useRatingModal from './useRatingModal';

export function RatingModal() {
  const { isOpen, onOpenModal } = useRatingModal();
  return (
    <div
      id="modal"
      className={`bg-black/70 z-50 w-screen h-screen fixed top-0 flex justify-center content-center ${
        isOpen && 'overflow-y-auto'
      }`}
    >
      <div
        className={`${
          isOpen ? 'slideInUp' : 'slideOutDown'
        } p-5 sm:rounded-xl h-fit rounded-none sm:h-fit shadow-lg relative flex flex-col
        w-full bg-white outline-none focus:outline-none sm:my-[5vh] sm:w-[375px] md:w-[528px] lg:w-[528px]`}
      >
        <div onClick={onOpenModal} className="cursor-pointer text-end">
          <Icons
            icon="bcs-icon-23"
            size="text-primario-500 text-end font-bold"
            data-testid="iconRating"
            title=""
          />
        </div>
        <RateForm />
      </div>
    </div>
  );
}
