import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateExamScore,
  calculateAccuracy,
  calculateBreakEvenProbability,
  getPenaltyByRatio,
  roundToTwoDecimals,
} from './markingCalculations';

test('calculateExamScore computes correct positive, negative and net marks', () => {
  // Example 1: +1 for correct, -0.25 for incorrect (100 Qs: 70 correct, 20 wrong, 10 unattempted)
  const res1 = calculateExamScore(70, 20, 1, 0.25, 100);
  assert.equal(res1.positiveMarks, 70);
  assert.equal(res1.negativeMarks, 5); // 20 * 0.25 = 5
  assert.equal(res1.finalScore, 65);
  assert.equal(res1.unattempted, 10);

  // Example 2: +2 for correct, -0.5 for incorrect (UPSC / SSC: 60 correct, 30 wrong)
  const res2 = calculateExamScore(60, 30, 2, 0.5);
  assert.equal(res2.positiveMarks, 120);
  assert.equal(res2.negativeMarks, 15); // 30 * 0.5 = 15
  assert.equal(res2.finalScore, 105);

  // Example 3: +4 for correct, -1 for incorrect (NEET / JEE: 40 correct, 10 wrong)
  const res3 = calculateExamScore(40, 10, 4, 1);
  assert.equal(res3.positiveMarks, 160);
  assert.equal(res3.negativeMarks, 10);
  assert.equal(res3.finalScore, 150);

  // Can score be negative if wrong answers dominate?
  const resNegative = calculateExamScore(5, 40, 1, 0.25);
  // positive = 5, negative = 10 -> final = -5
  assert.equal(resNegative.finalScore, -5);
});

test('calculateAccuracy computes percentage accurately and handles zero attempts', () => {
  assert.equal(calculateAccuracy(45, 50).formatted, '90%');
  assert.equal(calculateAccuracy(70, 100).formatted, '70%');
  assert.equal(calculateAccuracy(33, 50).formatted, '66%');
  assert.equal(calculateAccuracy(0, 0).accuracy, null);
  assert.equal(calculateAccuracy(0, 0).formatted, 'अपरिभाषित (Undefined)');
});

test('calculateBreakEvenProbability computes exact break-even odds', () => {
  // For +1 mark and 0.25 penalty: 0.25 / 1.25 = 20%
  assert.equal(calculateBreakEvenProbability(1, 0.25), 20);

  // For +4 marks and 1 penalty (NEET): 1 / 5 = 20%
  assert.equal(calculateBreakEvenProbability(4, 1), 20);

  // For +2 marks and 0.67 penalty (1/3 ratio): 0.67 / 2.67 ≈ 25.09%
  const be13 = calculateBreakEvenProbability(2, 0.67);
  assert.ok(be13 > 25 && be13 < 26);
});

test('getPenaltyByRatio returns exact fraction amounts', () => {
  assert.equal(getPenaltyByRatio(1, '1/4'), 0.25);
  assert.equal(getPenaltyByRatio(2, '1/4'), 0.5);
  assert.equal(getPenaltyByRatio(4, '1/4'), 1);

  assert.equal(getPenaltyByRatio(1, '1/2'), 0.5);
  assert.equal(getPenaltyByRatio(2, '1/2'), 1);

  assert.equal(getPenaltyByRatio(1, '1/5'), 0.2);
  assert.equal(getPenaltyByRatio(5, '1/5'), 1);

  assert.equal(roundToTwoDecimals(getPenaltyByRatio(3, '1/3')), 1);
});
