import useHandleChangeDocumentAdvisorBank from '../../hooks/useHandleChangeDocumentAdvisorBank'
describe('useHandleChangeDocumentAdvisorBank', () => {
  const setError = jest.fn();
  const field = {
    value: '',
    onChange: jest.fn(),
  };
  const event = {
    target: {
      value: 'abc123',
    },
    preventDefault: jest.fn(),
    nativeEvent: {
      data: '',
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should set error message and prevent default when length is 10 and data is present', () => {
    const { handleDocument } = useHandleChangeDocumentAdvisorBank(setError);
    field.value = '1234567890';
    event.nativeEvent.data = '1';

    handleDocument(event, field);

    expect(setError).toHaveBeenCalledWith('documentNumberBankAdvisor', {
      type: 'manual',
      message: 'Máximo 10 caracteres permitidos',
    });
    expect(event.preventDefault).toHaveBeenCalled();
    expect(field.onChange).not.toHaveBeenCalled();
  });

  it('should clear error message when length is 9', () => {
    const { handleDocument } = useHandleChangeDocumentAdvisorBank(setError);
    field.value = '123456789';

    handleDocument(event, field);

    expect(setError).toHaveBeenCalledWith('documentNumberBankAdvisor', {
      type: 'manual',
      message: undefined,
    });
    expect(event.preventDefault).not.toHaveBeenCalled();
    expect(field.onChange).toHaveBeenCalledWith('123');
  });

  it('should remove non-numeric characters and update field value', () => {
    const { handleDocument } = useHandleChangeDocumentAdvisorBank(setError);
    field.value = '12345';
    event.target.value = 'abc12345';

    handleDocument(event, field);

    expect(setError).not.toHaveBeenCalled();
    expect(event.preventDefault).not.toHaveBeenCalled();
    expect(field.onChange).toHaveBeenCalledWith('12345');
  });
});


