import useRatingForm from './useRatingForm';

export function RateForm() {
  const {
    qualify,
    renderForm,
  } = useRatingForm();

  return (
    <div
      className={`${
        qualify ? 'py-11' : ''
      }  w-full flex flex-col items-center justify-center`}
    >
      {renderForm()}
    </div>
  );
}
