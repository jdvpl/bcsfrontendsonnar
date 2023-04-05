export const parseHeadProperties = (option: string) => {
  switch (option) {
    case '/':
      return {
        description: '',
        title: 'BCS Crédito Hipotecario',
      };
    default:
      return {
        description: '',
        title: parseToTitleCase(option?.replaceAll('/', ' ').replaceAll('-', ' ')),
      };
  }
};

export const parseToTitleCase = (str: string) => {
  return str.replace(/(?:^|\s)\w/g, function (match) {
    return match.toUpperCase();
  });
};
