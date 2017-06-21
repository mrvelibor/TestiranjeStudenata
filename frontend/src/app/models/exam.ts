import {Course} from "./course";
import {StudentExam} from "./student-exam";
export class Exam {
  examId: number;
  course: Course;
  name: string;
  description: string;
  numberOfQuestions: number;
  studentExams: StudentExam[];
}
