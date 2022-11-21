import Card from './Card';
import { basePath } from '../../../../next.config';
import { ToolTipInfo } from '../../../components/ui/Tooltip';
import { InfoIco } from '../Tooltip/info';

interface ReviewHouseProps {
  financedValue: string;
  fireInsurance?: string;
  lifeInsurance?: string ;
  monthlyCoute: string;
  monthlyCouteInsurance?: string;
  termFinance: string;
  rate: string;
}
const fetchresumen = () => alert("No hay resumen aun, no molesten")
export const ReviewHouse: React.FC<ReviewHouseProps> = ({
  financedValue,
  fireInsurance,
  lifeInsurance,
  monthlyCoute,      
  monthlyCouteInsurance,
  termFinance,
  rate,
}) => (
  <div className="flex flex-col items-center ">
    { lifeInsurance ?
    <Card
    className="xs:w-[290px] sm:w-[343px] md:w-[448px]  h-[88px]  bg-[#C4D1DA]  mb-[16px] font-semibold rounded-[8px]"
    title="Couta mensual total con seguros"
    value={monthlyCouteInsurance?.toString()} 
    text="text-[32px] pl-[23px] pt-2 flex items-baseline" 
    urlsvg=''
    classtitle="h-[18px] pt-[16px] text-[16px]"
    subvalue='pesos'
    textsub='30'
    tooltiptext=''
  />:null
    }
  {!lifeInsurance ?
   <Card
   className="xs:w-[290px] sm:w-[343px] md:w-[448px]  h-[88px]  bg-[#C4D1DA]  mb-[16px] font-semibold rounded-[8px]"
   title="Couta mensual sin seguros"
   value={monthlyCoute?.toString()} 
   text="text-[32px] pl-[23px] pt-2 flex items-baseline" 
   urlsvg=''
   classtitle="h-[18px] pt-[16px] text-[16px]"
   subvalue='pesos'
   textsub='30'
   tooltiptext=''
 />:null
  }
    
    <Card
      className="xs:w-[290px] sm:w-[343px] md:w-[448px]  h-[76px]   bg-[#F3F4F6] pt-[16px] pl-[16px] rounded-[8px] mb-[12px]"
      title="Valor financiado apróximado"
      value={financedValue?.toString()}
      text="text-[20px] pl-[18px] font-semibold flex items-baseline"
      urlsvg={`${basePath}/images/Money.svg`}
      classtitle="h-[18px] text-[14px]"
      subvalue='pesos'
      textsub='20'
      tooltiptext=''
    />
    <Card
      className="xs:w-[290px] sm:w-[343px] md:w-[448px]  h-[76px]  bg-[#F3F4F6] pt-[16px] pl-[16px] rounded-[8px] mb-[12px]"
      title="Plazo"
<<<<<<< HEAD
      value={termFinance?.toString()}
=======
      value={numberPeriods?.toString()+' Años'}
>>>>>>> b3b487cb20eeefa6c950369d3eb2b89e076dd641
      text="text-[20px] pl-[18px] font-semibold"
      urlsvg={`${basePath}/images/Calendar.svg`}
      classtitle="h-[14px] text-[14px]"
      tooltiptext=''
    />
    <Card
      className="xs:w-[290px] sm:w-[343px] md:w-[448px]  h-[76px]    bg-[#F3F4F6] pt-[16px] pl-[16px] rounded-[8px] mb-[12px]"
      title="Tasa"
      value={rate}
      text="text-[20px] pl-[18px] font-semibold"
      urlsvg={`${basePath}/images/Charts.svg`}
      classtitle="h-[14px] text-[14px]"
      tooltip={true}
      tooltiptext={<p className='text-white'>La tasa de interés es el precio que se debe pagar por utilizar una cantidad de dinero durante un tiempo determinado.<br/>
        <p className='flex text-white'><p className='font-bold text-white'>Tasa %MV:</p>Tasa nóminal mes vencido</p>
        <p className='flex text-white'><p className='font-bold text-white'>Tasa EA:</p>Tasa efectiva anual</p>
        </p>
        }
    />
    {lifeInsurance ? 
    <Card
    className="xs:w-[290px] sm:w-[343px] md:w-[448px]  h-[76px]   bg-[#F3F4F6] pt-[16px] pl-[16px] rounded-[8px] mb-[12px]"
      title="Couta mensual sin seguros"
      value={monthlyCoute?.toString()}
      text="text-[20px] pl-[18px] font-semibold flex items-baseline"
      urlsvg={`${basePath}/images/Money.svg`}
      classtitle="h-[18px] text-[14px]"
      subvalue='pesos'
      textsub='20'
      tooltiptext=''
  />:null
  }
    {
      lifeInsurance ?
      <Card
      className="xs:w-[290px] sm:w-[343px] md:w-[448px]  h-[76px]    bg-[#F3F4F6] pt-[16px] pl-[16px] rounded-[8px] mb-[12px]"
      title="Seguro de vida"
      value={lifeInsurance?.toString()}
      text="text-[20px] pl-[18px] font-semibold"
      urlsvg={`${basePath}/images/Insurage.svg`}
      classtitle="h-[14px] text-[14px]"
      tooltip={true}
      tooltiptext={<p className='flex text-white'>Seguro diseñado para proteger a sus asegurados en caso de presentarse  muerte, incapacidad total y permanente, y demás riesgos previstos en la póliza. </p>}
    />:null
    }
    {
      fireInsurance ?
      <Card
      className="xs:w-[290px] sm:w-[343px] md:w-[448px]  h-[76px]   bg-[#F3F4F6] pt-[16px] pl-[16px] rounded-[8px] mb-[12px]"
      title="Seguro de Incendio,Rayo y Terremoto"
      value={fireInsurance?.toString()}
      text="text-[20px] pl-[18px] font-semibold"
      urlsvg={`${basePath}/images/Home.svg`}
      classtitle="h-[14px] text-[14px]"
      tooltip={true}
      tooltiptext={<p className='flex text-white'>Seguro diseñado para proteger a sus asegurados en caso de presentarse  muerte, incapacidad total y permanente, y demás riesgos previstos en la póliza. </p>}
    />:null
    }
    
    <div className='xs:w-[290px] sm:w-[343px] md:w-[448px] flex justify-end mb-[12px]'>
          <a className='pr-[8px] pt-[5px] pb-[5px]'>Descargar simulación</a>
          <img className="hover:cursor-pointer" onClick={fetchresumen} src={`${basePath}/images/Frame.svg`}/>
    </div>
  </div>
);

export default ReviewHouse;
