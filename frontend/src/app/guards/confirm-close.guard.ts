import {Injectable} from '@angular/core';
import {Router, CanActivate, CanDeactivate} from '@angular/router';
import {ExamTestComponent} from "../pages/student-panel/exam-test/exam-test.component";

@Injectable()
export class ConfirmCloseGuard implements CanDeactivate<ExamTestComponent> {

  canDeactivate(target: ExamTestComponent) {
    if(target.examStarted) {
      return confirm('Da li sigurno želite da napustite test? Kasnije nećete moći da se vratite.');
    }
    return true;
  }
}
