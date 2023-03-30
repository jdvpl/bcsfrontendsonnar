import React, { ClipboardEvent, KeyboardEvent, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { MenuItem } from '@mui/material';
import Button from '../Button';
import Politicas from '../../commons/Politicas';
import CommercialAuthorization from '../../commons/CommercialAuthorization';
import Modal from '../Modal';
import Input from '../inputs';
import LogoForm from '../../svg/LogoForm';
import ReactHookFormSelect from '../Select/newSelect';
import Typography from '../Typography';
import useMediaQueryResponsive from '../../../hooks/useMediaQuery';

interface FormProps {
  onSubmit: (data: FormData) => void;
  defaultValues: FormData;
}
export interface FormData {
  document_number: string;
  document_type: string;
  policy_and_terms: boolean;
  commercial_terms: boolean;
}
export interface HowItemProps {
  children: string | JSX.Element;
  title: string | JSX.Element;
  id: string;
  heightModal?: string;
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
  const [disabledInput, setDisableInput] = useState(true);
  const [terminos, setTerminos] = useState(true);
  const [commercial, setCommercial] = useState(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [componentModal, setComponentModal] = useState<HowItemProps>({
    children: '',
    title: '',
    id: '',
    heightModal: '',
  });

  const handleTerminos = () => {
    setTerminos(!terminos);
  };

  const handleCommercial = () => {
    setCommercial(!commercial);
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
  const { heightHeader } = useMediaQueryResponsive();

  return (
    <form
      id="form-login"
      onSubmit={handleSubmit(onSubmit)}
      className="w-full p-2 md:py-5 lg:p-4 bg-white "
      autoComplete="off"
    >
      <Typography
        componentHTML="h2"
        variant="h2"
        typeFont="Bold"
        className="text-center text-primario-900  "
      >
        Bienvenido a
      </Typography>
      <figure
        itemProp="logo"
        className="flex justify-center lg:w-[300px] md:w-[240px] w-[250px] m-auto mt-4"
      >
        <LogoForm height={heightHeader} />
      </figure>

      <div className="text-gray-100">
        <div>
          <Typography
            variant="bodyM3"
            typeFont="Regular"
            componentHTML="h1"
            className="m-auto text-center mb-[36px] lg:mt-[24px] md:mt-[10px] text-[18px] text-primario-900 sm:w-[306px]  md:w-[311px] lg:w-[350px]"
          >
            Para iniciar la solicitud de su crédito ingrese los siguientes datos.
          </Typography>
          <div className="w-full mt-3 lg:w-[448px] m-auto">
            <ReactHookFormSelect
              onChange={(e: any) => setValue('document_type', e.target.value)}
              placeholder="Tipo de documento"
              label="Tipo de documento"
              error={!!errors.document_type}
              defaultValue=""
              control={control}
              left="right4"
              valueLength=""
              name="document_type"
              className="w-100"
              margin="normal"
            >
              <MenuItem value="CC">Cédula de ciudadanía</MenuItem>
              <MenuItem value="CE">Cédula de extranjería</MenuItem>
            </ReactHookFormSelect>
          </div>
        </div>
        <div className="flex flex-col mt-4 lg:w-[448px] m-auto">
          <Controller
            rules={{ required: true, minLength: 5, maxLength: 10 }}
            render={({ field }) => (
              <Input
                helperText="Número incorrecto"
                type="text"
                error={!!errors.document_number}
                onPaste={(e: ClipboardEvent<HTMLInputElement>) => {
                  e.preventDefault();
                }}
                dataTestId="inputDocument"
                value={field.value || ''}
                tabIndex={0}
                id="document_number"
                inputMode="numeric"
                required
                label="Número de documento"
                disabled={disabledInput}
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
            )}
            name="document_number"
            control={control}
          />
        </div>
      </div>

      <div className="mt-[28px] md:mt-[24px] lg:mt-[32px] ml-1 text-xs mb-[32px] ">
        <div className="flex items-start lg:w-[448px] m-auto">
          <input
            {...register('policy_and_terms')}
            className="inline-block p-0 m-0  h-[18px] w-[18.6px] min-w-[18.6px] "
            type="checkbox"
            id="chk_policy_and_terms"
            data-testid="chk_policy_and_terms"
            checked={terminos}
            aria-checked={terminos}
            onChange={handleTerminos}
          />
          <Typography
            variant="caption2"
            componentHTML="label"
            typeFont="Regular"
            htmlFor="chk_policy_and_terms"
            className="inline-block font-normal text-primario-900 p-0 m-0 pl-[10px]  cursor-pointer"
            itemScope
            itemType="https://schema.org/Service"
          >
            Acepta{' '}
            <Typography
              componentHTML="span"
              variant="caption2"
              className=" text-primario-20 cursor-pointer"
              id="modal-politics"
              role="link"
              tabIndex={0}
              data-testid="politicsTestSpan"
              onClick={() => {
                setShowModal(true);
                setComponentModal({
                  children: <Politicas />,
                  title: 'Tratamiento de datos personales',
                  id: 'modal-politics',
                });
              }}
              onKeyDownCapture={(e: KeyboardEvent<HTMLInputElement>) => {
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
            </Typography>
          </Typography>
        </div>
        <div className="flex items-start mt-4 lg:w-[448px] m-auto">
          <input
            {...register('commercial_terms')}
            className="inline-block p-0 m-0 h-[18px] w-[18.6px] min-w-[18.6px]"
            checked={commercial}
            aria-checked={commercial}
            type="checkbox"
            id="chk-terminos"
            data-testid="chkterminos"
            onChange={handleCommercial}
          />
          <label
            htmlFor="chk-terminos"
            className="inline-block font-normal text-primario-900 p-0 m-0 pl-[10px] font-montserratRegular cursor-pointer"
            itemScope
            itemType="https://schema.org/Service"
          >
            Autoriza que su información sea utilizada con{' '}
            <span
              className=" text-primario-20 cursor-pointer"
              id="modal-commercial"
              role="link"
              data-testid="commercialTermsTest"
              tabIndex={0}
              onClick={() => {
                setShowModal(true);
                setComponentModal({
                  children: <CommercialAuthorization />,
                  title: (
                    <span className="font-poppinsSemiBold">
                      Autoriza que su información sea utilizada con fines comerciales
                    </span>
                  ),
                  id: 'modal-commercial',
                  heightModal: 'lg:h-[50%]',
                });
              }}
              onKeyDownCapture={(e: KeyboardEvent<HTMLInputElement>) => {
                if (e.key === 'Enter') {
                  setShowModal(true);
                  setComponentModal({
                    children: <CommercialAuthorization />,
                    title: (
                      <span className="font-poppinsSemiBold">
                        Autoriza que su información sea utilizada con fines comerciales
                      </span>
                    ),
                    id: 'modal-commercial',
                    heightModal: 'lg:h-[50%]',
                  });
                }
              }}
              itemProp="termsOfService"
            >
              fines comerciales
            </span>
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

      <div className="flex justify-center items-center lg:px-[20px]  md:mb-0 lg:mb-5 ">
        <Button
          isLanding="w-full xs:w-[288px] sm:w-[343px]  md:w-[343px] lg:w-[375px]"
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
