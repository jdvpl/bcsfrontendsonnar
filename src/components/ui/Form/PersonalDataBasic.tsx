import { MenuItem } from '@mui/material';
import React, {
  ClipboardEvent,
  useEffect,
  FC
} from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useSessionStorage } from '../../../hooks/useSessionStorage';
import { iPersonalData } from '../../../interfaces/dataUserBasic';
import { days, months } from '../../../lib/dates';
import { SesionStorageKeys } from '../../../session';
import Button from '../Button';
import Input from '../inputs';
import NewAutoComplete from '../inputs/newAutoComplete';
import ReactHookFormSelect from '../Select/newSelect';
import { routes } from '../../../routes'

function PersonalDataBasic({ userInfo }: any) {
  const router = useRouter();
  const {
    handleSubmit,
    watch,
    setError,
    clearErrors,
    control,
    setValue,
    register,
    formState: { errors, isValid },
  } = useForm<iPersonalData>({ mode: 'onChange' });
  const [, setDataUser] = useSessionStorage(
    SesionStorageKeys.dataBasicData.key,
    {}
  );
  const onSubmit = async (data: iPersonalData) => {
    const birthDate = `${data.yearDt}-${data.monthDt}-${data.dayDt}`;
    const birthCity = data.birthCity?.option;
    const currentCity = data.currentCity?.option;

    const dataSend = { birthDate, birthCity, currentCity, phone: data.phone, gender: data.gender, currentAddress: data.currentAddress, email: data.email }
    setDataUser(dataSend);
    router.push(routes.sarlaft)
  }
  const date = userInfo.birthDt.split('-');
  useEffect(() => {
    setValue('yearDt', date[0]);
    setValue('monthDt', date[1]);
    setValue('dayDt', date[2]);
    setValue('phone', userInfo.cellPhone)
    setValue('email', userInfo.emailAddr)
    setValue('currentAddress', userInfo.addr1)
  }, [date])

  // useValidateAge(day, month, year, clearErrors, setError);

  return (
    <div data-testid="FormQuotaTest" className="w-[343px] md:w-[517px] xl:w-[656px] mx-auto">
      <div className="w-full mt-3">
        <form onSubmit={handleSubmit(onSubmit)} data-testid="personaldataTest">
          <div className="mt-4 grid gap-2">
            <span className="text-[10px] col-span-6 text-complementario-100">
              Fecha de nacimiento:
            </span>
            <ReactHookFormSelect
              className="col-span-2"
              onChange={(e: any) => setValue('dayDt', e.target.value)}
              placeholder="Dia"
              label="Dia"
              defaultValue=""
              control={control}
              left="right4"
              valueLength=""
              name="dayDt"
              margin="normal"
              rules={{ required: true }}
            >
              {days?.map((element, i) => (
                <MenuItem value={element?.number} key={i}>
                  {element?.day}
                </MenuItem>
              ))}
            </ReactHookFormSelect>

            <ReactHookFormSelect
              onChange={(e: any) => setValue('monthDt', e.target.value)}
              placeholder="Mes"
              label="Mes"
              defaultValue=""
              control={control}
              left="right4"
              name="monthDt"
              className="col-span-2"
              margin="normal"
              rules={{ required: true }}
            >
              {months.map((element, i) => (
                <MenuItem value={element.number} key={i}>
                  {element.month}
                </MenuItem>
              ))}
            </ReactHookFormSelect>

            <Controller
              name="yearDt"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  containerClassName="col-span-2"
                  type="text"
                  onChange={(e) => {
                    field.onChange(e.target.value);
                  }}
                  error={!!errors.dayDt}
                  helperText={errors?.dayDt?.message}
                  value={field.value}
                  tabIndex={0}
                  id="yearDt"
                  data-testid="yearDtTest"
                  inputMode="numeric"
                  maxLength={4}
                  label="Año"
                />
              )}
            />
          </div>

          <div className="w-full mt-4">
            <Controller
              control={control}
              name="birthCity"
              rules={{ required: true }}
              defaultValue={undefined}
              render={({ field: { onChange } }) => (
                <NewAutoComplete
                  id="birthCity"
                  defaultValue={undefined}
                  placeholder="Lugar de nacimiento"
                  label="Lugar de nacimiento"
                  onChange={(e: any) => {
                    if (e?.id) {
                      return onChange({ item: e.name, option: e.id });
                    }
                    return onChange(undefined);
                  }}
                  zIndex={30}
                />
              )}
            />
          </div>
          <div className="w-full mt-4">
            <ReactHookFormSelect
              onChange={(e: any) => {
                setValue('gender', e.target.value);
              }}
              placeholder="Género"
              label="Género"
              error={!!errors.gender}
              control={control}
              left="right4"
              dataTestId="genderTest"
              name="gender"
              className="w-100"
              margin="normal"
            >
              <MenuItem value="female">Femenino</MenuItem>
              <MenuItem value="male">Masculino</MenuItem>
            </ReactHookFormSelect>
          </div>
          {userInfo.isClient ? null : (
            <>
              <div className="flex flex-col mt-4">
                <Controller
                  rules={{ required: !userInfo.cellPhone }}
                  render={({ field }) => (
                    <Input
                      helperText="Debe inicar con 3  y un máximo de 10 caracteres"
                      helperTextOption
                      type="text"
                      error={!!errors.phone}
                      onPaste={(e: ClipboardEvent<HTMLInputElement>) => {
                        e.preventDefault();
                      }}
                      value={field.value}
                      defaultValue={field.value}
                      tabIndex={0}
                      disabled={!!userInfo.cellPhone}
                      id="phone"
                      data-testid="phoneTest"
                      inputMode="text"
                      placeholder='Número de celular'
                      label="Número de celular"
                      onChange={(e: any) => setValue('phone', e.target.value)}
                    />
                  )}
                  name="phone"
                  control={control}
                />
              </div>
              <div className="flex flex-col mt-4">
                <Controller
                  rules={{ required: !userInfo.emailAddr }}
                  render={({ field }) => (
                    <Input
                      helperText="Ejemplo: correo@dominio.com"
                      helperTextOption
                      type="email"
                      disabled={!!userInfo.emailAddr}
                      error={!!errors.email}
                      onPaste={(e: ClipboardEvent<HTMLInputElement>) => {
                        e.preventDefault();
                      }}
                      value={field.value}
                      tabIndex={0}
                      id="email"
                      data-testid="emailTest"

                      inputMode="email"
                      placeholder='Correo electrónico'
                      label="Correo electrónico"
                      onChange={(e: any) => setValue('email', e.target.value)}
                    />
                  )}
                  name="email"
                  control={control}
                />
              </div>
            </>
          )}

          <div className="w-full mt-4">
            <Controller
              control={control}
              name="currentCity"
              rules={{ required: true }}
              defaultValue={undefined}
              render={({ field: { onChange } }) => (
                <NewAutoComplete
                  id="currentCity"
                  defaultValue={undefined}
                  label="Ciudad de residencia"
                  onChange={(e: any) => {
                    if (e?.id) {
                      return onChange({ item: e.name, option: e.id });
                    }
                    return onChange(undefined);
                  }}
                  zIndex={30}
                />
              )}
            />
          </div>
          <div className="flex flex-col mt-4">
            <Controller
              rules={{ required: !userInfo.addr1 }}
              render={({ field }) => (
                <Input
                  type="text"
                  startIcon='bcs-location'
                  error={!!errors.email}
                  onPaste={(e: ClipboardEvent<HTMLInputElement>) => {
                    e.preventDefault();
                  }}
                  value={field.value}
                  tabIndex={0}
                  id="currentAddress"
                  data-testid="currentAddres"
                  inputMode="text"
                  placeholder='Dirección de vivienda actual'
                  label="Dirección de vivienda actual"
                  onChange={(e: any) => setValue('currentAddress', e.target.value)}
                />
              )}
              name="currentAddress"
              control={control}
            />
          </div>
          <div className="flex justify-center items-center lg:px-[20px]  md:mb-0 lg:mb-5 mt-10">
            <Button
              isLanding="w-full xs:w-[288px] sm:w-[343px] md:w-[343px] lg:w-[375px]"
              type="submit"
              name="openQuotaSimulation"
              className="mb-10"
              data-testid="btnBasicDataTest"
              tabIndex={0}
              disabled={!(isValid && Object.entries(errors).length === 0)}
              id="btn-next"
            >
              Continuar
            </Button>
          </div>
        </form>
      </div >
    </div >
  );
}

export default PersonalDataBasic;
