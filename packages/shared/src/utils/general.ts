export const delay = (time: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

export const getCurrentRouteName = (pathname: string) => {
  return pathname.split('/').pop();
};
