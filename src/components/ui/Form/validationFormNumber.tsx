import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import Button from '../Button';
import FormContainer from './FormContainer';
import Heading from '../Headers';
import { useSessionStorage } from '../../../hooks/useSessionStorage';
import ContainerButtonForm from './ContainerButtonForm';
import { SesionStorageKeys } from '../../../session';
import useValidationFormNumber from '../../../hooks/useValidationFormNumber';
import SimulatorLoader from '../Loaders/SimulatorLoader';

interface FormProps {
  isLoading?: boolean;
  defaultValues?: string;
  questions: Question;
  setCurrentRouting: any;
}
export interface Question {
  description: string;
  options: Answer[];
}
interface Answer {
  id: string | number;
  option: string;
}
export interface FormData {
  number: number | string;
}

export const ValidationFormNumber: React.FC<FormProps> = ({
  questions,
  setCurrentRouting,
}) => {
  const [dataTU, setDataTU] = useSessionStorage(SesionStorageKeys.dataUser.key, '');
  const [dataQuestions] = useSessionStorage(SesionStorageKeys.DataQuestions.key, '');
  const [, setEncript] = useSessionStorage(SesionStorageKeys.dataTuEncripPhone.key, '');
  const [, setProcessBiometry] = useSessionStorage(
    SesionStorageKeys.dataProcessBiometry.key,
    ''
  );
  const [, setLoaded] = useState(false);
  const [isLoadingForm, setIsLoadingForm] = useState(false);
  const router = useRouter();
  const {
    handleSubmit,
    watch,
    register,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onChange',
  });
  const inputValues = watch('number');

  const variants = {
    hidden: { opacity: 1, x: 350, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0 },
  };

  useEffect(() => {
    if (!inputValues) {
      setError('number', { message: 'asdasd' });
      return;
    }
    clearErrors('number');
  }, [clearErrors, inputValues, setError]);

  const { onSubmit } = useValidationFormNumber(
    dataTU,
    setDataTU,
    setEncript,
    setLoaded,
    router,
    setProcessBiometry,
    dataQuestions,
    setCurrentRouting
  );
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: 'linear' }}
    >
      {isLoadingForm && (
        <div className="absolute z-[100] top-0 left-0 w-full h-screen flex justify-center items-center bg-primario-100">
          <SimulatorLoader />
        </div>
      )}
      <section itemScope itemType="https://schema.org/Person">
        <form
          data-testid="formNumber"
          className="w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Heading>
            <span itemProp="telephone" id="title">
              {questions?.description}
            </span>
          </Heading>
          <FormContainer>
            <div className="w-full md:w-[348px] lg:w-[448px]">
              <div
                id="alert-info"
                className="flex bg-blue-claro py-[6px] px-[9px] rounded mb-3"
                role="tabpanel"
                tabIndex={0}
              >
                <div className="ml-[3px]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="8" cy="8" r="8" fill="#2F6EAE" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.80553 11.2929H8.33382V6.66131H6.80553C6.58019 6.66131 6.40039 6.48151 6.40039 6.30171C6.40039 6.07756 6.58019 5.89777 6.80553 5.89777H8.73896C8.91876 5.89777 9.09856 6.07756 9.09856 6.30171V11.2929H10.6268C10.8522 11.2929 11.032 11.4283 11.032 11.6525C11.032 11.8778 10.8522 12.0576 10.6268 12.0576H6.80553C6.58019 12.0576 6.40039 11.8778 6.40039 11.6525C6.40039 11.4283 6.58019 11.2929 6.80553 11.2929Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.33321 5.13313C7.79382 5.13313 7.38867 4.68364 7.38867 4.14424C7.38867 3.6492 7.79382 3.19971 8.33321 3.19971C8.8726 3.19971 9.3221 3.6492 9.3221 4.14424C9.3221 4.68364 8.8726 5.13313 8.33321 5.13313Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <p className="ml-[10px] ln-14 fz-12 text-[#2F6EAE]">
                  Asegúrese de tener su celular a la mano para poder recibir el código de
                  confirmación
                </p>
              </div>
              {questions?.options &&
                questions?.options.map((answer) => (
                  <div
                    className="space-y-[12px]"
                    id={`answer-${answer.id}`}
                    key={answer.id}
                    role="tabpanel"
                    tabIndex={0}
                  >
                    <input
                      {...register('number')}
                      type="radio"
                      value={answer.id}
                      className="hidden"
                    />
                    <label
                      aria-hidden="true"
                      htmlFor="number"
                      className={`font-montserratRegular flex items-center bg-white cursor-pointer  w-full border  rounded-md px-5 py-[17px]
                        border-azul_gris-80 focus:shadow-none focus:border-primario-600 focus:text-primario-600 hover:border-azul_gris-40 text-black  shadow-small-300  font-semibold
                        ${
                          answer.id === inputValues
                            ? 'shadow-none border-primario-600 text-primario-600'
                            : ''
                        }`}
                      onClick={() => {
                        setValue(`number`, answer.id);
                        setDataTU({
                          ...dataTU,
                          encriptPhone: { encriptPhone: answer.option },
                        });
                      }}
                    >
                      <span itemProp="telephone" className="hidden" />
                      {answer.option}
                    </label>
                  </div>
                ))}
            </div>
            <ContainerButtonForm>
              <Button
                onClick={() => setIsLoadingForm(true)}
                isLoading={!!errors?.number?.message}
                type="submit"
                name="btn-send-phone"
                id="btn-send-phone"
                tabIndex={0}
              >
                Continuar
              </Button>
            </ContainerButtonForm>
          </FormContainer>
        </form>
      </section>
    </motion.div>
  );
};
