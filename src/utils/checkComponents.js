export const checkComponents = components => {
  const arrayOfComponents = Object.keys(components).map(key => ({
    ...components[key],
  }));

  let count = 0;

  for (const obj of arrayOfComponents) {
    if (Object.keys(obj).length === 0) {
      count = count + 1;
    }
  }

  if (count > 1) {
    return true;
  } else {
    return false;
  }
};
