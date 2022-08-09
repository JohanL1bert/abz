import React from 'react';

export const ErrorMessage = ({ err }: any) => {
  if (err) {
    return <div className="error">{err}</div>;
  }
  return null;
};
