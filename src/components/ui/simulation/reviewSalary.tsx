import { childrenProps } from '../../../interfaces/childrenProps';
import Card from "./Card"
import { basePath } from '../../../../next.config';

interface ReviewSalaryProps extends childrenProps {
    disbursementValue:number;
    financedValue:number;
    fireInsurance:number;
    lifeInsurance:number;
    monthlyCoute:number;
    monthlyFee:number;
    numberPeriods:number;
    rate:number;
}
export const ReviewSalary: React.FC<ReviewSalaryProps> = ({disbursementValue,financedValue,fireInsurance,lifeInsurance,monthlyCoute,monthlyFee,numberPeriods,rate}) => (
  <div className='flex flex-col items-center '>
    <Card
            className="lg:w-[448px] h-[88px] sm:w-[343px] h-[92px] bg-[#C4D1DA] pt-[16px] font-semibold rounded-[8px] mb-[12px]"
            title="Valor financiado apróximado"
            value={financedValue?.toString()}
            text="text-[38px] pl-[16px]"
        />
    <Card
            className="lg:w-[448px] h-[88px] sm:w-[343px] h-[92px] bg-[#F3F4F6] pt-[16px] pl-[16px] rounded-[8px] mb-[12px]"
            title="Couta mensual total con seguros"
            value={monthlyFee?.toString()}
            text="text-[14px] pl-[16px]"
            urlsvg={`${basePath}/images/Money.svg`}
        />
    <Card
            className="lg:w-[448px] h-[88px] sm:w-[343px] h-[92px] bg-[#F3F4F6] pt-[16px] pl-[16px] rounded-[8px] mb-[12px]"
            title="Plazo"
            value={numberPeriods?.toString()}
            text="text-[14px] pl-[16px]"
            urlsvg={`${basePath}/images/Calendar.svg`}
        />
    <Card
            className="lg:w-[448px] h-[88px] sm:w-[343px] h-[92px] bg-[#F3F4F6] pt-[16px] pl-[16px] rounded-[8px] mb-[12px]"
            title="Tasa"
            value={rate?.toString()}
            text="text-[14px] pl-[16px]"
            urlsvg={`${basePath}/images/Charts.svg`}
        />
    <Card
            className="lg:w-[448px] h-[88px] sm:w-[343px] h-[92px] bg-[#F3F4F6] pt-[16px] pl-[16px] rounded-[8px] mb-[12px]"
            title="Seguro de vida"
            value={lifeInsurance?.toString()}
            text="text-[14px] pl-[16px]"
            urlsvg={`${basePath}/images/Insurage.svg`}
        />
        <Card
            className="lg:w-[448px] h-[88px] sm:w-[343px] h-[92px] bg-[#F3F4F6] pt-[16px] pl-[16px] rounded-[8px] mb-[12px]"
            title="Seguro de Incendio,Rayo y Terremoto"
            value={fireInsurance?.toString()}
            text="text-[14px] pl-[16px]"
            urlsvg={`${basePath}/images/Home.svg`}
        />
    
    </div>
);

export default ReviewSalary;