const cssState = 'data-style';

export function getDataAttributes(props) {
  return Object.entries(props)
    .filter(([key]) => key.startsWith('data-'))
    .reduce((acc, [key, val]) => {
      acc[key] = val;
      return acc;
    }, {});
}

export function generateCssStates(states) {
  return Object.entries(states)
    .reduce((acc, [key, val]) => {
      acc[`${cssState}${key}`] = val;
      return acc;
    }, {});
}

export function mapPropsToCSSStates(props, statesNames = []) {
  return statesNames.reduce((acc, stateName) => {
    const stateValue = props[stateName];
    acc[`${cssState}-${stateName}-${stateValue}`] = true;
    return acc;
  }, {});
}
