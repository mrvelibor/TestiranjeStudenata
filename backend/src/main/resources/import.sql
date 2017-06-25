/* */
/* USER ROLES */
/* */
INSERT INTO user_role(role_id, role_name) VALUES (1, 'ROLE_ADMIN');
INSERT INTO user_role(role_id, role_name) VALUES (2, 'ROLE_PROFESOR');
INSERT INTO user_role(role_id, role_name) VALUES (3, 'ROLE_STUDENT');

/* */
/* USERS */
/* */
INSERT INTO user(user_id, email, full_name, password, username, user_role) VALUES (1, 'admin@localhost', 'Admir Master', 'passw0rd', 'admin', 1);
INSERT INTO user(user_id, email, full_name, password, username, user_role) VALUES (2, 'profesor1@localhost', 'Profesor Doktor', 'passw0rd', 'profesor1', 2);
INSERT INTO user(user_id, email, full_name, password, username, user_role) VALUES (3, 'profesor2@localhost', 'Profesor Doktro', 'passw0rd', 'profesor2', 2);
INSERT INTO user(user_id, email, full_name, password, username, user_role) VALUES (4, 'student@localhost', 'Student Test', 'passw0rd', 'student', 3);
INSERT INTO user(user_id, email, full_name, password, username, user_role) VALUES (5, 'velibor.bacujkov.2493@metropolitan.ac.rs', 'Velibor Bačujkov', 'passw0rd', 'velibor.bacujkov.2493', 3);

/* */
/* COURSES */
/* */
INSERT INTO course(course_id, course_code, name) VALUES (1, 'AA001', 'Predmet Jedan');
INSERT INTO course(course_id, course_code, name) VALUES (2, 'AA002', 'Predmet Dva');
INSERT INTO course(course_id, course_code, name) VALUES (3, 'AA003', 'Predmet Tri');

/* */
/* USER COURSES */
/* */
INSERT INTO student_course(course_id, user_id) VALUES (1, 2);
INSERT INTO student_course(course_id, user_id) VALUES (2, 2);
INSERT INTO student_course(course_id, user_id) VALUES (3, 2);
INSERT INTO student_course(course_id, user_id) VALUES (1, 4);
INSERT INTO student_course(course_id, user_id) VALUES (2, 4);
INSERT INTO student_course(course_id, user_id) VALUES (3, 4);
INSERT INTO student_course(course_id, user_id) VALUES (1, 3);
INSERT INTO student_course(course_id, user_id) VALUES (1, 5);

/* */
/* EXAMS */
/* */
INSERT INTO exam(exam_id, description, name, number_of_questions, course_id) VALUES (11, 'Prvi prvi ispit', 'PPI', 8, 1);
INSERT INTO exam(exam_id, description, name, number_of_questions, course_id) VALUES (12, 'Prvi drugi ispit', 'PDI', 4, 1);
INSERT INTO exam(exam_id, description, name, number_of_questions, course_id) VALUES (13, 'Prvi treći ispit', 'PTI', 4, 1);
INSERT INTO exam(exam_id, description, name, number_of_questions, course_id) VALUES (21, 'Drugi prvi ispit', 'DPI', 4, 2);
INSERT INTO exam(exam_id, description, name, number_of_questions, course_id) VALUES (22, 'Drugi drugi ispit', 'DDI', 4, 2);
INSERT INTO exam(exam_id, description, name, number_of_questions, course_id) VALUES (23, 'Drugi treći ispit', 'DTI', 4, 2);
INSERT INTO exam(exam_id, description, name, number_of_questions, course_id) VALUES (31, 'Treći prvi ispit', 'TPI', 4, 3);
INSERT INTO exam(exam_id, description, name, number_of_questions, course_id) VALUES (32, 'Treći drugi ispit', 'TDI', 4, 3);
INSERT INTO exam(exam_id, description, name, number_of_questions, course_id) VALUES (33, 'Treći treći ispit', 'TTI', 4, 3);

