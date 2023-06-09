const { basePath } = require('./next.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
  },
  theme: {
    container: {
      center: true,
    },
    screens: {
      xs: '320px',
      sm: '375px',
      smd:'430px',
      smdd:'500px',
      xmd:'550px',
      md: '744px',
      lgsm:'1024px',
      lg: '1080px',
      xl: '1200px',
      xxl: '1440px',
      xxxl: '2560px',
    },
    fontFamily: {
      monserratLight:['MontserratLight','sans-serif'],
      montserratSemiBold:['MontserratSemiBold','sans-serif'],
      montserratRegular:['MontserratRegular','sans-serif'],
      montserratMedium:['MontserratMedium','sans-serif'],
      montserratExtraLight:['MontserratExtraLight','sans-serif'],
      poppinsLight:['PoppinsLight','sans-serif'],
      poppinsRegular:['PoppinsRegular','sans-serif'],
      poppinsBold:['PoppinsBold','sans-serif'],
      poppinsSemiBold:['PoppinsSemiBold','sans-serif'],
      poppinsExtraLight:['PoppinsExtraLight','sans-serif'],
    },
    colors: {
      primario: {
        20: '#0386e6',
        30: '#0093ff',
        40: '#1c9fff',
        50: '#38abff',
        60: '#55b7ff',
        70: '#71c3ff',
        80: '#8ecfff',
        90: '#aadbff',
        100: '#0072c8',
        200: '#0068b4',
        300: '#005da2',
        400: '#005390',
        500: '#00497E',
        600: '#003e6c',
        700: '#00345a',
        800: '#002948',
        900: '#00253d',
      },
      secundario: {
        20: '#00b5ff',
        30: '#1dbdff',
        40: '#1c9fff',
        50: '#38abff',
        60: '#55b7ff',
        70: '#71c3ff',
        80: '#8ecfff',
        90: '#aadbff',
        100: '#00a1e4',
        200: '#0091cd',
        300: '#0081B6',
        400: '#0071a0',
        500: '#006189',
        600: '#005172',
        700: '#00405b',
        800: '#003044',
        900: '#00202e',
      },
      complementario: {
        20: '#557488',
        30: '#62859b',
        40: '#7594a8',
        50: '#89a3b5',
        60: '#9cb3c1',
        70: '#b0c2cd',
        80: '#c4d1da',
        90: '#d8e0e6',
        100: '#496374',
        200: '#425968',
        300: '#3a4f5d',
        400: '#334551',
        500: '#2c3b46',
        600: '#25323a',
        700: '#1d282e',
        800: '#161e23',
        900: '#0f1417',
      },
      gris: {
        20: '#374151',
        30: '#4b5563',
        40: '#6b7280',
        50: '#9ca3af',
        60: '#d1d5db',
        70: '#e5e7eb',
        80: '#f3f4f6',
        90: '#f9f9fb',
        100: '#1f2937',
        200: '#7594A8'
      },
      verde: {
        20: '#0cba6b',
        30: '#0edb7d',
        40: '#1cf08f',
        50: '#3cf29f',
        60: '#5df4af',
        70: '#7df7bf',
        80: '#9ef9cf',
        90: '#befbdf',
        100: '#0a9a58',
        200: '#098b4f',
        300: '#087b46',
        400: '#076c3e',
        500: '#065c35',
        600: '#054d2c',
        700: '#043e23',
        800: '#032e1a',
        900: '#021f12',
      },
      rojo: {
        20: '#e9132b',
        30: '#ed2b41',
        40: '#f04558',
        50: '#f26070',
        60: '#f47a88',
        70: '#f695a0',
        80: '#f8afb8',
        90: '#fbcacf',
        100: '#ce1126',
        200: '#F96459'
      },
      cafe: {
        20: '#92400e',
        30: '#b45309',
        40: '#d97706',
        50: '#f59e0b',
        60: '#fbbf24',
        70: '#fcd34d',
        80: '#fde68a',
        90: '#fef3c7',
        100: '#78350f',
      },
      white: '#ffffff',
      black: '#000000',
      gradient: {
        100: '#0055A9',
        200: '#014282',
      },
    },
    extend: {
      boxShadow: {
        'small-100':
          '0px 0px 1.73524px rgba(0, 37, 61, 0.12), 0px 0.867619px 3.47048px rgba(0, 37, 61, 0.06)',
        'small-300':
          '0px 1px 4px rgba(0, 37, 61, 0.12), 0px 4px 8px rgba(0, 37, 61, 0.08)',
        'small-400':
          '0px 1px 4px rgba(0, 37, 61, 0.12), 0px 4px 8px rgba(0, 37, 61, 0.1), 0px 6px 12px rgba(0, 37, 61, 0.08)',
        'media-300':
          '0px 4px 8px rgba(0, 84, 145, 0.1), 0px 8px 16px rgba(0, 84, 145, 0.16), 0px 16px 28px -1px rgba(0, 84, 145, 0.1)',
        'blue-100':
          '0px 0px 4px 3px rgba(180, 211, 237, 1), 0px 0px 1px 4px rgba(180, 211, 237, 1)',
      },
      backgroundImage:{
        'requirements-lg':`url('${basePath}/images/requirementslg.png')`,
        'requirements-xl':`url('${basePath}/images/requirementsxl.png')`,
        'requirements-xxl':`url('${basePath}/images/requirementsxxl.png')`,
        'requirements-xxxl':`url('${basePath}/images/requirementsxxxl.png')`,
        'requirements-md':`url('${basePath}/images/requirementsmd.png')`,
        'requirements-sm':`url('${basePath}/images/requirementssm.png')`,
        'requirements-smd':`url('${basePath}/images/requirementssmd.png')`,
        'requirements-xs':`url('${basePath}/images/requirementsxs.png')`,

        'landing-md':`url('${basePath}/images/landingMd.png')`,
        'landing-smd':`url('${basePath}/images/landingSmd.png')`,
        'landing-sm':`url('${basePath}/images/landingSm.png')`,
        'landing-xs':`url('${basePath}/images/landingXs.png')`,
        'landing-xl':`url('${basePath}/images/landingxL.png')`,
        'landing-xxl':`url('${basePath}/images/landingxxL.png')`,
        'landing-xxxl':`url('${basePath}/images/landingxxxL.png')`,
        'landing-lg':`url('${basePath}/images/landingLg.png')`,
       
      },
      transformOrigin: {
        0: '0%',
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  plugins: [],
};