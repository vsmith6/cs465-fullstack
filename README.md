# cs465-fullstack
CS-465 Full Stack Development with MEAN
```

Architecture
     The architecture for this project consists of the MEAN stack of MongoDB, ExpressJS, Angular, and NodeJS.  
This project contains a customer facing website that is created with Express and Handlebars, as well as an
administrator Single Page Web Application, or SPA, created with Angular.  
ExpressJS along with NodeJS are used to create the Web API as well as to connect and communicate to the MongoDB.
As the entire application is created with JavaScript, the MongoDB was selected due to its use of the same language,
JavaScript, rather than a separate language like SQL.  Mongo uses JSON-like documents with optional schemas. 
      
      
Functionality
     JSON is a language agnostic data-interchange format that was inspired by JavaScript Object Literal notation syntax (Gomez, 2022).
JSON documents are commonly used to transport data from the backend data service to the front-end application by many 
programming languages, including JavaScript (Gomez, 2022).  
In this application, JSON is used to store the data into the database as well as to retrieve the data to format it and 
send it to the application front end. The front end will receive the JSON document and save it in a model that is created
in JavaScript that matches the formatting of the data that is received from the server.
The main web application contains HTML pages that have their own route.  These pages have been refactored into HandlebarsJS
template pages that use expressions to display the data. In the Angular SPA, the application contains a single page with the
ability to show one or more components.  Each part of the SPA has its own component that also contains a link to a route for 
that component. Both the main web application and the Angular SPA administrator application use the same API and database to 
save and retrieve data although the Angular SPA is a stand-alone application. 
Refactoring the code into reusable components is an important part of development.  To ensure that the code is reusable, the 
Angular SPA uses components for each part of its functionality.  For example, rather than a web page for each page, the Angular
SPA contains a component such as the edit-trip component.  This component can edit an existing trip and will load with all of 
the data from the selected trip.  To reuse this component, another one is made with the ability to add a trip rather than edit
a trip as the data is the same for each component.  The difference is the service call that the SPA is making, but the form that
contains the data is the same.


Testing
     There are multiple ways to test the API in this application.  The GET, POST, PUT, DELETE, and login and register
endpoints can all be tested utilizing Postman or a similar application.  This is good for testing changes in the 
API such as adding an additional endpoint or modifying what data is sent back and forth via the API endpoints. To 
successfully test the endpoints of the API, the appropriate data must be used and known by the developer.  It is a 
good way to ensure that the data is being formatted for the requests and responses correctly. 
The client can be tested when using the APIs with the use of the Developer Tools in the web browser.  As the Developer
Tools contain a Network tab, each endpoint call is recorded for inspection of the request and response objects as well
as the data that is being transmitted or returned.  The Developer Tools option also gives a good idea of how the application
will react to the API calls and how the application will display the data that is returned.  This is a very important step in 
testing the front-end functionality. 
In addition to the API endpoints, security has been added to the application via the use of Jason Web Tokens.  These web
tokens are a part of the authentication process that authenticates a registered user.  The user will receive a token upon 
logging in or registering with the application.  The user will need the token to be able to update, create, or delete a trip.  
Testing the functionality of the authentication was done via the use of Postman where the token is captured while calling 
the login call of the API.  Once this token was captured, it is added to the Header ‘Authorization’ section in postman when 
making POST, PUT, and DELETE calls to the API as a Bearer Token to simulate what will happen in the application. Although 
this is an extra step to the testing, it is also good to know that the application will not allow certain API calls to be
made by a user that is not authorized to do so. 
Finally, the use of the Studio3T GUI was used to view the data in the Mongo DB. This is an important part of testing the 
API endpoints to ensure that the data is getting created, updated, or deleted properly from or into the database. 
     

Reflection
     This course was important in reaching my professional goals.  Although I have worked with Angular 8 previously in a 
professional environment, I had never utilized the NodeJS and ExpressJS backend with a MongoDB.  I enjoyed learning
how to do this and feel that it would also be good to stand something up quickly for testing and application rather 
than waiting for database administrators or other teams to complete their work.  
As I currently work as a Software Engineer 3, Full Stack Engineer, I already understand the importance of the Full
Stack career description.  Full Stack developers are more sought after and often command higher salaries due to their
ability to swing back and forth between client side and server-side coding, or to perform both at the same time. 
While it may have been the standard a few years ago to specialize in either client or server-side development, that
attitude is shifting towards everyone becoming Full Stack. It is easier and more efficient to use Agile planning 
methodologies if all the developers on a team are Full Stack as everyone will understand the user stories and be 
able to implement them. There is no waiting for the server-side team to complete a task or a client-side person 
who does not understand the server-side coding.  


Reference:
Gomez, J. (2022, January 31). JSON vs. JavaScript: What is the difference? Koombea. Retrieved April 16, 2023,
from https://www.koombea.com/blog/json-vs-javascript/ 


