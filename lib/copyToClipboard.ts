const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
  return text;
};

export default copyToClipboard;
