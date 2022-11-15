export const urlAndUtms = (routerHookFunction: any, url: string): void => {
  routerHookFunction.push({
    pathname: url,
    query: {
      ...routerHookFunction.query,
    },
  });
};
