/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Card } from 'common/components/Card';
import { getUserStore, userController } from 'store/getUser/userStore';
import { LoadStatus } from 'common/const/load-status.const';
import { Preloader } from 'common/components/Preloader';

export const CardSection = observer(() => {
  const [pageNum, setPageNum] = useState<number>(1);

  const { loading, usersByDate, store, isAuth } = getUserStore;
  const { total_pages } = store;

  useEffect(() => {
    userController.uploadUsers(pageNum);
  }, [pageNum, isAuth]);

  return (
    <section>
      <div className="cards__inner">
        <div className="cards__wrapper">
          <div className="cards__heading__wrapper">
            <h2 className="cards__heading" id="users">
              Working with GET request
            </h2>
          </div>
          <div className="cards__items">
            {usersByDate.map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </div>
          <div className="cards__btn__inner">
            {loading === LoadStatus.pending ? (
              <Preloader />
            ) : pageNum === total_pages ? null : (
              <button className="cards__btn__show" onClick={() => setPageNum((prev) => prev + 1)}>
                Show more
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
});
