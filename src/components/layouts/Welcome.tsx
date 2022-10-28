interface Props {
  id: string;
}
export const Welcome: React.FC<Props> = ({ id }) => (
  <section
    aria-label="Bienvenida"
    data-testid="welcome"
    className="mb-1 pt-[44px] md:pt-[30px]  md:pl-0 lg:pt-[48px] lg:w-[540px] md:w-[325px] lg:-mx-[0px] lg:mb-0"
    id={`welcome-${id}`}
    role="tabpanel"
    tabIndex={0}
  ></section>
);
