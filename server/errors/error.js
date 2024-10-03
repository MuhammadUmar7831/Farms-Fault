export const errorHandler = (message) => {
  const error = new Error();
  error.message = message;
  return error;
};
