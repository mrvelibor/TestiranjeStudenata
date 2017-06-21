import {Question} from "./question";
import {SingleChoiceAnswer} from "./single-choice-answer";
import {MultipleChoiceAnswer} from "./multiple-choice-answer";
export class StudentExamQuestion {
  studentExamQuestionId: number;
  question: Question;
  answerStatement: boolean;
  answerValue: number;
  singleChoiceAnswer: SingleChoiceAnswer;
  singleChoiceAnswerId: number;
  multipleChoiceAnswers: MultipleChoiceAnswer[];
  multipleChoiceAnswerIds: number[];
}
