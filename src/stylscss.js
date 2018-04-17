export const getDataAttributes = props => {
  return Object.entries(props)
    .filter(([key]) => key.startsWith('data-'))
    .reduce((acc, [key, val]) => {
      acc[key] = val;
      return acc;
    }, {});
};

export const getCssStates = props => {
  return Object.entries(props)
    .reduce((acc, [key, val]) => {
      acc[`data-style-${key}`] = val;
      return acc;
    }, {});
};

export const mapPropsToCSSStates = (props, states = []) => {
  return states.reduce((acc, state) => {
    acc[`data-style-${state}-${props[state]}`] = true;
    return acc;
  }, {});
};
