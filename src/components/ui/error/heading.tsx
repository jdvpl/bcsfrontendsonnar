import { childrenProps } from '../../../interfaces';
import Typography from '../Typography';

const HeadingError: React.FC<childrenProps> = ({ children }) => (
  <Typography
    variant='h3'
    componentHTML='h3'
    id="title-error"
    className="text-center mt-[52px] md:-mx-[82px] lg:-mx-[0px]"
    tabIndex={0}
  >
    {children}
  </Typography>
);

export default HeadingError
