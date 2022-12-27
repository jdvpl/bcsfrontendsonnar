interface TextAreaProps extends React.ComponentPropsWithoutRef<'textarea'> {
  description?: string;
}
export function TextArea({ description, ...props }: TextAreaProps) {
  return <>
      <textarea
        {...props}
        className="w-[90%] font-normal border r-none rounded-lg border-text-area mt-[22px] p-3 h-[199px] max-h-[77px]"
      />
      <p className="text-xs font-normal leading-4 text-complementario-60 text-left">
        {description}
      </p>
    </>
}
