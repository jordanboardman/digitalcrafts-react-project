const incrementCount = (num) => {
  return {
    type: "INCREMENT",
    count: num,
  };
};

export default incrementCount;
