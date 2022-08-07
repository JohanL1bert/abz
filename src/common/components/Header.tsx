import React from 'react';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__wrapper">
          <div className="header__logo" />
          <div className="header__items">
            <a href="#users" className="header__btn-user">
              Users
            </a>
            <a href="#sign-in" className="header__btn-sign-up">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
