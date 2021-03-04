# Course Overload API

## How To

- [ ] clone this repo
- [ ] start the server with environment variables
  - [ ] PORT (e.g. 3000)
  - [ ] ALGORITHM (e.g. sha256)
  - [ ] API_KEY (will be generated in following steps)
- [ ] send a POST request to localhost:<PORT>/users/new
  - [ ] include a form body with an email key
  - [ ] get the api key in the response
  - [ ] if you need to regenerate your api key with the same email, send a PATCH request to localhost:<PORT>/users/me/regenerate_key
    - [ ] be sure to include the email key form body
- [ ] update your API_KEY environment variable
- [ ] run `npm test` to run tests
- [ ] run `npm start` to utilize the api yourself
  - [ ] you'll have to include the header `Authorization: Api-Key <API_KEY>` in your API calls

## Pitch

I want to write an API that catalogs the courses available at universities. People with access to private university catalogs will be able to contribute. I want to use this information for a front end project that will help people organize the courses they want with attention paid to prerequisites and things like that. I want to be able use my web scraper project in BEW 2.5 to import data from this project.

## Resources
University - name, majors, courses_offered
Major - name, university, courses_required
Courses - university, department, code, name, description, units, prerequisites, corequisites, postrequisites (courses that have this course as a pre or corequisite)
## Plan

### Setup
- [x] README.md
- [x] init package.json
- [x] express
- [x] env & .gitignore
- [x] github repo
- [x] M+C+tests setup
- [x] server.js
- [x] mongodb

### Courses
- [x] tests for course endpoints
- [x] course model
- [x] course CREATE routes
- [x] course READ routes
- [x] course UPDATE routes
- [x] course DESTROY routes
- [x] passing course endpoint tests
- [x] tests for course course associations
- [x] passing tests for course course associations

### Majors
- [x] tests for major endpoints
- [x] major model
- [x] major CREATE routes
- [x] major READ routes
- [x] major UPDATE routes
- [x] major DESTROY routes
- [x] passing major endpoint tests
- [x] tests for major course associations
- [x] passing tests for major course associations

### Schools
- [x] tests for school endpoints
- [x] school model
- [x] school CREATE routes
- [x] school READ routes
- [x] school UPDATE routes
- [x] school DESTROY routes
- [x] passing school endpoint tests

### Refactor to have schools be central
- [x] course endpoints -> by school
  - [x] update tests
  - [x] add school to course model
  - [x] update routes
  - [x] passing all tests
- [x] major endpoints -> by school
  - [x] update tests
  - [x] add school to major model
  - [x] update routes
  - [x] passing all tests

### Authentication (Not TDD since idk how to write tests for passport)
- [x] user model
- [x] api key generation
- [x] add auth to course routes
- [x] add auth to course tests
- [x] add auth to major routes
- [x] add auth to major tests
- [x] add auth to school routes
- [x] add auth to school tests