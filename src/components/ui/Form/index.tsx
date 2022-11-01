import React, { ClipboardEvent, KeyboardEvent, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Button from '../Button';
import Politicas from '../../commons/Politicas';
import CommercialAuthorization from '../../commons/CommercialAuthorization';
import Modal from '../Modal';
import Select from '../Select';
import Input from '../inputs';
import LogoForm from '../../svg/LogoForm';
import ReactHookFormSelect from '../Select/newSelect';
interface FormProps {
  onSubmit: (data: FormData) => void;
  defaultValues: FormData;
}
export interface FormData {
  document_number: string;
  document_type: string;
  policy_and_terms: number;
  commercial_terms: number;
  advisory_option: number;
  advisory: string;
}
export interface HowItemProps {
  children: string | JSX.Element;
  title: string;
  id: string;
}
export const RegisterForm: React.FC<FormProps> = ({ onSubmit, defaultValues }) => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    control,
    setValue,
    formState: { errors, isValid },
  } = useForm<FormData>({ mode: 'onChange' });

  const documentTypeValue = defaultValues.document_type;
  const documentType = watch('document_type', documentTypeValue);
  const documentNumber = watch('document_number');
  const [disabled, setDisable] = useState(false);
  const [disabledInput, setDisableInput] = useState(false);
  const [terminos, setTerminos] = useState(false);
  const [commercial, setCommercial] = useState(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showOptionsAdvisory, setshowOptionsAdvisory] = useState<boolean>(false);
  const [componentModal, setComponentModal] = useState<HowItemProps>({
    children: '',
    title: '',
    id: '',
  });

  const handleTerminos = () => {
    setTerminos(!terminos);
  };

  const handleCommercial = () => {
    setCommercial(!commercial);
  };
  const handleAdvisory = () => {
    setshowOptionsAdvisory(!showOptionsAdvisory);
  };

  useEffect(() => {
    if (!documentType || documentType === '1') {
      setDisableInput(true);
      return;
    }
    setDisableInput(false);
  }, [documentType]);

  useEffect(() => {
    if (!documentNumber || !documentType) {
      return;
    }
    if (documentNumber.includes('.') && documentNumber.length <= 5) {
      setDisable(false);
      return;
    }
    if (
      documentNumber.length > 4 &&
      documentNumber.match(/^[0-9]+$/) &&
      (documentType === 'CC' || documentType === 'CE')
    ) {
      setDisable(true);
    }
  }, [documentNumber, documentType]);

  return (
    <form
      id="form-login"
      onSubmit={handleSubmit(onSubmit)}
      className="w-full p-2 md:py-5 lg:p-4 bg-white"
      autoComplete="off"
    >
      <div className="text-left text-[28px] leading-[30px] text-primario-900 font-bold">
        <h2
          role="paragraph"
          className="sm:ml-[10px] md:ml-0 mt-[20px] md:mt-[0px] lg:mt-[20px] text-center text-[24px]  leading-[26px] lg:leading-[34px] lg:text-[32px] md:font-bold"
          tabIndex={0}
        >
          <span className="text-center"> Bienvenido a </span>
        </h2>
        <figure itemProp="logo" className="flex justify-center">
          <LogoForm />
        </figure>
      </div>

      <div className="text-gray-100">
        <div>
          <p className="text-center my-5">
            Para iniciar la solicitud de su crédito ingrese los siguientes datos.
          </p>
          <div className="w-full mt-3">
            <Select
              onChange={(e: any) => setValue('document_type', e.target.value)}
              placeholder="Tipo de documento"
              label="Tipo de documento"
              control={control}
              error={!!errors.document_type}
            >
              <option value="CC"> Cédula de ciudadanía</option>
              <option value="CE"> Cédula de extranjería</option>
            </Select>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <Controller
            rules={{ required: true, minLength: 5, maxLength: 10 }}
            render={({ field }) => {
              return (
                <Input
                  type="number"
                  error={!!errors.document_number}
                  onPaste={(e: ClipboardEvent<HTMLInputElement>) => {
                    e.preventDefault();
                  }}
                  value={field.value || ''}
                  tabIndex={0}
                  id="document_number"
                  inputMode="numeric"
                  maxLength={10}
                  required
                  label="Número de documento"
                  disabled={!!disabledInput}
                  onChange={(e: any) => {
                    if (field.value?.length === 10 && !!e.nativeEvent.data) {
                      setError('document_number', {
                        type: 'manual',
                        message: 'Máximo 10 caracteres permitidos',
                      });
                      e.preventDefault();
                      return;
                    }
                    if (field.value?.length === 9) {
                      setError('document_number', {
                        type: 'manual',
                        message: undefined,
                      });
                    }
                    field.onChange(e.target.value.replace(/[^0-9]/g, ''));
                  }}
                />
              );
            }}
            name="document_number"
            control={control}
          />
        </div>
      </div>

      <div className="mt-[28px] md:mt-[24px] lg:mt-[32px] ml-1 text-xs mb-[32px]">
        <div className="flex items-start ">
          <input
            {...register('policy_and_terms')}
            className="inline-block p-0 m-0  h-[18px] w-[18.6px] min-w-[18.6px] "
            type="checkbox"
            id="chk_policy_and_terms"
            checked={terminos}
            aria-checked={terminos}
            tabIndex={0}
            onChange={handleTerminos}
          />
          <label
            htmlFor="chk_policy_and_terms"
            className="inline-block font-normal text-black p-0 m-0 pl-[10px]"
            role="tabpanel"
            tabIndex={0}
            itemScope
            itemType="https://schema.org/Service"
          >
            Acepta{' '}
            <span
              className=" text-primario-20 cursor-pointer"
              id="modal-politics"
              role="link"
              aria-hidden="true"
              aria-expanded="true"
              tabIndex={0}
              onClick={() => {
                setShowModal(true);
                setComponentModal({
                  children: <Politicas />,
                  title: 'Tratamiento de datos personales',
                  id: 'modal-politics',
                });
              }}
              onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
                if (e.key === 'Enter') {
                  setShowModal(true);
                  setComponentModal({
                    children: <Politicas />,
                    title: 'Tratamiento de datos personales',
                    id: 'modal-politics',
                  });
                }
              }}
              itemProp="termsOfService"
            >
              tratamiento de datos personales y consulta en centrales de riesgo
            </span>
          </label>
        </div>
        <div className="flex items-start mt-4">
          <input
            {...register('commercial_terms')}
            className="inline-block p-0 m-0 h-[18px] w-[18.6px] min-w-[18.6px]"
            checked={commercial}
            aria-checked={commercial}
            tabIndex={0}
            type="checkbox"
            id="chk-terminos"
            onChange={handleCommercial}
          />
          <label
            htmlFor="chk-terminos"
            className="inline-block font-normal text-black p-0 m-0 pl-[10px]"
            role="tabpanel"
            tabIndex={0}
            itemScope
            itemType="https://schema.org/Service"
          >
            Autoriza que su información sea utilizada con{' '}
            <span
              className=" text-primario-20 cursor-pointer"
              id="modal-commercial"
              role="link"
              aria-hidden="true"
              aria-expanded="true"
              tabIndex={0}
              onClick={() => {
                setShowModal(true);
                setComponentModal({
                  children: <CommercialAuthorization />,
                  title:
                    'Autoriza que su información sea utilizada con fines comerciales',
                  id: 'modal-commercial',
                });
              }}
              onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
                if (e.key === 'Enter') {
                  setShowModal(true);
                  setComponentModal({
                    children: <CommercialAuthorization />,
                    title:
                      'Autoriza que su información sea utilizada con fines comerciales',
                    id: 'modal-commercial',
                  });
                }
              }}
              itemProp="termsOfService"
            >
              fines comerciales
            </span>
          </label>
        </div>
        <div className="flex items-start mt-4">
          <input
            {...register('advisory_option')}
            className="inline-block p-0 m-0 h-[18px] w-[18.6px] min-w-[18.6px]"
            checked={showOptionsAdvisory}
            aria-checked={showOptionsAdvisory}
            tabIndex={0}
            type="checkbox"
            id="chk-advisory"
            onChange={handleAdvisory}
          />
          <label
            htmlFor="chk-advisory"
            className="inline-block font-normal text-black p-0 m-0 pl-[10px]"
            role="tabpanel"
            tabIndex={0}
            itemScope
          >
            Recibió asesoría en este proceso
          </label>
        </div>

        {showModal && (
          <Modal
            showModal={showModal}
            onClose={() => setShowModal(false)}
            compont={componentModal}
          />
        )}
      </div>

      {showOptionsAdvisory && (
        <div className="w-full my-4">
          <Select
            label="Tipo de asesoría"
            placeholder="Tipo de asesoría"
            onChange={(e: any) => setValue('advisory', e.target.value)}
          >
            <option value="Campaign">Campaña</option>
            <option value="bank_advisor">Asesor banco</option>
            <option value="builder">Constructora</option>
          </Select>
        </div>
      )}
      <div className="flex justify-center items-center lg:px-[20px]  md:mb-0 lg:mb-5 ">
        <Button
          isLanding="w-full xs:w-[288px] xs:max-w-[288px]  sm:w-[311px]  sm:max-w-[311px] md:w-[311px] md:max-w-[311px] lg:w-[375px] lg:max-w-[375px]"
          type="submit"
          name="abrirCuenta"
          data-testid="btn-openAccount1"
          tabIndex={0}
          disabled={
            !terminos || (!errors.document_number?.message && !isValid) || !disabled
          }
          id="btn-next"
        >
          Iniciar
        </Button>
      </div>
    </form>
  );
};