/* */
/* QUESTIONS TrueFalse */
/* */
INSERT INTO question(question_id, exam_id, question_type, text, correct_statement) VALUES (111, 11, 'truefalse', 'Java je programski jezik', 1);
INSERT INTO question(question_id, exam_id, question_type, text, correct_statement) VALUES (115, 11, 'truefalse', 'Windows operativni sistem je baziran na Linux-u.', 0);
INSERT INTO question(question_id, exam_id, question_type, text, correct_statement) VALUES (121, 12, 'truefalse', 'Tačno?', 1);
INSERT INTO question(question_id, exam_id, question_type, text, correct_statement) VALUES (131, 13, 'truefalse', 'Tačno?', 1);
INSERT INTO question(question_id, exam_id, question_type, text, correct_statement) VALUES (211, 21, 'truefalse', 'Tačno?', 1);
INSERT INTO question(question_id, exam_id, question_type, text, correct_statement) VALUES (221, 22, 'truefalse', 'Tačno?', 1);
INSERT INTO question(question_id, exam_id, question_type, text, correct_statement) VALUES (231, 23, 'truefalse', 'Tačno?', 1);
INSERT INTO question(question_id, exam_id, question_type, text, correct_statement) VALUES (311, 31, 'truefalse', 'Tačno?', 1);
INSERT INTO question(question_id, exam_id, question_type, text, correct_statement) VALUES (321, 32, 'truefalse', 'Tačno?', 1);
INSERT INTO question(question_id, exam_id, question_type, text, correct_statement) VALUES (331, 33, 'truefalse', 'Tačno?', 1);

/* */
/* QUESTIONS Numerical */
/* */
INSERT INTO question(question_id, exam_id, question_type, text, correct_value) VALUES (112, 11, 'numerical', 'Koliko je 2+2/2', 3);
INSERT INTO question(question_id, exam_id, question_type, text, correct_value) VALUES (116, 11, 'numerical', 'Koliko je 1+1/2', 1.5);
INSERT INTO question(question_id, exam_id, question_type, text, correct_value) VALUES (122, 12, 'numerical', 'Upiši 1:', 1);
INSERT INTO question(question_id, exam_id, question_type, text, correct_value) VALUES (132, 13, 'numerical', 'Upiši 1:', 1);
INSERT INTO question(question_id, exam_id, question_type, text, correct_value) VALUES (212, 21, 'numerical', 'Upiši 1:', 1);
INSERT INTO question(question_id, exam_id, question_type, text, correct_value) VALUES (222, 22, 'numerical', 'Upiši 1:', 1);
INSERT INTO question(question_id, exam_id, question_type, text, correct_value) VALUES (232, 23, 'numerical', 'Upiši 1:', 1);
INSERT INTO question(question_id, exam_id, question_type, text, correct_value) VALUES (312, 31, 'numerical', 'Upiši 1:', 1);
INSERT INTO question(question_id, exam_id, question_type, text, correct_value) VALUES (322, 32, 'numerical', 'Upiši 1:', 1);
INSERT INTO question(question_id, exam_id, question_type, text, correct_value) VALUES (332, 33, 'numerical', 'Upiši 1:', 1);

/* */
/* QUESTIONS Single */
/* */
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

INSERT INTO question(question_id, exam_id, question_type, text) VALUES (123, 12, 'single', 'Odaberi da:');
INSERT INTO single_choice_answer(single_choice_answer_id, question_id, text) VALUES (1231, 123, 'Da');
INSERT INTO single_choice_answer(single_choice_answer_id, question_id, text) VALUES (1232, 123, 'Ne');
INSERT INTO single_choice_answer(single_choice_answer_id, question_id, text) VALUES (1233, 123, 'No');
UPDATE question SET single_choice_answer_id=1231 WHERE question_id=123;

INSERT INTO question(question_id, exam_id, question_type, text) VALUES (133, 13, 'single', 'Odaberi da:');
INSERT INTO single_choice_answer(single_choice_answer_id, question_id, text) VALUES (1331, 133, 'Da');
INSERT INTO single_choice_answer(single_choice_answer_id, question_id, text) VALUES (1332, 133, 'Ne');
INSERT INTO single_choice_answer(single_choice_answer_id, question_id, text) VALUES (1333, 133, 'No');
UPDATE question SET single_choice_answer_id=1331 WHERE question_id=133;

INSERT INTO question(question_id, exam_id, question_type, text) VALUES (213, 21, 'single', 'Odaberi da:');
INSERT INTO single_choice_answer(single_choice_answer_id, question_id, text) VALUES (2131, 213, 'Da');
INSERT INTO single_choice_answer(single_choice_answer_id, question_id, text) VALUES (2132, 213, 'Ne');
INSERT INTO single_choice_answer(single_choice_answer_id, question_id, text) VALUES (2133, 213, 'No');
UPDATE question SET single_choice_answer_id=2131 WHERE question_id=213;

