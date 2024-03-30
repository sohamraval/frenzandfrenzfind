
export default interface Question {
    text: string;
    answer: Answer;
    hint: string;
}

export interface Answer {
    text: string;
    answerPositions: number[]
} 