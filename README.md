# Get-Youtube-Subscribers (AlmaBetter**Capstone**Project)

## Introduction

- A backend project which includes specific routes in the URL .
- User can do the following as below:
  - _access the number of subscribers_,
  - _access subscribers by specific ID and Names_,

## Application Folder Structure

1. [src/app.js] -> For handling requests and responses.

2. [/index.js] -> To connect and start the server.

3. [src/createDatabase.js] -> To create database on MongoDB.

4. [src/data.js] -> Data that has to be connnected to a database.

5. [src/models/subscribers.js] -> For the schema.
6. [src/index.html] -> The home page for the application.

```
├── src/
│   ├── app.js
│   ├── createDatabase.js
│   ├── data.js
│   ├── index.html
│   └── models/
│       ├── subscribers.js
├── index.js
├── {} package-lock.json
└── {}package.json
```

## Used in this project:

- Mongoose
- Express
- MongoDB (Atlas and Compass)
- Raw data
- Path module to join index.html
- nodemon
- dotenv
- Mocha
- chai

## Steps :

- _Step 1_

Install npm dependencies of express and mongoose using " npm install " command.

- _Step 2_

Using MongoDB local (Compass) as well as MongoDB Cloud (Atlas), depends on you which you want to use
Just uncomment and comment the codes vice versa in createDatabase.js and index.js<br/>

Start the backend server using nodemon or node index.js command.

- _Step 3_

- GET http://localhost:3000/ → The client will see an interface as below:<br/>
  <img width="863" alt="image" src="https://drive.google.com/file/d/1qNrrxUuf_OF0vZ1NjtKrl0B0DD8I9Vtc"><br/>

- GET http://localhost:3000/subscribers → When the user hit this, endpoint /subscribers, the client will get an array of all subscribers in JSON format from the database where the data is stored in local or MongoDB cloud database. <br/>

<img width="895" alt="image" src="https://drive.google.com/file/d/1-vgSAxvMy8re8jD2Co02qhki6tp7w7G6"> <br/>

- GET http://localhost:3000/subscribers/names →When the user hit this, endpoint /subscribers/names the client will to get an array of all subscribers in JSON format with only name and subscribed Channel fields from the database, where the data is stored in local or MongoDB cloud database.<br/>

<img width="900" alt="image" src="https://drive.google.com/file/d/1jN-ttXgglfyupJ9ofEApP9tFt_1Z_wR0"><br/>

- GET http://localhost:3000/subscribers/:id → When the user hit this, endpoint /subscribers/:id in ID, the user needs to enter the USER’S ID which is stored in the database to get a particular user’s details like name, subscribed Channel and subscribed Date from the database, where the data is stored in local or MongoDB cloud database.<br/>

<img width="902" alt="image" src="https://drive.google.com/file/d/1NY_cSL_UMh0uzHKdg3paD0t6gDw_u2lt"><br/>

- GET http://localhost:3000/invalid → when the user hit the unwanted route which is not mentioned above (which is used to handle all other requests), they will get an error message like Route not found in JSON format with an 404 error status code.<br/>

<img width="901" alt="image" src="https://drive.google.com/file/d/1pCSR5R9qUCiuMmE7UrAsp9Ovf_0rwvSU"><br/>

app.use() is used to handle all the unwanted requests. It will return 404 Not Found status code indicating that the requested resource could not be found but may be available in the future.

## Deployment

_**Use Json Viewer extension in Browser for better view**_

_**live link**_
<br/>https://youtubesubscribers-g38r.onrender.com<br>

_**Demo Video link**_
<br/>

<hr/>
