# Back-end E-Commerce Application

## Description

This project has been created using command line only operations and is tested using Insomnia. This application is using GET, POST, PUT and DEL requests to alter the database being provided by the API which is stored within JAWS.

## Table of Contents

- [Title] (#title)
- [Description] (#description)
- [Installation] (#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Demo] (#demo)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation

You will need to install, MYSQL, node, Insomnia and VS Code.

## Usage

You initialise the application by firstly going to your terminal either on your computer or within VS code. You will then run, mysql -u root -p, click enter, type your password and enter again. This will let you into myql, once you are in mysql you then need to run source db/schema.sql which will run your schema (this is a file with your mysql commands in so you don't have to run them all separately). You will then need to type exit to return back to your terminal whereby you need to run npm run seed, and then npm start. This is will initialise the data, run your app and tell you what PORT number your app is listening to you. From there you will need to go to Insomnia which is used to test your end points. You will then need to type your URL and which end point you are testing, for example: http://localhost:3010/tags. This will then give you a response from the API on the right hand side. As shown in the videos you will need to do this for GET, POST, PUT and DEL requests.

## Tests

You can test this application through Insomnia. For it to work you will need to work with the id's already procided or created, if you try and test an id that is not there you will receieve an error response which illustrates that id doesn't exist.

## Demo

[backend e-commerce](https://youtu.be/HKolXlyW9EQ)
![Screenshot 2023-05-04 at 11 39 43](https://user-images.githubusercontent.com/122907573/236181551-a486dd2c-ce31-43a1-911e-8de07721b27b.png)
![Screenshot 2023-05-04 at 11 39 56](https://user-images.githubusercontent.com/122907573/236181559-12b26ba8-1c8a-4751-b8cf-634da9008ad9.png)

## Contributing

Faith Meades

## Questions

Username: FaithsCoding,
URL: www.github.com/faithscoding,
You can send me any questions via email: faithscoding@outlook.com
