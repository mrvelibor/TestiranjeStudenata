export class SingleChoiceAnswer {
  singleChoiceAnswerId: number;
  text: string;
  imageUrl: string;

  constructor(singleChoiceAnswerId: number = null) {
    this.singleChoiceAnswerId = singleChoiceAnswerId;
  }

}
