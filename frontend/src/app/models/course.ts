import {Exam} from "./exam";
import {StudentExam} from "./student-exam";
import {User} from "./user";
export class Course {
  courseId: number;
  courseCode: string;
  name: string;
  exams: Exam[];
  studentExams: StudentExam[];
  users: User[];
}
