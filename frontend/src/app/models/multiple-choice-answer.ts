export class MultipleChoiceAnswer {
  multipleChoiceAnswerId: number;
  text: string;
  imageUrl: string;
  answerCorrect: boolean;

  constructor(multipleChoiceAnswerId: number = null) {
    this.multipleChoiceAnswerId = multipleChoiceAnswerId;
  }

}
