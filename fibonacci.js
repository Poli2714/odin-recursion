'use strict';

// With iteration
const fibs = function (n) {
  const fibSequence = [];
  let i = 0;

  while (fibSequence.length < n) {
    i === 0 || i === 1
      ? fibSequence.push(i)
      : fibSequence.push(fibSequence[i - 2] + fibSequence[i - 1]);
    i += 1;
  }

  return fibSequence;
};

// With recursion
const getFibSequence = function (n) {
  const fibSequence = [];

  function fibsRec(n) {
    return n < 2 ? n : fibsRec(n - 1) + fibsRec(n - 2);
  }

  for (let i = 0; i < n; i++) {
    fibSequence.push(fibsRec(i));
  }

  return fibSequence;
};
