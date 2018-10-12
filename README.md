# Hulpverleners app voor Frontend-applications

In this project I am trying to solve the problems Arjan de Jager is struggling with.  
Arjan de Jager is currently busy with improving the system to prevent children being removed from their houses,  
the main point is helping social workers with decision making when it comes to troubled children.

## The main purpose

the main purpose of this app is helping the social worker with better risk calculations, case overview and getting reliable answers from their client to provide them with good support.

The things I'm aiming for with this app are:

-   Scaleability
-   Supporting co-working and decision making for social workers
-   Dynamic input of risk numbers
-   Helpful forms that use scenario descriptions to get better understanding of the question
-   Setting up mutiple cases and keep record of the progress

## Overview process

### Week 1

-   Monday
    -   Talks about the project
    -   Getting to know each other using the ninja method and creating human charts
    ***
-   Tuesday
    -   Choosing a framework
    -   Getting knowledge of multiple framework like React, Vue, ~~Angular~~, ~~Ember~~, ~~Polymer~~, MeteorJS
        -   The main framework I wanted to work with was React due to the fact it heavely relies on component based thinking and the fact i never worked with React. This is something I want to make myself a habit so in the future my applications will be more scalable. And
        -   VueJS was my second option because I know it's a really nice framework that also drives on component based thinking and is easy to setup
        -   MeteorJS was my third choice and this was actually due to the similarity with React.
    -   At the end of the day we joined a bootcamp that was held to refresh our mind. The most of the things I already knew so there wasn't really anything new.
    ***
-   Wednesday
    -   We got to know what framework we could work with, in my case this was React.
    -   We got information about some insights in the project that we had to work on.
    -   There was a bootcamp where we got to know how we can bundle our Javascript, CSS and HTML files with the use of browserify. Other subjects where minifying files with the use Uglify and cssnano.
    -   I started with the basic setup of React and getting some more knowledge of properties, good use of components and implemented SCSS support.
    ***
-   Thursday
    -   Went on with the React setup and refactored the setup of the project so the component based setup would make more scense. I made components with the support of types so that error and succes types could be used.
    -   I added navigation and made it dynamicly appearing in the Header.js with the support of hiding elements on the front-end.
    -   I implemented STRAPI CMS at thursday night for content maintaining and better scalability. Questions and answers can be maintained and the cases are being added to the CMS.
    -   I helped a lot of students with setting up Vue, React and getting started with Choo.js.
    ***
-   Friday
    -   Started the day with implementing some style changes and some code refactoring.
    -   Helped students with setting up stores in ChooJS.
    -   Got a sort of feedback talk with the teachers and the confirmed I was heading the right way.

### Week 2

## Development

This project is build with React and as the base I used `create-react-app`.  
Other technical aspects of the app include:

-   React routing
-   Store
-   Scss
-   Reactive forms
-   Dynamic number input
-   Strapi CMS

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
