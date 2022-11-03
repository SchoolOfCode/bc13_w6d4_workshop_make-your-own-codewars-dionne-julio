//👉 Write your tests below here:
// test if its a number
// function calculator(num1, num2, operator)
// Remember to impot the function 
import {expect, test} from '@jest/globals';
import{
  calculator
  
} from './main'


test(`This test the plus operator`, () =>{
  const actual = calculator(2, '+', 2)
  const expected = 4

  expect(actual).toEqual(expected);
})

test(`This test the minus operator`, () =>{
  const actual = calculator(6, '-', 2)
  const expected = 4

  expect(actual).toEqual(expected);
})

test(`This test the multiply operator`, () =>{
  const actual = calculator(6, '*', 2)
  const expected = 12

  expect(actual).toEqual(expected);
})
