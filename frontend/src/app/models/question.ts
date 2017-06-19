import {SingleChoiceAnswer} from "./single-choice-answer";
import {MultipleChoiceAnswer} from "./multiple-choice-answer";
export class Question {
  questionId: number;
  questionType: string;
  text: string;
  imageUrl: string;
  correctStatement: boolean;
  correctValue: number;
  singleChoiceAnswers: SingleChoiceAnswer[];
  singleChoiceCorrectAnswer: SingleChoiceAnswer;
  multipleChoiceAnswers: MultipleChoiceAnswer[];
}
