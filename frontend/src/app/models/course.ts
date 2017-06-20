import {Exam} from "./exam";
import {StudentExam} from "./student-exam";
export class Course {
  courseId: number;
  courseCode: string;
  name: string;
  exams: Exam[];
  studentExams: StudentExam[];
}
