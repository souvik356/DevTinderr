# Waterfall model :-
1) Requirement :- Project manager
2) Design :- EM, Senior engineer
3) Development :- SDE1,SDE2
4) Testing:- SDET
5) Deployment :- DevOps engineer
6) Maintainence

# monolith architecture :- 
Database server, frontend , email services, auth , analytics all the services are written in one codebase which refers to as monolithic architecture . Here many developers are working in single codebase for one project

# microservice architecture :- 
service refers to project example there is a microservice only for frontend, similarly microservice for email service , microservice for analytics. all the services can be divided into multiple services and can be maintained individually.

# dev speed :- dev speed is slower in monolith
# code repo :- code repo is huge in monolith and we need to compile everything before compiling
# scalability :- scaling is slower in monolithic
# Deployment :- deploying in monolith is easy with single click but in microservice we need to delpoy eacg service individually.
# tech stack :- tech stack is dependent on monolith where in backend we can only use node.js but in microservice we can write diferent services using different tech stack exaample one services with goLang and another services using nodejs.

# infra cost:- higher in case of microservices
# fault isolation :- if any issue is there in monolith whole application will do down but in microservices

# what happens in namasteDev.com ?
student -web written in - Next.js (microservice)
admin - web written in React Js (microservice)
backend - node js (microservice) eg:- all the code of email is written inside this backend, and same for analytics.
mobile application - react native (microservice)

# what is there in devTinder ?
There will be two microservices in devTinder :- 
- frontEnd -(React)
- backend - (nodejs)
- frontend talks to backend using API

# devTinder -
- create a account
- login
- update your profile
- feed page - explore other developer in the platform
- send connection request
- see our matches
- see the request we have sent/ recieve
- update ur profile

# Tech planning
2 microservices
- FE :- reactjs
- BE :- nodejs, monogodb

# LLD :-
- DB design :- user collection:- first name, last name, emailid, age, gender
 from userId, to userId , status = pending
A -> B = pending -> Accepted or rejected or ignored
- API designs - we will be using rest APIs which allow application to interact over the internet
- REST APIs :- (HTTP methods)
   GET:- get the data from the service
   POST :- posting data into the service
   PUT/PATCH :- update data into the service :- PUT will replace all the fields but patch is only used to do partial changes in the data
   DELETE :- delete data from the service 
   
   POST - /signup
   POST - /login
   GET - /profile
   POST - /profile
   DELETE - /profile
   POST - /sendRequest (ignore/interested)
   POST - /reviewRequest (accept/reject)
   GET - /request
   GET - /connections

1) npm init
2) create src folder - App.js file (starting point of application)
3) create a server and the server will listen thus able to accpet the incoming request 
4) we will be using expressjs which is a web framework

# what are node modules 
- when we install express in our project we get node modules folder which has all the code which will suport our express in this particular project

# nodemon :- npm i -g nodemon (automatically refresh) 
- added node_modules to .gitignore to add code to github using git

# Homework :- Explore *,?,+,regex,() and also regex with /.*fly$/

# Handling multiple route handler - playing with next()
# app.use(()=> r1,r2,[r3,r4],r5)
# the function we put in the middle are called middleware
# response handler will send response to the server and the function before are middleware , these are just lingo
# what is Middleware and how express js handles request behind the scene
# app.use V/s app.all


# we can handle error using try ,catch and app.use()

// HTTP response status codes:-
1) Informatoional responses - (100-199)
2) Successful responses - (200-299)
3) Redirection messages - (300-399)
4) Client error responses - (400-499) 404 error ,401 - unauthorized acces
5) Server error responses - (500-599)
