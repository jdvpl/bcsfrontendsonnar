export default function useHandleChangeDocumentAdvisorBank(setError: any) {

  const handleDocument = (e: any, field: any,) => {
    const { value } = field;
    const inputValue = e.target.value.replace(/[^0-9]/g, '');
    if (value?.length === 10 && e.nativeEvent.data) {
      setError('documentNumberBankAdvisor', {
        type: 'manual',
        message: 'Máximo 10 caracteres permitidos',
      });
      e.preventDefault();
      return;
    }
    if (value?.length === 9) {
      setError('documentNumberBankAdvisor', {
        type: 'manual',
        message: undefined,
      });
    }
    field.onChange(inputValue);
  };
  return { handleDocument }
}
