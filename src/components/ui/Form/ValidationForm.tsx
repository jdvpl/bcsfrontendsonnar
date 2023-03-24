import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import FormContainer from './FormContainer';
import Heading from '../Headers';
import ContainerButtonForm from './ContainerButtonForm';
import Button from '../Button';
import NewAutoComplete from '../inputs/newAutoComplete';

export interface FormProps {
  onSubmit: (data: Record<string, string>[] | undefined) => void;

  questions: Question[];
}

export interface Question {
  key: string;
  description: string;
  type: 'CLOSED-QUESTION' | 'OPEN-QUESTION';
  options?: Answer[];
}

interface Answer {
  id: string;
  option: string;
}

export interface FormDataQuestions {
  question1: string;
  question2: string;
}

export const ValidationForm: React.FC<FormProps> = ({ questions, onSubmit }) => {
  const [current, setCurrent] = useState(0);
  const [response, setResponse] = useState<Record<string, string>[]>();
  const {
    handleSubmit,
    watch,
    setValue,
    control,
    formState: { isValid },
  } = useForm<any>({
    mode: 'onChange',
  });
  const inputValues = watch();

  const variants = {
    hidden: { opacity: 1, x: 350, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0 },
  };
  useEffect(() => {
    if (Object.values(inputValues).length === 2) {
      onSubmit(response);
    }
  }, [response]);

  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: 'linear' }}
      key={current}
      className="h-full"
    >
      <section>
        <form
          data-testid="validationForm"
          id="two-questions-form"
          onSubmit={handleSubmit(onSubmit)}
          className="w-full pb-4 "
        >
          {questions?.map((question, index) => {
            if (index === current) {
              return (
                <div itemScope itemType="https://schema.org/Person" key={question.key}>
                  <Heading>
                    <span itemProp="relatedTo" id={`question-${question.key}`}>
                      {question.description}
                    </span>
                  </Heading>
                  <FormContainer>
                    <div className="w-full md:w-[348px] lg:w-[448px] space-y-[12px]">
                      {question.type === 'CLOSED-QUESTION' &&
                        question.options &&
                        question?.options.map((answer) => (
                          <div
                            id={`answer-${answer.id}`}
                            key={answer.id}
                            role="tabpanel"
                            tabIndex={0}
                          >
                            <input type="radio" value={answer.id} className="hidden" />
                            <label
                              htmlFor="tax-yes"
                              className="font-montserratRegular flex items-center cursor-pointer bg-white w-full border border-azul_gris-80 focus:shadow-none focus:border-primario-600 focus:text-primario-600 hover:border-azul_gris-40 text-black  font-semibold rounded-md px-5 py-[17px] shadow-small-300 overflow-auto"
                              onClick={() => {
                                setValue(`${question.key}`, answer.id);
                                if (questions.length - 1 !== index) {
                                  setCurrent(index + 1);
                                }
                                if (!response) {
                                  setResponse([
                                    { item: question.key, option: answer.id },
                                  ]);
                                  return;
                                }
                                setResponse(
                                  response?.concat({
                                    item: question.key,
                                    option: answer.id,
                                  })
                                );
                              }}
                              title={answer.option}
                            >
                              <span itemProp="relatedTo" className="hidden" />
                              {answer.option}
                            </label>
                          </div>
                        ))}
                      {question.type === 'OPEN-QUESTION' && (
                        <div id={`question-${question.key}`}>
                          <Controller
                            control={control}
                            name="city"
                            rules={{ required: true }}
                            defaultValue={undefined}
                            render={({ field: { onChange } }) => (
                              <NewAutoComplete
                                id="city-exp"
                                defaultValue={undefined}
                                placeholder="Lugar de expedición"
                                label="Lugar de expedición"
                                onChange={(e: any) => {
                                  if (e?.id) {
                                    return onChange({ item: question.key, option: e.id });
                                  }
                                  return onChange(undefined);
                                }}
                                zIndex={30}
                              />
                            )}
                          />
                          <ContainerButtonForm>
                            <Button
                              disabled={!isValid}
                              onClick={() => {
                                setResponse(
                                  response?.concat({
                                    item: inputValues.city.item,
                                    option: inputValues.city.option,
                                  })
                                );
                              }}
                              name="btn-save-data"
                              id="btn-save-data"
                            >
                              Continuar
                            </Button>
                          </ContainerButtonForm>
                        </div>
                      )}
                    </div>
                  </FormContainer>
                </div>
              );
            }
            return null;
          })}
        </form>
      </section>
    </motion.div>
  );
};
