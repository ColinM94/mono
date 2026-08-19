/**
 * Takes a string and returns it with first letter capitalised.
 * @param text - String to be capitalised.
 * @returns string with capitalised first letter.
 */
export const capitaliseFirstLetter = (text: string) => {
  if (!text[0]) return '';

  return text[0].toUpperCase() + text.substring(1);
};

/**
 * Generates a unique 16 digit string
 * @returns 16 digit string
 */
export const generateUniqueId = () => {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let id = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    id += characters[randomIndex];
  }
  return Date.now().toString(16) + id;
};
