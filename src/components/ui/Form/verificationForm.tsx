import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { motion } from 'framer-motion';
import Button from '../Button';
import ContainerButtonForm from './ContainerButtonForm';
import Typography from '../Typography';
import LogoForm from '../../svg/LogoForm';
import useVerificationForm from '../../../hooks/useVerificationForm';
import { HelperText } from '../inputs/HelperText';
import useMediaQueryResponsive from '../../../hooks/useMediaQuery';
import LockeUsersMessage from '../../commons/LockeUsersMessage';
interface FormProps {
  onSubmit: (data: VerificationFormProps) => void;
  isLoading?: boolean;
  defaultValues?: VerificationFormProps;
  initialBorder: any;
  setBorder: any;
  messagePassword?: any;
  lockedUser?: boolean;
}
export interface VerificationFormProps {
  userName: string;
  password: string;
}
const VerificationForm: React.FC<FormProps> = ({ onSubmit, defaultValues, initialBorder,
  setBorder, messagePassword, lockedUser }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isValid },
  } = useForm<VerificationFormProps>({
    mode: 'onChange',
    defaultValues: {
      ...defaultValues,
    },
  });

  const [values, setValues] = useState({
    showPassword: false,
    showPassword2: false,
  });
  const variants = {
    hidden: { opacity: 1, x: 350, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0 },
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const { heightHeader } = useMediaQueryResponsive()
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const fields = watch();
  useVerificationForm(fields, setBorder)
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: 'linear' }}
      className="h-full verificationForm"
    >
      <Typography variant="h2" className="text-center text-primario-900">
        Bienvenido a
      </Typography>
      <figure itemProp="logo" className="flex justify-center lg:w-[300px] md:w-[240px] w-[250px] m-auto mt-4">
        <LogoForm height={heightHeader} />
      </figure>
      <form
        data-testid="verificationForm"
        onSubmit={handleSubmit(onSubmit)}
        className="w-full bottom-0 mt-1 loginPass"
      >
        <p className="text-center w-full mx-auto text-base leading-5 lg:mt-3 md:mt-3 text-primario-900 font-light">
          Ingrese la contraseña que utiliza para acceder a su app o portal web.
        </p>
        <div itemScope itemType="https://schema.org/Person" className='mt-8'>

          <div className="w-100" id="pass-container">
            <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
              <InputLabel htmlFor="input-password" className={`${initialBorder === '#E9132B' ? 'passLoginRed' : 'passLoginBlack'}`}>Contraseña</InputLabel>
              <OutlinedInput
                sx={{
                  color: '#00253D',
                  fontSize: '14px',
                  '.MuiFormLabel-root': {
                    fontSize: '14px',
                  },
                  '.css-1sumxir-MuiFormLabel-root-MuiInputLabel-root': {
                    color: 'red !important'
                  },
                  '.MuiFormControl-root': {
                    margin: '0px !important',
                  },
                  '.MuiInputLabel-outlined': {
                    fontSize: '14px',
                  },
                  '.MuiOutlinedInput-notchedOutline': {
                    borderColor: initialBorder,
                    borderWidth: '1px',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#2972C8',
                    borderWidth: '1px',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#2972C8',
                    borderWidth: '1px',
                  },

                  '.MuiFormControl-marginNormal': {
                    marginTop: '0px !important',
                  },
                  '.css-1iledgx-MuiFormControl-root': {
                    marginTop: '0px !important',
                  },
                }}
                data-testid="input-password"
                id="input-password"
                {...register('password', {
                  validate: {
                    alphaLength: (value) =>
                      /^(?=[A-Za-z]+[0-9]|[0-9]+[A-Za-z])[A-Za-z0-9]{8,8}$/.test(value) ||
                      'alphaLength',
                    zero: (value) => value[0] !== '0',
                    sequential: (value) => !/(\d)\1{1}/.test(value) || 'sequential',
                    consecutive: (value) =>
                      !/(01|12|23|34|45|56|67|78|89|98|87|76|65|54|43|32|21|10)+/.test(
                        value
                      ) || 'consecutive',
                    alphanumeric: (value) =>
                      /^[a-zA-Z0-9]+$/.test(value) || 'alphanumeric',
                  },
                  required: true,
                })}
                type={values.showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      data-testid="togglePasword"
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? (
                        <VisibilityOffOutlinedIcon />
                      ) : (
                        <VisibilityOutlinedIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label="Clave"
              />
            </FormControl>
            {initialBorder === '#E9132B' && <HelperText text={messagePassword} error={true} />}
          </div>
        </div>
        <LockeUsersMessage lockedUser={lockedUser} />
        <ContainerButtonForm>
          <Button
            disabled={!isValid}
            type="submit"
            data-testid="btn-save-data"
            name="btn-save-data"
            id="btn-save-data"
            className='md:mt-[150px]'
          >
            Continuar
          </Button>
        </ContainerButtonForm>
      </form>
    </motion.div>
  );
};

export default VerificationForm;
