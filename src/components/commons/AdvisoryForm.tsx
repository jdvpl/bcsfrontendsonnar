import { MenuItem } from '@mui/material';
import React, { ClipboardEvent, useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import { useSessionStorage } from '../../hooks/useSessionStorage';
import { SesionStorageKeys } from '../../session';
import Button from '../ui/Button';
import Input from '../ui/inputs';
import ReactHookFormSelect from '../ui/Select/newSelect'

export interface FormData {
  advisoryType: string;
  otherAdvisoryType?: string;
}
function AdvisoryForm({ setShowModal }: any) {
  const optionsMenu = [
    { value: 'campaign', label: 'Campaña' },
    { value: 'bank_advisor', label: 'Asesor banco' },
    { value: 'builder', label: 'Constructora' },
    { value: 'real_estate', label: 'Inmobiliaria' },
    { value: 'other', label: 'Otro' },
  ]
  const {
    handleSubmit,
    watch,
    control,
    setValue,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onChange' });
  const advisoryTypeOption = watch('advisoryType');
  const otherAdvisoryType = watch('otherAdvisoryType');
  const [disable, setdisable] = useState(true);
  const [dataUser, setDataUser] = useSessionStorage(
    SesionStorageKeys.dataUser.key,
    {}
  );
  useEffect(() => {
    if (!advisoryTypeOption) {
      setdisable(true);
    }
    if (advisoryTypeOption) {
      setdisable(false)
    }
    if (advisoryTypeOption === "other") {
      if (!otherAdvisoryType) {
        setdisable(true);
      } else {
        setdisable(false)
      }
    }
  }, [advisoryTypeOption, otherAdvisoryType])

  const onHandleSubmit = (formData: FormData) => {
    let datainfo: any;
    if (formData.advisoryType === 'other') {
      datainfo = formData;
    } else {
      datainfo = { advisoryType: formData.advisoryType, otherAdvisoryType: null }
    }
    setDataUser({ ...dataUser, ...datainfo })
    setShowModal(false)
  }

  return (
    <div>
      <p className="text-center mt-9 font-montserratRegular font-normal text-primario-900">
        ¿Quién lo asesoró?
      </p>
      <div className='lg:w-[528px] md:w-[433px] sm:w-[312px] w-[259px] m-auto mt-[41px]'>
        <form onSubmit={handleSubmit(onHandleSubmit)}>
          <div className="mt-3 m-auto text-left">
            <ReactHookFormSelect
              onChange={(e: any) => setValue('advisoryType', e.target.value)}
              placeholder="Tipo de asesoría"
              label="Tipo de asesoría"
              error={!!errors.advisoryType}
              defaultValue=""
              control={control}
              left="right4"
              role="advisorytypeRole"
              valueLength=""
              name="advisoryType"
              className="w-100"
              margin="normal"
              rules={{ required: true }}
            >
              {optionsMenu.map((d, i) => (
                <MenuItem value={d.value} key={i}>{d.label}</MenuItem>
              ))}
            </ReactHookFormSelect>
          </div>
          <div className="mt-3 m-auto text-left">
            {advisoryTypeOption === 'other' ? <div >
              <Controller
                rules={{ required: advisoryTypeOption === 'other' }}
                render={({ field }) => (
                  <Input
                    helperText='Por favor escribe el tipo de asesoría'
                    type="text"
                    error={!!errors.otherAdvisoryType}
                    dataTestId="otherAdvioryTypeTest"
                    value={field.value}
                    onPaste={(e: ClipboardEvent<HTMLInputElement>) => {
                      e.preventDefault();
                    }}
                    id="otherAdvisoryType"
                    inputMode="text"
                    label="¿Cuál?"
                    onChange={
                      (e: any) => setValue('otherAdvisoryType', e.target.value)}
                  />
                )}
                name="otherAdvisoryType"
                control={control}
              />
            </div> : null}
          </div>

          <div className="flex justify-center items-center lg:px-[20px]  md:mb-0 lg:mb-5 mt-[50px] pb-[40px]">
            <Button
              isLanding="w-full xs:w-[250px] sm:w-[253px] md:w-[253px] lg:w-[343px]"
              type="submit"
              data-testid="advisoryFormtest"
              disabled={disable}
              id="btn-next"
            >
              Enviar
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AdvisoryForm