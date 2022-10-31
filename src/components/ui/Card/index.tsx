import { FC, useState, ReactNode } from 'react';
import Icons, { IconsProps } from '../icons';
/* eslint-disable-next-line */
// import './card.css';
import { dynamicClasses } from './classNames';
export interface CardsProps extends IconsProps {
  dataTestId?: string;
  label?: string;
  description?: string;
  subdescription?: string;
  hiddenCard?: boolean;
  instructiveCard?: boolean;
  instructiveNoSubdescriptionCard?: boolean;
  clarificationCard?: boolean;
  editableCard?: boolean;
  children?: ReactNode;
  showChildren?: boolean;
}
export interface WrapperProps {
  condition: boolean;
  wrapper: any;
  children: ReactNode;
}
export const Card: FC<CardsProps> = ({
  label,
  description,
  icon,
  hiddenCard = false,
  dataTestId,
  color = '',
  size,
  instructiveCard = false,
  subdescription,
  instructiveNoSubdescriptionCard = false,
  clarificationCard = false,
  editableCard = false,
  children,
  showChildren = false,
}) => {
  const [showActiveCard, setshowActiveCard] = useState(false);
  const [showChildrenInfo, setshowChildren] = useState(showChildren);
  const onChangeActiveCard = () => setshowActiveCard((prev) => !prev);
  const changeShowChildren = () => setshowChildren((prev) => !prev);
  const classNames = dynamicClasses(
    hiddenCard,
    showActiveCard,
    color,
    instructiveCard,
    instructiveNoSubdescriptionCard,
    clarificationCard,
    editableCard
  );

  const ConditionalWrapper: FC<WrapperProps> = ({ condition, wrapper, children }) =>
    condition ? wrapper(children) : children;

  return (
    <>
      <div
        data-testid={dataTestId}
        className={classNames.mainCardStyles}
        onClick={onChangeActiveCard}
      >
        <ConditionalWrapper
          condition={editableCard}
          wrapper={(childrend: ReactNode) => <div className="flex">{childrend} </div>}
        >
          {!clarificationCard && (
            <div className={classNames.containerIconStyle}>
              <Icons icon={icon} color={classNames.iconColorStyle} size={size} />
            </div>
          )}
          {instructiveCard || instructiveNoSubdescriptionCard ? (
            <div
              role="paragraph"
              className={!instructiveNoSubdescriptionCard ? 'ml-3' : ''}
            >
              <p className={classNames.haderCardTitleStyle}>{label}</p>
              {instructiveNoSubdescriptionCard ? (
                <>
                  <p className={classNames.descriptionCardStyle}>{description}</p>
                  {subdescription && (
                    <p className="inline text-sm text-azul_gris-100">{subdescription}</p>
                  )}
                </>
              ) : (
                <h4 className={classNames.descriptionCardStyle}>{description}</h4>
              )}
              {!instructiveNoSubdescriptionCard && (
                <p className={classNames.subdescriptionCardStyle}>{subdescription}</p>
              )}
            </div>
          ) : clarificationCard ? (
            <div className={classNames.clarificationContainerTextCardStyleDiv}>
              <p className={classNames.haderCardTitleStyle}>{label}</p>
              <p className={classNames.descriptionCardStyle} id="month-quota">
                {description}
              </p>
            </div>
          ) : editableCard ? (
            <>
              <div className="w-full">
                <p className={classNames.editableCardHeaderTitleStyle}>{label}</p>
                <p className={classNames.editableCardDescriptionStyle}>{description}</p>
              </div>
              <div
                className={classNames.editableIconSectionsStyle}
                onClick={changeShowChildren}
              >
                <p id="edit-date" className={classNames.editableTextSectionsStyle}>
                  {subdescription}
                  <Icons
                    color="text-azul_gris-50"
                    icon="bcs-pen-edit"
                    iconclassNames="m-0"
                  />
                </p>
              </div>
            </>
          ) : (
            <label className="label-shipping" htmlFor="shipping-home">
              <div>
                <p className={classNames.haderCardTitleStyle}>{label}</p>
                <p className={classNames.descriptionCardStyle}>{description}</p>
              </div>
            </label>
          )}
          {clarificationCard && (
            <div className={classNames.clarificationContainerStyle}>
              <p className="text-azul_gris-100 text-[16px] p-0">{subdescription}</p>
            </div>
          )}
          {!instructiveCard &&
            !instructiveNoSubdescriptionCard &&
            !clarificationCard &&
            !editableCard && (
              <label className="input-shipping radio">
                <input type="radio" name="radio" className="hidden" />
                <span className={classNames.spanCardStyle}></span>
              </label>
            )}
        </ConditionalWrapper>
      </div>

      {showChildrenInfo && children}
    </>
  );
};

export default Card;
