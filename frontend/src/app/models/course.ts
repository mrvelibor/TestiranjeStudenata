import {Exam} from "./exam";
export class Course {
  courseId: number;
  courseCode: string;
  name: string;
  exams: Exam[];
}
