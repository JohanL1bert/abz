import React from 'react';
import { CardSection } from 'common/components/CardSection';
import { FormSection } from 'common/components/FormSection';

export const Layout = () => {
  return (
    <div className="inner__container">
      <CardSection />
      <FormSection />
    </div>
  );
};
