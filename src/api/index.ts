import axios from 'axios';

const config = {
  headers: {
    'x-mock-match-request-body': true,
    'app-name': 'PDIGITAL',
  },
};

export const ValidateUserTU = async (data: any) => {
  try {

    const { data: response } = await axios.post(
      'http://localhost:3000/api/validateUser',
      data,
      config
    );
    
    return response;

  } catch (error) {
    return error;
  }
};
