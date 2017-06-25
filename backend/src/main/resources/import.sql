INSERT INTO user_role(ROLE_ID, ROLE_NAME) VALUES(1, 'ROLE_ADMIN');
INSERT INTO user_role(ROLE_ID, ROLE_NAME) VALUES(2, 'ROLE_PROFESOR');
INSERT INTO user_role(ROLE_ID, ROLE_NAME) VALUES(3, 'ROLE_STUDENT');

INSERT INTO user(email, full_name, password, username, user_role) VALUES('admin@localhost', 'Admir Master', 'passw0rd', 'admin', 1);
INSERT INTO user(email, full_name, password, username, user_role) VALUES('profesor1@localhost', 'Profesor Doktor', 'passw0rd', 'profesor1', 2);
INSERT INTO user(email, full_name, password, username, user_role) VALUES('profesor2@localhost', 'Profesor Doktro', 'passw0rd', 'profesor2', 2);
INSERT INTO user(email, full_name, password, username, user_role) VALUES('student@localhost', 'Student Test', 'passw0rd', 'student', 3);
INSERT INTO user(email, full_name, password, username, user_role) VALUES('velibor.bacujkov.2493@metropolitan.ac.rs', 'Velibor Bačujkov', 'passw0rd', 'velibor.bacujkov.2493', 3);
