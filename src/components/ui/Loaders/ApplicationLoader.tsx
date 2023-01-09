import Lottie from 'react-lottie-player';
import Typography from '../Typography';
import houseAnimation from '../../../lib/houseAnimation.json';

export const ApplicationLoader = () => {
  return (
    <div
      className="bg-white fixed top-0 left-0 w-screen h-screen z-10 flex flex-col justify-center items-center"
      data-testid="message-loader"
    >
      <Lottie
        loop
        animationData={houseAnimation}
        className="mx-auto xl:w-[378px] xl:mb-8 md:w-[376.91px] md:mb-[26px] sm:w-[321.92px] sm:mb-[17px] mb-6 w-[287.56px]"
        play
        speed={0.4}
      />
      <Typography
        style={{ fontFamily: 'Montserrat' }}
        variant="bodyM3"
        className="Montserrat font-semibold  text-[16px] tracking-wide	text-center leading-5 xl:w-[366px] md:w-[273px] sm:w-[251px] xs:w-[256px]"
      >
        Tener vivienda propia pronto <br /> será una realidad
      </Typography>
    </div>
  );
};
