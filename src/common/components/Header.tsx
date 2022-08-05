import React from 'react';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__wrapper">
          <div className="header__logo" />
          <div className="header__items">
            <div className="header__btn-user">Users</div>
            <div className="header__btn-sign-up">Sign Up</div>
          </div>
        </div>
      </div>
    </header>
  );
};
