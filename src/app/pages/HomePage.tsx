import React from 'react';
import { Header } from 'common/components/Header';
import { HeaderRectangle } from 'common/components/HeaderRectangle';
import { MainSection } from 'common/components/MainSection';
import { Layout } from 'app/pages/Layout';

export const HomePage = () => {
  return (
    <>
      <HeaderRectangle />
      <Header />
      <div className="container">
        <MainSection />
        <Layout />
      </div>
    </>
  );
};
