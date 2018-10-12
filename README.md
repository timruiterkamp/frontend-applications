# Hulpverleners app voor Frontend-applications
In this project I am trying to solve the problems Arjan de Jager is struggling with.  
Arjan de Jager is currently busy with improving the system to prevent children being removed from their houses,  
the main point is helping social workers with decision making when it comes to troubled children.
  
## The main purpose
the main purpose of this app is helping the social worker with better risk calculations and getting honest and reliable answers from their client.
  
The things i am aiming for with this app are:  
- Scaleability  
- Supporting co-working and decision making for social workers 
- Dynamic input of risk numbers    
- Helpful forms that use scenario descriptions to get better understanding of the question  
- Setting up mutiple cases and keep record of the progress
  

## Development
This project is build with React and as the base I used `create-react-app`.  
Other technical aspects of the app include:  
- React routing  
- Store  
- Scss  
- Reactive forms
- Dynamic number input
- Strapi CMS


## Installation of the project
To install this project you can use the following steps:  

```
git clone https://github.com/timruiterkamp/frontend-applications.git   
cd frontend-applications  
npm run start  
//Use `code .` to open your standard editor and start editiong and analyzing.
```

## Code description
> All the code is inside the src folder
```
index.js - Base of the app
routes.js - Basic routing of the app
pages/ - All the page templates in the app  
assets/ - static files used in the website
scss/ - all the sass files
scss/abstracts - Global styling config
scss/components - Global component styling
scss/vendor - Frameworks for flexbox
components/ - React components
components/buttons - React button components
components/form - React form components  
components/page - Page components


```

## Licensing
[MIT LICENSE](license.txt)