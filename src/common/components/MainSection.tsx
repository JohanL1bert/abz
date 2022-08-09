import React from 'react';

export const MainSection = () => {
  return (
    <section>
      <div className="main__overflow">
        <div className="main__inner">
          <div className="main__wrap">
            <div className="main__wrapper">
              <h1 className="main__heading">Test assignment for front-end developer</h1>
              <div className="main__description">
                What defines a good front-end developer is one that has skilled knowledge of HTML,
                CSS, JS with a vast understanding of User design thinking as they`&apos;ll be
                building web interfaces with accessibility in mind. They should also be excited to
                learn, as the world of Front-End Development keeps evolving.
              </div>
              <a href="#sign-in" className="main__btn">
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
