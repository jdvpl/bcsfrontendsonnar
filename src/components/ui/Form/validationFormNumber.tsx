import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import Button from '../Button';
import { FormContainer } from './FormContainer';
import { Heading } from '../Headers';
import { useSessionStorage } from '../../../hooks/useSessionStorage';
import { ContainerButtonForm } from './ContainerButtonForm';
import { SesionStorageKeys } from '../../../session';
import { sendNumber } from '../../../services';
import { routes } from '../../../routes';

interface FormProps {
  isLoading?: boolean;
  defaultValues?: string;
  questions: Question;
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
const KEY = process.env.KEYENCRYPTADIGITAL;

export const ValidationFormNumber: React.FC<FormProps> = ({ questions }) => {
  const [dataTU, setDataTU] = useSessionStorage(SesionStorageKeys.dataUser.key, '');
  const [, setEncript] = useSessionStorage(SesionStorageKeys.dataTuEncripPhone.key, '');
  const [, setProcessBiometry] = useSessionStorage(
    SesionStorageKeys.dataProcessBiometry.key,
    ''
  );

  const [loaded, setLoaded] = useState(false);
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

  const proccessResponse = (redirect: string) => {
    setLoaded(true);
    setTimeout(() => router.push(redirect), 1000);
  };

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

  const onSubmit = async (formData: FormData) => {
    const body = {
      document_type: dataTU?.document_type,
      document_number: dataTU?.document_number,
      phone: formData.number,
    };
    const response = await sendNumber(body);
    if (!response.error) {
      setDataTU({
        ...dataTU,
        personalData: {
          celular: response.response.data.phone,
          phoneNumber: formData.number,
        },
      });
      setEncript(formData.number);
      setTimeout(() => proccessResponse(routes.otp), 1000);
    } else {
      if (response.status === 403) {
        const code = response.response.internal_code;
        switch (code) {
          case 'VQ-01':
            router.push('/');
            break;
          case 'VQ-03':
            router.push('/validacion-biometrica/');
            break;
          case 'PF-00':
            router.push('/validacion/error-validacionIdentidad/');
            break;
          case 'PF-02':
            router.push('/validacion/error-validacionSucursal');
            break;
          case 'PF-03':
            setProcessBiometry('no');
            router.push('/validacion-biometrica/');
            break;
          default:
            router.push('/validacion-biometrica/');
            break;
        }
      } else {
        router.push('/validacion/error/');
      }
    }
  };
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: 'linear' }}
    >
      <section itemScope itemType="https://schema.org/Person">
        <form
          data-testid="formNumber"
          className="w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Heading>
            <span itemProp="telephone" tabIndex={0} role="paragraph" id="title">
              {questions?.description}
            </span>
          </Heading>
          <FormContainer>
            <div className="w-full md:w-[348px] lg:w-[448px]">
              <div
                id="alert-info"
                className="flex bg-blue-claro py-[6px] px-[9px] rounded mb-3"
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
                <p
                  tabIndex={0}
                  role="paragraph"
                  className="ml-[10px] ln-14 fz-12 text-[#2F6EAE]"
                >
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
                  >
                    <input
                      {...register('number')}
                      type="radio"
                      value={answer.id}
                      className="hidden"
                    />
                    <label
                      tabIndex={0}
                      role="paragraph"
                      aria-hidden="true"
                      htmlFor="number"
                      className={`flex items-center bg-white cursor-pointer  w-full border  rounded-md px-5 py-[17px]
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
                      <span
                        itemProp="telephone"
                        tabIndex={0}
                        role="paragraph"
                        className="hidden"
                      />
                      {answer.option}
                    </label>
                  </div>
                ))}
            </div>
            <ContainerButtonForm>
              <Button
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
