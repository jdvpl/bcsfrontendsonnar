import { MenuItem } from '@mui/material';
import React, { ClipboardEvent, useState } from 'react';
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
import { HelperText } from '../inputs/HelperText';
import OfficeBranch from '../../commons/OfficeBranch';
import ExitModal from '../../commons/ExitModal';
import Modal from '../Modal';
import usePersonalData from '../../../hooks/usePersonalData';
import { getCityById, validateAddress } from '../../../utils';
import { useBackDetector } from '../../../hooks/useBackDetector';
import useProtectedRoutes from '../../../hooks/useProtectedRoutes';
import Typography from '../Typography';

function PersonalDataBasic({ userInfo }: any) {
  const router = useRouter();

  const { setCurrentRouting } = useProtectedRoutes();
  const {
    handleSubmit,
    watch,
    setError,
    clearErrors,
    control,
    setValue,
    // register,
    formState: { errors, isValid },
  } = useForm<iPersonalData>({ mode: 'onChange' });
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showModalExit, setshowModalExit] = useState(false);
  const [componentModal] = useState({
    children: <OfficeBranch setShowModal={setShowModal} />,
    title: (
      <Typography variant="h3" componentHTML="h3" typeFont="Bold" className="">
        Si sus datos han cambiado actualícelos llamando a la línea amiga
      </Typography>
    ),
    id: '',
  });
  const [componentModalExit] = useState({
    children: <ExitModal setshowModalExit={setshowModalExit} />,
    title: (
      <Typography variant="h3" componentHTML="h3" typeFont="Bold" className="">
        Está a punto de abandonar su solicitud
      </Typography>
    ),
    id: '',
  });
  const currentAddress = watch('currentAddress', '');
  const yearDt = watch('yearDt', '');
  const dayDt = watch('dayDt', '');
  const monthDt = watch('monthDt', '');
  const [dataPersonalBasic, setDataUser] = useSessionStorage(
    SesionStorageKeys.dataBasicData.key,
    {}
  );

  const showPopup = () => {
    if (userInfo.isClient) {
      setShowModal(true);
    }
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const closeModalExit = () => {
    setshowModalExit(false);
  };
  useBackDetector(() => {
    setshowModalExit(true);
  }, router.asPath);

  const { onSubmit } = usePersonalData(
    setValue,
    userInfo,
    setError,
    clearErrors,
    dayDt,
    monthDt,
    yearDt,
    router,
    setDataUser,
    setCurrentRouting,
    dataPersonalBasic
  );
  return (
    <div
      data-testid="FormQuotaTest"
      className="w-[343px] md:w-[517px] xl:w-[656px] mx-auto"
      id="personalDataForm"
    >
      {showModal && (
        <Modal
          showModal={showModal}
          onClose={() => closeModal()}
          compont={componentModal}
          advisory
          heightModal="lg:h-[70%]"
        />
      )}
      {showModalExit && Object.entries(dataPersonalBasic).length === 0 && (
        <Modal
          showModal={showModalExit}
          onClose={() => closeModalExit()}
          compont={componentModalExit}
          advisory
          heightModal="lg:h-[70%]"
        />
      )}
      <div className="w-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          data-testid="personaldataTest"
          autoComplete="off"
        >
          {!userInfo.isClient && (
            <div className="grid grid-cols-3 gap-x-2 items-end">
              <div>
                <Typography
                  variant="overline2"
                  componentHTML="p"
                  typeFont="Regular"
                  className="w-full text-complementario-100 mb-3"
                >
                  Fecha de nacimiento:
                </Typography>

                <ReactHookFormSelect
                  className={`col-span-2`}
                  onChange={(e: any) => setValue('dayDt', e.target.value)}
                  placeholder="Dia"
                  label="Dia"
                  defaultValue=""
                  control={control}
                  left="right4"
                  valueLength=""
                  name="dayDt"
                  hideMenuItem={showModal}
                  margin="normal"
                  onFocus={showPopup}
                  disabled={showModal}
                  rules={{ required: !userInfo.isClient }}
                  spacing="mr-[6px]"
                >
                  {days?.map((element, i) => (
                    <MenuItem value={element?.number} key={i}>
                      {element?.day}
                    </MenuItem>
                  ))}
                </ReactHookFormSelect>
              </div>

              <ReactHookFormSelect
                onChange={(e: any) => setValue('monthDt', e.target.value)}
                placeholder="Mes"
                label="Mes"
                defaultValue=""
                control={control}
                left="right4"
                name="monthDt"
                className={`${showModal ? 'hideMenu' : ''}`}
                margin="normal"
                onFocus={showPopup}
                disabled={showModal}
                hideMenuItem={showModal}
                rules={{ required: !userInfo.isClient }}
                spacing="mr-[6px]"
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
                rules={{ required: !userInfo.isClient }}
                render={({ field }) => (
                  <Input
                    type="text"
                    onChange={(e) => {
                      field.onChange(e?.target?.value?.replace(/[^0-9]+/g, ''));
                    }}
                    error={!!errors.dayDt}
                    helperText={errors?.dayDt?.message}
                    value={yearDt}
                    tabIndex={0}
                    id="yearDt"
                    disabled={showModal}
                    onFocus={showPopup}
                    data-testid="yearDtTest"
                    inputMode="numeric"
                    maxLength={4}
                    label="Año"
                  />
                )}
              />
            </div>
          )}
          <div className="w-full mt-4">
            <Controller
              control={control}
              name="birthCity"
              rules={{ required: true }}
              defaultValue={undefined}
              render={({ field: { onChange } }) => (
                <NewAutoComplete
                  defaultValue={undefined}
                  aria-label="Lugar de nacimiento"
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
              spacing="mr-[-10px]"
              rules={{ required: true }}
            >
              <MenuItem value="F">Femenino</MenuItem>
              <MenuItem value="M">Masculino</MenuItem>
            </ReactHookFormSelect>

            <HelperText
              error={false}
              text={'Seleccionar el mismo género indicado en su documento'}
            />
          </div>
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
                  readOnly={userInfo.isClient}
                  tabIndex={0}
                  onFocus={showPopup}
                  disabled={showModal}
                  id="phone"
                  data-testid="phoneTest"
                  inputMode="text"
                  autoComplete="off"
                  placeholder="Número de celular"
                  label={"Número de celular"}
                  onChange={(e: any) => setValue('phone', e.target.value)}
                />
              )}
              name="phone"
              control={control}
            />
          </div>
          <div className="flex flex-col mt-4">
            <Controller
              rules={{ required: !userInfo.email }}
              render={({ field }) => (
                <Input
                  helperText="Lo notificaremos siempre a este correo "
                  helperTextOption
                  type="text"
                  error={!!errors.email}
                  onPaste={(e: ClipboardEvent<HTMLInputElement>) => {
                    e.preventDefault();
                  }}
                  disabled={showModal}
                  readOnly={userInfo.isClient}
                  value={field.value}
                  tabIndex={0}
                  id="email"
                  onFocus={showPopup}
                  data-testid="emailTest"
                  inputMode="text"
                  placeholder="Correo electrónico"
                  autoComplete="off"
                  label= {"Correo electrónico"}
                  onChange={(e: any) => setValue('email', e.target.value)}
                />
              )}
              name="email"
              control={control}
            />
          </div>
          {userInfo.isClient ? (
            <div className="flex flex-col mt-4">
              <Controller
                rules={{ required: !userInfo.isClient }}
                render={() => (
                  <Input
                    type="text"
                    startIcon="bcs-icon-1"
                    error={!!errors.birthCity}
                    onPaste={(e: ClipboardEvent<HTMLInputElement>) => {
                      e.preventDefault();
                    }}
                    onClick={showPopup}
                    value={getCityById(userInfo.residenceCity)}
                    tabIndex={0}
                    id="currentCity"
                    data-testid="currentCity"
                    inputMode="text"
                    disabled={showModal}
                    name="currentCity"
                    placeholder="Ciudad de residencia"
                    label="Ciudad de residencia"
                    onChange={(e: any) => setValue('currentCity', e.target.value)}
                  />
                )}
                name="currentCity"
                control={control}
              />
            </div>
          ) : (
            <div className="w-full mt-4">
              <Controller
                control={control}
                name="currentCity"
                rules={{ required: true }}
                defaultValue={undefined}
                render={({ field: { onChange } }) => (
                  <NewAutoComplete
                    defaultValue={undefined}
                    label="Ciudad de residencia"
                    onChange={(e: any) => {
                      if (e?.id) {
                        return onChange({
                          item: e.name,
                          option: e.id,
                          hasAdviser: e?.hasAdviser,
                          nameAdviser: e?.nameAdviser,
                        });
                      }
                      return onChange(undefined);
                    }}
                    zIndex={30}
                  />
                )}
              />
            </div>
          )}
          {!userInfo.isClient && (
            <div className="flex flex-col mt-4">
              <Controller
                rules={{ required: !userInfo.isClient }}
                render={({ field }) => (
                  <Input
                    helperText={
                      errors?.currentAddress?.message
                        ? errors?.currentAddress?.message
                        : `Ejemplo: Cra 76 sur # 00 - 00`
                    }
                    helperTextOption
                    type="text"
                    startIcon="bcs-icon-1"
                    error={!!errors.currentAddress}
                    onPaste={(e: ClipboardEvent<HTMLInputElement>) => {
                      e.preventDefault();
                    }}
                    onFocus={showPopup}
                    value={currentAddress}
                    id="currentAddress"
                    data-testid="currentAddres"
                    inputMode="text"
                    disabled={showModal}
                    placeholder="Dirección de vivienda actual"
                    label="Dirección de vivienda actual"
                    onChange={(e: any) => {
                      const { isError, message } = validateAddress(
                        e?.target?.value?.trim()
                      );
                      if (isError) {
                        setValue('currentAddress', e.target.value);
                        setError('currentAddress', {
                          type: 'text',
                          message,
                        });
                      } else {
                        field.onChange(e.target.value);
                        setValue('currentAddress', e.target.value);
                        clearErrors('currentAddress');
                      }
                    }}
                  />
                )}
                name="currentAddress"
                control={control}
              />
            </div>
          )}
          <div className="flex justify-center items-center lg:px-[20px]  md:mb-0 lg:mb-5 mt-[32px]">
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
      </div>
    </div>
  );
}

export default PersonalDataBasic;
