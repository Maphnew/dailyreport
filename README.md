# 금호섬유공업 Daily Report

1. nodejs/npm 설치
2. git 설치, dailyreort clone 하기
3. node_module 설치
```bash
$ npm install
```  
4. .env 파일작성(root 폴더)
- 예시  
```
MAIL_ID = 'your.mail@gmail.com'
MAIL_PASS = 'your.mail.password'

DB_HOST=192.168.100.100
DB_PORT=3306
DB_USER=root
DB_PASS=passwod
DB_DATABASE=UYeG_KUMHO
DB_MAIL_ADDRESS_TABLE = 'EmailAddress'
DB_MAIL_ADDRESS_COLUMN = 'email'

FILE_NAME='dailyreport.xlsx'
FORM_FILE='dailyreport_form.xlsx'
```
5. 메일주소 데이터베이스 저장확인
6. gmail 설정 변경
- Access allowed for less secure apps  
7. batch 파일 경로 수정(dailyreport.bat)  
8. 실행 테스트
- dailyreport.bat 파일 실행 또는
```bash
$ node app.js
```
9. 작업 스케줄러 등록