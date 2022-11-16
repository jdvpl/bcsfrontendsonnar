import { childrenProps } from '../../../interfaces';

export const HeadingError: React.FC<childrenProps> = ({ children }) => (
  <h3
    id="title-error"
    className="text-center mt-[52px] md:-mx-[82px] lg:-mx-[0px]"
    tabIndex={0}
    role="paragraph"
    itemProp="error"
  >
    {children}
  </h3>
);
