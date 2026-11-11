/**
 * Utility functions for Negative Marking calculation verification and educational examples.
 * Follows the PRD specification:
 * Score = (Correct Answers × Marks per Correct Answer) − (Wrong Answers × Penalty per Wrong Answer)
 * Accuracy = (Correct Answers / Attempted Questions) × 100
 * Break-even Probability = Penalty / (Positive Marks + Penalty) × 100
 */

export interface ExamScoreResult {
  correctAnswers: number;
  wrongAnswers: number;
  unattempted: number;
  positiveMarks: number;
  negativeMarks: number;
  finalScore: number;
}

export function roundToTwoDecimals(value: number): number {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

export function calculateExamScore(
  correctAnswers: number,
  wrongAnswers: number,
  marksPerCorrect: number,
  penaltyPerWrong: number,
  totalQuestions?: number
): ExamScoreResult {
  const safeCorrect = Math.max(0, Math.floor(correctAnswers));
  const safeWrong = Math.max(0, Math.floor(wrongAnswers));
  const attempted = safeCorrect + safeWrong;
  const unattempted = totalQuestions !== undefined ? Math.max(0, totalQuestions - attempted) : 0;

  const positiveMarks = roundToTwoDecimals(safeCorrect * marksPerCorrect);
  const negativeMarks = roundToTwoDecimals(safeWrong * penaltyPerWrong);
  const finalScore = roundToTwoDecimals(positiveMarks - negativeMarks);

  return {
    correctAnswers: safeCorrect,
    wrongAnswers: safeWrong,
    unattempted,
    positiveMarks,
    negativeMarks,
    finalScore,
  };
}

export function calculateAccuracy(
  correctAnswers: number,
  attemptedQuestions: number
): { accuracy: number | null; formatted: string } {
  if (attemptedQuestions <= 0) {
    return { accuracy: null, formatted: 'अपरिभाषित (Undefined)' };
  }
  const pct = (correctAnswers / attemptedQuestions) * 100;
  const rounded = roundToTwoDecimals(pct);
  return { accuracy: rounded, formatted: `${rounded}%` };
}

export function calculateBreakEvenProbability(
  positiveMarks: number,
  penaltyPerWrong: number
): number {
  if (positiveMarks <= 0 || penaltyPerWrong < 0) return 0;
  const prob = (penaltyPerWrong / (positiveMarks + penaltyPerWrong)) * 100;
  return roundToTwoDecimals(prob);
}

export function getPenaltyByRatio(marksPerCorrect: number, ratio: '1/4' | '1/3' | '1/2' | '1/5'): number {
  switch (ratio) {
    case '1/4':
      return roundToTwoDecimals(marksPerCorrect * 0.25);
    case '1/3':
      return roundToTwoDecimals(marksPerCorrect / 3);
    case '1/2':
      return roundToTwoDecimals(marksPerCorrect * 0.5);
    case '1/5':
      return roundToTwoDecimals(marksPerCorrect * 0.2);
    default:
      return 0;
  }
}
