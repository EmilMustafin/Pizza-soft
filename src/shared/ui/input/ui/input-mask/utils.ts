export const applyMask = (mask: string, value: string) => {
  if (!value) return '';

  const maskChars = mask.split('');
  const valueChars = value.split('');

  let result = '';

  for (let i = 0; i < mask.length; i++) {
    if (!valueChars[0]) return result;
    if (maskChars[0] === '*' || maskChars[0] === valueChars[0]) result += valueChars.shift();
    else result += maskChars[0];
    maskChars.shift();
  }

  return result;
};
