import {StudentExamQuestion} from "./student-exam-question";
import {User} from "./user";
import {Exam} from "./exam";
export class StudentExam {
  studentExamId: number;
  student: User;
  exam: Exam;
  startTime: Date;
  endTime: Date;
  points: number;
  questions: StudentExamQuestion[];
}
