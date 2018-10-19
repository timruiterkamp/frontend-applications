# Hulpverleners app voor Frontend-applications

In this project I am trying to solve the problems Arjan de Jager is struggling with.  
Arjan de Jager is currently busy with improving the system to prevent children being removed from their houses,  
the main point is helping social workers with decision making when it comes to troubled children.

## The main purpose

the main purpose of this app is helping the social worker with better risk calculations, case overview and getting reliable answers from their client to provide them with good support.  
During the talks that we've got in the past two weeks it became clear that there are a lot of places and working methods for case handling like paper work. In my opinion this should be all in one place and easy to edit and create.

The things I'm aiming for with this app are:

-   Scaleability
-   Supporting co-working and decision making for social workers
-   Dynamic input of risk numbers
-   Helpful forms that use scenario descriptions to get better understanding of the question
-   Setting up mutiple cases and keep record of the progress
-   Stimulate the speed of the process
-   Keeping track of the case for social workers

## Learning process

I chose the framework React as it has my main interest due to the fact I have been creating websites and applications with Vue for the last months, and my interest in React started to grow as it seemd to be more specific and less 'magic' in comparison to Vue. In my opinion React has been a more fun way of developing than Vue is, you have to be more specific and think of a component based setup that can be re-used in the future.

The way React works with it's components makes you spending more time on creating the right setup. The only thing I reconized was that in the middle of my project I started with Redux and this changes the whole setup of the app. This is also a thing that has to be refactored in the future. The current setup can be way more explanatory if the components were even better named and placed.

As within a couple of days I learned more about React and started to connect Strapi as an Api CMS for my application. To make my concept stronger and make things a bit more difficult. During this progress I learned more about data modelling and talking to Api's.

After the setup of the Api and getting more information about classes, stateless classes and other React standards. I gained more interest in cleaning my calls and functions. So I got to Redux, that is a 'predictable state container' as their own description describes it. Why I would use this, is to make components less dependant on their parent components to pass their data. With the setup of Redux I could connect to the store from every component.

Redux, React standards and Strapi were completely new to me, I had good understanding of framework behaviours like lifecycles and states that made it more easy to get a grip of the framework. It has been a good experience overall and i learned a lot. In the next chapter I write day by day what I have been doing the last two weeks and showing what my steps were.

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
    -   Got a short feedback talk with the teachers and they confirmed I was heading the right way.
    -   Setup questions and answers in the API.
    -   Started filtering the questions and answers

---

### Week 2

-   Monday

    -   On monday Margrit de Groot gave us insight in the world of social workers and how they processed client information and what kind of influences / factors could result in possible removal of residence. During this talk I got some new ideas based on the problems Margrit faced. Most of the ideas were for the building of the client case.

    -   On this day I started building on the form and protected routes.
    -   Decided to made the cases slightly anonymous by hiding the full name, create a short version of it and a document number.
    -   Differientate static and dynamic questions.

    ***

-   Tuesday
    -   On Tuesday I implemented Redux to write cleaner requests and make states application wide
    -   Refactored answer and questions data to make a better filter
    -   Started generating the form
    ***
-   Wednesday
    -   Tweaked a little bit of data for the form
    -   Generated select options based on category
    -   Made Redux stores for client handling
    -   Tweaked styling of the form
    ***
-   Thursday
    -   Most of the day I was busy with data modelling and adjusting the form
    -   Adjusted data in the Strapi API
    -   Refactored select items to better component based
    -   Setup the redux store for calculations
    -   Started the calculation function based on redux store
    ***
-   Friday
    -   Finally fixed the calculation function
    -   Styled the application a bit better
    -   Finished presentation

---

## Development

This project is build with React and as the base I used `create-react-app`.  
Other technical aspects of the app include:

-   React routing
-   Store
-   Scss
-   Dynamic number input
-   Strapi CMS
-   Redux

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
store/ - All the redux store components
store/action - All the functions that can be used in the app take place here. These can be called in components
store/reducers - The handling of the action functions takes place here and passes the data into the desired store
```

## Licensing

[MIT LICENSE](license.txt)
