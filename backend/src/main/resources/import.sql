/*
 * USER ROLES
 */
INSERT INTO user_role(role_id, role_name) VALUES (1, 'ROLE_ADMIN');
INSERT INTO user_role(role_id, role_name) VALUES (2, 'ROLE_PROFESOR');
INSERT INTO user_role(role_id, role_name) VALUES (3, 'ROLE_STUDENT');

/*
 * USERS
 */
INSERT INTO user(email, full_name, password, username, user_role) VALUES ('admin@localhost', 'Admir Master', 'passw0rd', 'admin', 1);
INSERT INTO user(email, full_name, password, username, user_role) VALUES ('profesor1@localhost', 'Profesor Doktor', 'passw0rd', 'profesor1', 2);
INSERT INTO user(email, full_name, password, username, user_role) VALUES ('profesor2@localhost', 'Profesor Doktro', 'passw0rd', 'profesor2', 2);
INSERT INTO user(email, full_name, password, username, user_role) VALUES ('student@localhost', 'Student Test', 'passw0rd', 'student', 3);
INSERT INTO user(email, full_name, password, username, user_role) VALUES ('velibor.bacujkov.2493@metropolitan.ac.rs', 'Velibor Bačujkov', 'passw0rd', 'velibor.bacujkov.2493', 3);

/*
 * COURSES
 */
INSERT INTO course(course_id, course_code, name) VALUES (1, 'AA001', 'Predmet Jedan');
INSERT INTO course(course_id, course_code, name) VALUES (2, 'AA002', 'Predmet Dva');
INSERT INTO course(course_id, course_code, name) VALUES (3, 'AA003', 'Predmet Tri');

/*
 * EXAMS
 */
INSERT INTO exam(exam_id, description, name, number_of_questions, course_id) VALUES (11, 'Prvi prvi ispit', 'PPI', 8, 1);
INSERT INTO exam(exam_id, description, name, number_of_questions, course_id) VALUES (12, 'Prvi drugi ispit', 'PDI', 5, 1);
INSERT INTO exam(exam_id, description, name, number_of_questions, course_id) VALUES (13, 'Prvi treći ispit', 'PTI', 5, 1);
INSERT INTO exam(exam_id, description, name, number_of_questions, course_id) VALUES (21, 'Drugi prvi ispit', 'DPI', 5, 2);
INSERT INTO exam(exam_id, description, name, number_of_questions, course_id) VALUES (22, 'Drugi drugi ispit', 'DDI', 5, 2);
INSERT INTO exam(exam_id, description, name, number_of_questions, course_id) VALUES (23, 'Drugi treći ispit', 'DTI', 5, 2);
INSERT INTO exam(exam_id, description, name, number_of_questions, course_id) VALUES (31, 'Treći prvi ispit', 'TPI', 5, 3);
INSERT INTO exam(exam_id, description, name, number_of_questions, course_id) VALUES (32, 'Treći drugi ispit', 'TDI', 5, 3);
INSERT INTO exam(exam_id, description, name, number_of_questions, course_id) VALUES (33, 'Treći treći ispit', 'TTI', 5, 3);

/*
 * QUESTIONS TrueFalse
 */
INSERT INTO question(question_id, exam_id, question_type, text, correct_statement) VALUES (111, 11, 'truefalse', 'Java je programski jezik', 1);
INSERT INTO question(question_id, exam_id, question_type, text, correct_statement) VALUES (115, 11, 'truefalse', 'Windows operativni sistem je baziran na Linux-u.', 0);

/*
 * QUESTIONS Numerical
 */
INSERT INTO question(question_id, exam_id, question_type, text, correct_value) VALUES (112, 11, 'numerical', 'Koliko je 2+2/2', 3);
INSERT INTO question(question_id, exam_id, question_type, text, correct_value) VALUES (116, 11, 'numerical', 'Koliko je 1+1/2', 1.5);

/*
 * QUESTIONS Single
 */
INSERT INTO question(question_id, exam_id, question_type, text) VALUES (113, 11, 'single', 'Koji od navedenih pojmova nije programski jezik?');
INSERT INTO single_choice_answer(single_choice_answer_id, question_id, text) VALUES (1131, 113, 'CD');
INSERT INTO single_choice_answer(single_choice_answer_id, question_id, text) VALUES (1132, 113, 'C#');
INSERT INTO single_choice_answer(single_choice_answer_id, question_id, text) VALUES (1133, 113, 'Java');
UPDATE question SET single_choice_answer_id=1131 WHERE question_id=113;

INSERT INTO question(question_id, exam_id, question_type, text) VALUES (117, 11, 'single', 'Koji od navedenih pojmova je Java frejmvork?');
INSERT INTO single_choice_answer(single_choice_answer_id, question_id, text) VALUES (1171, 117, 'Spring');
INSERT INTO single_choice_answer(single_choice_answer_id, question_id, text) VALUES (1172, 117, 'Angular');
INSERT INTO single_choice_answer(single_choice_answer_id, question_id, text) VALUES (1173, 117, 'JavaScript');
UPDATE question SET single_choice_answer_id=1173 WHERE question_id=117;

/*
 * QUESTIONS Multiple
 */
INSERT INTO question(question_id, exam_id, question_type, text) VALUES (114, 11, 'multiple', 'Štiklirajte tačna tvrđenja.');
INSERT INTO multiple_choice_answer(multiple_choice_answer_id, question_id, text, answer_correct) VALUES (1141, 114, 'Android radi na operativnom sistemu Linux.', 1);
INSERT INTO multiple_choice_answer(multiple_choice_answer_id, question_id, text, answer_correct) VALUES (1142, 114, 'iOS je operativni sistem za mobilne uređaje.', 1);
INSERT INTO multiple_choice_answer(multiple_choice_answer_id, question_id, text, answer_correct) VALUES (1143, 114, 'Windows 10 desktop računari i mobilni uređaji koriste isti operativni sistem.', 0);

INSERT INTO question(question_id, exam_id, question_type, text) VALUES (118, 11, 'multiple', 'Koji od navedenih fakulteta pripadaju Univerzitetu Metropolitan?');
INSERT INTO multiple_choice_answer(multiple_choice_answer_id, question_id, text, answer_correct) VALUES (1181, 118, 'FPM', 0);
INSERT INTO multiple_choice_answer(multiple_choice_answer_id, question_id, text, answer_correct) VALUES (1182, 118, 'FDU', 1);
INSERT INTO multiple_choice_answer(multiple_choice_answer_id, question_id, text, answer_correct) VALUES (1183, 118, 'FIT', 1);