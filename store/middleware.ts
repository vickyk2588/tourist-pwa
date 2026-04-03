import { Middleware } from '@reduxjs/toolkit';

export const loggerMiddleware: Middleware = () => (next) => (action) => {
  console.log('➡️ Action:', action);
  return next(action);
};

export const errorMiddleware: Middleware = () => (next) => (action: any) => {
  if (action.error) {
    console.error('❌ Error:', action.error);
  }
  return next(action);
};