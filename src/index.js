import "./styles.css";

/**
 * generate random number
 * @param {Number} min minimun number
 * @param {Number} max maximum number
 * @returns {Number} random number
 * @see https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

/**
 * generate array of random numbers
 * @param {Number} times elements count
 * @returns {Number[]} array of random numbers
 */
export function getRandomNumbers(times = 100) {
  const randomNumbers = [];
  for (let i = 0; i < times; i++) {
    randomNumbers.push(getRandomInt(1, 100));
  }
  return randomNumbers;
}
/**
 * A1:100個の自然数の配列を素数、偶数、奇数の配列に分類する関数
 */
function practice01() {
  const result = classifyNum();
  console.log("-----素数配列------");
  console.log(result.primeNumberArr);
  console.log("-----奇数配列------");
  console.log(result.oddArr);
  console.log("-----偶数配列------");
  console.log(result.evenArr);
}
/**
 * ランダムな自然数を生成し、素数、奇数、偶数の配列を返す
 */
function classifyNum() {
  const arr = getRandomNumbers();
  const result = {
    primeNumberArr: [],
    evenArr: [],
    oddArr: []
  };

  let i = 0;
  while (i < 100) {
    if (isPrimeNum(arr[i])) result.primeNumberArr.push(arr[i]);
    else if (isOddNum(arr[i])) result.oddArr.push(arr[i]);
    else if (isEvenNum(arr[i])) result.evenArr.push(arr[i]);
    i += 1;
  }
  return result;
}
/**
 * 素数であるかどうかを判定する
 * @param {Number} num 判定したい数値
 * @returns {Bool} 素数であればtrueを返す
 */
function isPrimeNum(num) {
  let flag = true;
  if (num === 1) flag = false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      flag = false;
      break;
    }
  }
  return flag;
}
/**
 * 奇数であるかどうかを判定する
 * @param {Number} num 判定したい数値
 * @returns {Bool} 奇数であればtrueを返す
 */
function isOddNum(num) {
  if (num % 2 === 1) return true;
}
/**
 * 偶数であるかどうかを判定する
 * @param {Number} num 判定したい数値
 * @returns {Bool} 偶数であればtrueを返す
 */
function isEvenNum(num) {
  if (num % 2 === 0) return true;
}

/**
 * A2:1 ~ 1000までの任意の自然数を素因数分解するプログラム
 */
function practice02() {
  const num = getRandomInt(1, 1000);
  const primeNumArr = getPrimeNumArr();
  const primeFactorizationArr = doPrimeFactorization(num, primeNumArr);
  console.log(`${num}の素因数分解配列`);
  console.log(primeFactorizationArr);
}

/**
 * num を素因数分解し、配列で返す
 * @param {Number} num ランダムな数値
 * @param {Number[]} primeNumArr 1 ~ 1000までの素数の配列
 * @returns {Number[]} numを素因数分解した配列
 */
function doPrimeFactorization(num, primeNumArr) {
  const primeFactorizationArr = [];
  let quotient = num;

  if (isPrimeNum(num) || num === 1) {
    primeFactorizationArr.push(num);
  } else {
    for (let i = 0; num > primeNumArr[i]; i++) {
      while (quotient % primeNumArr[i] === 0) {
        primeFactorizationArr.push(primeNumArr[i]);
        quotient = Math.floor(quotient / primeNumArr[i]);
      }
    }
  }
  return primeFactorizationArr;
}

/**
 * 1 ~ 1000までの素数の配列を作成する関数
 */
function getPrimeNumArr() {
  const primeNumArr = [];

  let i = 1;
  while (i < 1000) {
    if (isPrimeNum(i)) primeNumArr.push(i);
    i += 1;
  }
  return primeNumArr;
}

/**
 * A3: 2 ~ 1000までの自然数の中で一番因数の多い数を特定する関数
 */
function practice03() {
  const primeNumArr = getPrimeNumArr();
  const result = findMostFactorsNum(primeNumArr);
  console.log(`2 ~ 1000までの自然数の中で一番因数の多い数は「${result}」`);
}
/**
 * num を素因数分解し、配列で返す
 * @param {Number[]} primeNumArr 1 ~ 1000までの素数の配列
 * @returns {Number} 2 ~ 1000までの間で最も因数が多い数
 */
function findMostFactorsNum(primeNumArr) {
  const arr = generateArr(2, 1000);
  let result = 2;
  let maxLength = 0;
  let tmp;

  let i = 0;
  while (i < arr.length) {
    tmp = doPrimeFactorization(arr[i], primeNumArr);
    if (maxLength < tmp.length) {
      maxLength = tmp.length;
      result = arr[i];
    }
    i += 1;
  }
  return result;
}

/**
 * min から max までの配列を生成
 * @param {Number} min 最小数値
 * @param {Number} max 最大数値
 * @returns {Number[]} min ~ max までの数値が格納された配列
 */
function generateArr(min, max) {
  const arr = [];

  let i = min;
  while (i <= max) {
    arr.push(i);
    i += 1;
  }
  return arr;
}

practice01();
practice02();
practice03();
