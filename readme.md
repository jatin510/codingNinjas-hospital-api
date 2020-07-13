# HOSPITAL API

API for hospital.

- API for the Covid hospital for doctors, patients and reports.

### Features

    - Register doctors
    - Login for doctors
    - Register patients
    - Create Covid-19 test result
    - Make list of all reports of a patients
    - Make list of all reports with a specified status

### Database Models

    - Doctor (name, mobile, password)
    - Patient (name, address, mobile, reports[])
    - Report (doctor, patient, status, date)

### Folder Structure

    - config (configuration files)
      - moongose.js (for database connection)
      - passport-jwt-strategy.js (for passport-jwt configuration)
    - controllers
        - doctor_controller.js (contains controllers related to doctors)
        - patient_controller.js (contains controllers related to patients)
        - report_controller.js (contains controllers related to reports)
    - models
      - doctor.js (for creating doctor database model)
      - patient.js (for creating patient database model)
      - report.js (for creating report database model)
    - routes
      -api
        -v1
           - doctors.js (contains routes related to doctors)
           - patients.js (contains routes related to patients)
           - reports.js (contains routes related to reports)
    - index.js
    - package.json
    - package-lock.json

### How to Start

     npm start

### When Running in Local System

     run the the code in postman with corresponding routes and data

### Sample Postman API

https://www.getpostman.com/collections/2f482e127f4852e0b38d
