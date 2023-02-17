// DESCRIPTION:
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// EXAMPLE:
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

export const moveZeros = (
  arr: (string | number | boolean | null | object | Array<[]>)[]
) => {
  let i = 0;
  let j = 1;
  while (j < arr.length) {
    if (arr[i] !== 0) {
      i++;
    } else if (arr[j] !== 0 && arr[i] === 0) {
      arr[i] = arr[j];
      arr[j] = 0;
      i++;
    }
    j++;
  }
  return arr;
};

// Alternate Solution
// export const moveZeros = (
//   arr: (string | number | boolean | null | object | Array<[]>)[]
// ) => {
//   const filteredArray = arr.filter((x) => x !== 0);
//   return [
//     ...filteredArray,
//     ...Array(arr.length - filteredArray.length).fill(0),
//   ];
// };
