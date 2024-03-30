import Question from './Question.interface';

export default interface Level {
    level: number;
    questions: Array<Question>;
    backgroundImage: {
        src: string;
        alt: string;
    };
    duration: number
}