INSERT INTO question(question_id, exam_id, question_type, text) VALUES (223, 22, 'single', 'Odaberi da:');
INSERT INTO single_choice_answer(single_choice_answer_id, question_id, text) VALUES (2231, 223, 'Da');
INSERT INTO single_choice_answer(single_choice_answer_id, question_id, text) VALUES (2232, 223, 'Ne');
INSERT INTO single_choice_answer(single_choice_answer_id, question_id, text) VALUES (2233, 223, 'No');
UPDATE question SET single_choice_answer_id=2231 WHERE question_id=223;

INSERT INTO question(question_id, exam_id, question_type, text) VALUES (233, 23, 'single', 'Odaberi da:');
INSERT INTO single_choice_answer(single_choice_answer_id, question_id, text) VALUES (2331, 233, 'Da');
INSERT INTO single_choice_answer(single_choice_answer_id, question_id, text) VALUES (2332, 233, 'Ne');
INSERT INTO single_choice_answer(single_choice_answer_id, question_id, text) VALUES (2333, 233, 'No');
UPDATE question SET single_choice_answer_id=2331 WHERE question_id=233;

INSERT INTO question(question_id, exam_id, question_type, text) VALUES (313, 31, 'single', 'Odaberi da:');
INSERT INTO single_choice_answer(single_choice_answer_id, question_id, text) VALUES (3131, 313, 'Da');
INSERT INTO single_choice_answer(single_choice_answer_id, question_id, text) VALUES (3132, 313, 'Ne');
INSERT INTO single_choice_answer(single_choice_answer_id, question_id, text) VALUES (3133, 313, 'No');
UPDATE question SET single_choice_answer_id=3131 WHERE question_id=313;

INSERT INTO question(question_id, exam_id, question_type, text) VALUES (323, 32, 'single', 'Odaberi da:');
INSERT INTO single_choice_answer(single_choice_answer_id, question_id, text) VALUES (3231, 323, 'Da');
INSERT INTO single_choice_answer(single_choice_answer_id, question_id, text) VALUES (3232, 323, 'Ne');
INSERT INTO single_choice_answer(single_choice_answer_id, question_id, text) VALUES (3233, 323, 'No');
UPDATE question SET single_choice_answer_id=3231 WHERE question_id=323;

INSERT INTO question(question_id, exam_id, question_type, text) VALUES (333, 33, 'single', 'Odaberi da:');
INSERT INTO single_choice_answer(single_choice_answer_id, question_id, text) VALUES (3331, 333, 'Da');
INSERT INTO single_choice_answer(single_choice_answer_id, question_id, text) VALUES (3332, 333, 'Ne');
INSERT INTO single_choice_answer(single_choice_answer_id, question_id, text) VALUES (3333, 333, 'No');
UPDATE question SET single_choice_answer_id=3331 WHERE question_id=333;

/* */
/* QUESTIONS Multiple */
/* */
INSERT INTO question(question_id, exam_id, question_type, text) VALUES (114, 11, 'multiple', 'Štiklirajte tačna tvrđenja.');
INSERT INTO multiple_choice_answer(multiple_choice_answer_id, question_id, text, answer_correct) VALUES (1141, 114, 'Android radi na operativnom sistemu Linux.', 1);
INSERT INTO multiple_choice_answer(multiple_choice_answer_id, question_id, text, answer_correct) VALUES (1142, 114, 'iOS je operativni sistem za mobilne uređaje.', 1);
INSERT INTO multiple_choice_answer(multiple_choice_answer_id, question_id, text, answer_correct) VALUES (1143, 114, 'Windows 10 desktop računari i mobilni uređaji koriste isti operativni sistem.', 0);

INSERT INTO question(question_id, exam_id, question_type, text) VALUES (118, 11, 'multiple', 'Koji od navedenih fakulteta pripadaju Univerzitetu Metropolitan?');
INSERT INTO multiple_choice_answer(multiple_choice_answer_id, question_id, text, answer_correct) VALUES (1181, 118, 'FPM', 0);
INSERT INTO multiple_choice_answer(multiple_choice_answer_id, question_id, text, answer_correct) VALUES (1182, 118, 'FDU', 1);
INSERT INTO multiple_choice_answer(multiple_choice_answer_id, question_id, text, answer_correct) VALUES (1183, 118, 'FIT', 1);

