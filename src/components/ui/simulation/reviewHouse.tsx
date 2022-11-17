import { childrenProps } from '../../../interfaces/childrenProps';
import Card from './Card';
import { basePath } from '../../../../next.config';

interface ReviewHouseProps extends childrenProps {
  disbursementValue: string;
  financedValue: string;
  fireInsurance: string;
  lifeInsurance: string;
  monthlyCoute: string;
  monthlyFee: string;
  numberPeriods: string;
  rate: string;
}
export const ReviewHouse: React.FC<ReviewHouseProps> = ({
  disbursementValue,
  financedValue,
  fireInsurance,
  lifeInsurance,
  monthlyCoute,
  monthlyFee,
  numberPeriods,
  rate,
}) => (
  <div className="flex flex-col items-center ">
    <Card
      className="lg:w-[448px] h-[88px] sm:w-[343px] h-[92px] bg-[#C4D1DA] pt-[16px] font-semibold rounded-[8px] mb-[12px]"
      title="Couta mensual sin seguros"
      value={monthlyCoute?.toString()}
      text="text-[38px] pl-[18px]"
      urlsvg=''
    />
    <Card
      className="lg:w-[448px] h-[88px] sm:w-[343px] h-[92px] bg-[#F3F4F6] pt-[16px] pl-[16px] rounded-[8px] mb-[12px]"
      title="Valor financiado apróximado"
      value={financedValue?.toString()}
      text="text-[20px] pl-[18px] font-semibold"
      urlsvg={`${basePath}/images/Money.svg`}
    />
    <Card
      className="lg:w-[448px] h-[88px] sm:w-[343px] h-[92px] bg-[#F3F4F6] pt-[16px] pl-[16px] rounded-[8px] mb-[12px]"
      title="Plazo"
      value={numberPeriods?.toString()}
      text="text-[20px] pl-[18px] font-semibold"
      urlsvg={`${basePath}/images/Calendar.svg`}
    />
    <Card
      className="lg:w-[448px] h-[88px] sm:w-[343px] h-[92px] bg-[#F3F4F6] pt-[16px] pl-[16px] rounded-[8px] mb-[12px]"
      title="Tasa"
      value={rate}
      text="text-[20px] pl-[18px] font-semibold"
      urlsvg={`${basePath}/images/Charts.svg`}
    />
    <Card
      className="lg:w-[448px] h-[88px] sm:w-[343px] h-[92px] bg-[#F3F4F6] pt-[16px] pl-[16px] rounded-[8px] mb-[12px]"
      title="Seguro de vida"
      value={lifeInsurance?.toString()}
      text="text-[20px] pl-[18px] font-semibold"
      urlsvg={`${basePath}/images/Insurage.svg`}
    />
    <Card
      className="lg:w-[448px] h-[88px] sm:w-[343px] h-[92px] bg-[#F3F4F6] pt-[16px] pl-[16px] rounded-[8px] mb-[12px]"
      title="Seguro de Incendio,Rayo y Terremoto"
      value={fireInsurance?.toString()}
      text="text-[20px] pl-[18px] font-semibold"
      urlsvg={`${basePath}/images/Home.svg`}
    />
  </div>
);

export default ReviewHouse;
