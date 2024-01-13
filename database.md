# Database requirements, relationship, and design.

-  PK: Primary Key
-  FK: Foreign Key
-  TTL: Time To Live (record gets deleted after this time)

# Different tables

## User (users)

Store user data

| user_ID     | name   | created_at | password |
| ----------- | ------ | ---------- | -------- |
| String (PK) | String | Number     | String   |

## Session (sessions)

Sign in session data for user sign in

| session_ID  | user_ID    | created_at | expire_at    |
| ----------- | ---------- | ---------- | ------------ |
| String (PK) | String(FK) | Number     | Number (TTL) |

## Exams (exams)

MCQ Exam details

| exam_ID     | name   | created_at | description | start_time | end_time | languages     | sections      |
| ----------- | ------ | ---------- | ----------- | ---------- | -------- | ------------- | ------------- |
| String (PK) | String | Number     | String      | Number     | Number   | Array(String) | Array(String) |

## Questions (questions)

| question_ID | exam_ID     | description         | options                          | correct_option | image_link | section |
| ----------- | ----------- | ------------------- | -------------------------------- | -------------- | ---------- | ------- |
| String (PK) | String (FK) | MAP(language: text) | MAP(Number: MAP(language: text)) | Number         | String     | String  |

## Exam Attempt Record (exam_attempt_record)

| attempt_ID | exam_ID    | user_ID    | answers                  | result                                                     |
| ---------- | ---------- | ---------- | ------------------------ | ---------------------------------------------------------- |
| String(PK) | String(FK) | String(FK) | Map(question_ID: Number) | MAP(section_name: MAP(correct: Number, Incorrect: Number)) |
