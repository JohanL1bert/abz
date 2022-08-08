import React from 'react';
import { IUser } from 'store/getUser/interface';
import { CustomTooltip } from 'common/components/CustomTooltip';

export const Card = (props: IUser) => {
  const { name, email, phone, photo, position } = props;
  return (
    <div className="card__wrapper">
      <img src={photo} alt="" className="card__img" />
      <p className="card__name">{name}</p>
      <div className="card__inner">
        <p className="card__position">{position}</p>

        <CustomTooltip title={email}>
          <a href={`malito:${email}`} className="card__email">
            {email}
          </a>
        </CustomTooltip>

        <a href={`tel:${phone}`} className="card__phone">
          {phone}
        </a>
      </div>
    </div>
  );
};
