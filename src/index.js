import getByDot from 'get-by-dot';

const setByDot = (model, modelProp, value) => {
  const invalidTypes = ['undefined', 'number', 'string'];
  const invalidValues = [null];
  const type = typeof model;

  if(invalidTypes.includes(type) || invalidValues.includes(model)) {
    throw new Error('You have to provide a valid first parameter.');
  }

  if(!modelProp) return value || model;

  const parts = modelProp.split('.');
  const reversedParts = [...parts].reverse();
  const result = reversedParts.reduce((prev, curr, index, array) => {
    if(!Number.isNaN(parseInt(curr, 10))) {
      const keys = [...array].splice(index + 1, array.length - index);
      const path = keys.reverse().join('.');
      const modelArray = getByDot(model, path);
      modelArray[curr] = prev;

      return modelArray;
    }

    return { [curr]: prev };
  }, value);

  return Object.assign(model, result);
};

export default setByDot;