INSERT INTO question(question_id, exam_id, question_type, text) VALUES (124, 12, 'multiple', 'Štikliraj T:');
INSERT INTO multiple_choice_answer(multiple_choice_answer_id, question_id, text, answer_correct) VALUES (1241, 124, 'N', 0);
INSERT INTO multiple_choice_answer(multiple_choice_answer_id, question_id, text, answer_correct) VALUES (1242, 124, 'T', 1);
INSERT INTO multiple_choice_answer(multiple_choice_answer_id, question_id, text, answer_correct) VALUES (1243, 124, 'T', 1);

INSERT INTO question(question_id, exam_id, question_type, text) VALUES (134, 13, 'multiple', 'Štikliraj T:');
INSERT INTO multiple_choice_answer(multiple_choice_answer_id, question_id, text, answer_correct) VALUES (1341, 134, 'N', 0);
INSERT INTO multiple_choice_answer(multiple_choice_answer_id, question_id, text, answer_correct) VALUES (1342, 134, 'T', 1);
INSERT INTO multiple_choice_answer(multiple_choice_answer_id, question_id, text, answer_correct) VALUES (1343, 134, 'T', 1);

INSERT INTO question(question_id, exam_id, question_type, text) VALUES (214, 21, 'multiple', 'Štikliraj T:');
INSERT INTO multiple_choice_answer(multiple_choice_answer_id, question_id, text, answer_correct) VALUES (2141, 214, 'N', 0);
INSERT INTO multiple_choice_answer(multiple_choice_answer_id, question_id, text, answer_correct) VALUES (2142, 214, 'T', 1);
INSERT INTO multiple_choice_answer(multiple_choice_answer_id, question_id, text, answer_correct) VALUES (2143, 214, 'T', 1);

INSERT INTO question(question_id, exam_id, question_type, text) VALUES (224, 22, 'multiple', 'Štikliraj T:');
INSERT INTO multiple_choice_answer(multiple_choice_answer_id, question_id, text, answer_correct) VALUES (2241, 224, 'N', 0);
INSERT INTO multiple_choice_answer(multiple_choice_answer_id, question_id, text, answer_correct) VALUES (2242, 224, 'T', 1);
INSERT INTO multiple_choice_answer(multiple_choice_answer_id, question_id, text, answer_correct) VALUES (2243, 224, 'T', 1);

INSERT INTO question(question_id, exam_id, question_type, text) VALUES (234, 23, 'multiple', 'Štikliraj T:');
INSERT INTO multiple_choice_answer(multiple_choice_answer_id, question_id, text, answer_correct) VALUES (2341, 234, 'N', 0);
INSERT INTO multiple_choice_answer(multiple_choice_answer_id, question_id, text, answer_correct) VALUES (2342, 234, 'T', 1);
INSERT INTO multiple_choice_answer(multiple_choice_answer_id, question_id, text, answer_correct) VALUES (2343, 234, 'T', 1);

INSERT INTO question(question_id, exam_id, question_type, text) VALUES (314, 31, 'multiple', 'Štikliraj T:');
INSERT INTO multiple_choice_answer(multiple_choice_answer_id, question_id, text, answer_correct) VALUES (3141, 314, 'N', 0);
INSERT INTO multiple_choice_answer(multiple_choice_answer_id, question_id, text, answer_correct) VALUES (3142, 314, 'T', 1);
INSERT INTO multiple_choice_answer(multiple_choice_answer_id, question_id, text, answer_correct) VALUES (3143, 314, 'T', 1);

INSERT INTO question(question_id, exam_id, question_type, text) VALUES (324, 32, 'multiple', 'Štikliraj T:');
INSERT INTO multiple_choice_answer(multiple_choice_answer_id, question_id, text, answer_correct) VALUES (3241, 324, 'N', 0);
INSERT INTO multiple_choice_answer(multiple_choice_answer_id, question_id, text, answer_correct) VALUES (3242, 324, 'T', 1);
INSERT INTO multiple_choice_answer(multiple_choice_answer_id, question_id, text, answer_correct) VALUES (3243, 324, 'T', 1);

INSERT INTO question(question_id, exam_id, question_type, text) VALUES (334, 33, 'multiple', 'Štikliraj T:');
INSERT INTO multiple_choice_answer(multiple_choice_answer_id, question_id, text, answer_correct) VALUES (3341, 334, 'N', 0);
INSERT INTO multiple_choice_answer(multiple_choice_answer_id, question_id, text, answer_correct) VALUES (3342, 334, 'T', 1);
INSERT INTO multiple_choice_answer(multiple_choice_answer_id, question_id, text, answer_correct) VALUES (3343, 334, 'T', 1);
