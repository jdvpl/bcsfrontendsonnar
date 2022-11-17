export interface StarProps {
  className?: string;
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
  id: string;
  active?: boolean;
}
export const Star: React.FC<StarProps> = ({ id, className, active }) => (
  <svg
    id={id}
    className={`${className || 'mx-[5px]'}  `}
    width="36"
    height="37"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.4495 0.885628L23.4572 0.871438L23.464 0.856782C23.6838 0.381074 24.3299 0.381072 24.5498 0.856782L24.5559 0.869999L24.5628 0.882837L31.7533 14.3264L31.7623 14.3432L31.7726 14.3593C31.8679 14.5089 32.0521 14.7048 32.3345 14.7544L46.938 17.8864L46.9518 17.8894L46.9657 17.8915C47.4523 17.9675 47.7035 18.6374 47.3038 19.0467L47.2977 19.0529L47.2919 19.0593L37.0079 30.3461L36.9968 30.3584L36.9864 30.3713C36.8298 30.5678 36.7698 30.8038 36.7985 31.0442L36.7994 31.0517L36.8005 31.0591L39.1516 46.7025L39.1521 46.7058C39.2473 47.3122 38.6768 47.6493 38.2613 47.4249L24.3969 39.8951C24.1492 39.7521 23.8534 39.7516 23.6054 39.8937L9.45276 47.4233L9.44993 47.4249C9.0383 47.6473 8.46467 47.3026 8.55891 46.7077C8.55895 46.7075 8.55899 46.7072 8.55903 46.7069L11.1137 31.0507C11.1788 30.7436 11.0534 30.496 10.9311 30.3425L10.9211 30.33L10.9103 30.3182L0.708799 19.0745L0.702632 19.0677L0.69622 19.0611C0.296504 18.6518 0.547693 17.9819 1.0343 17.9059L1.04877 17.9037L1.06307 17.9006L15.5836 14.7543C15.8577 14.7059 16.055 14.5164 16.1535 14.3207L23.4495 0.885628Z"
      fill={active ? '#FBBF24' : ''}
      stroke={active ? '' : '#798C98'}
      className="hover:bg-primary-200"
    />
  </svg>
);
