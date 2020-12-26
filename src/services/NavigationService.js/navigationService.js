let _router;

export function setTopLevelRouter(routerRef) {
  _router = routerRef;
}

export const routerRef = () => {
  return _router;
};

export const pushScreen = path => {
  _router.history.push(path);
};

export const replace = path => {
  _router.history.replace(path);
};
