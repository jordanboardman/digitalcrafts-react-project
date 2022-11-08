const decrementCount = (num) => {
  return {
    type: "DECREMENT",
    count: num,
  };
};

export default decrementCount;
