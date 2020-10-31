# Random Quote Generator in React

Challenge: Create a quote generator app, and use React to handle the frontend. Don’t look at the existing solution. Fulfill user stories below:

![image](./assets/quote1.png)
![image](./assets/quote2.png)

-   User story: I can see a random quote
-   User story: I generate a new random quote
-   User story: When I select quote author, I can see a list of quotes from them
-   User story: I can see quote genre under the author

API: https://pprathameshmore.github.io/QuoteGarden/

Icon: https://google.github.io/material-design-icons/

[Check the design link here](https://www.figma.com/file/FFxqnf1cEDiHhvFpN6u4hV)

As long as you fulfill all the user stories, you can give your personal touches by adding transition, using your own images, changing colors, or even creating your own layout,...

Once you completed, submit your solutions by providing URLs for both GitHub repository and live app on Netlify and explain briefly what you have done.

Good luck everybody!

Template for your readme :

<!-- Please update value in the {}  -->

<h1 align="center">{Your project name}</h1>

<div align="center">
  <h3>
    <a href="https://{your-demo-link.your-domain}">
      Demo
    </a>
    <span> | </span>
    <a href="https://{your-url-to-the-solution}">
      Solution
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

-   [Overview](#overview)
    -   [Built With](#built-with)
-   [Features](#features)
-   [How to use](#how-to-use)
-   [Contact](#contact)
-   [Acknowledgements](#acknowledgements)

<!-- OVERVIEW -->

## Overview

![screenshot](./screenshot.png)

I have a good experience since it is a react render. It is very new for me so I got some problem when doing it.

I got the random quote from Get random quote url and displayed its properties on the browser after fecth. It works very well. 

The problem came when I tried to get all the quotes that are belong to the author name from random quote. When passing authorName to the Get quotes from a particular author url, there should be `authors/:authorName` as a path and `authors/{whoeverTheAuthorName}` as a link to get to all authorname's quotes, but I sttil used column `:` with `authors/{whoeverTheAuthorName}`. It was solved by taking off `:`.

I was so confused about accessing the author name to be displayed on the next page (all quotes that are owned by author name). However, I got it by spreading the data of the random quote on the list of all quotes file and access the author name iside of that file. 


### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

-   [React](https://reactjs.org/)

## Features

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

## How To Use

<!-- Example: -->

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/your-user-name/your-project-name

# Install dependencies
$ npm install

# Run the app
$ npm start
```

## Acknowledgements

<!-- This section should list any articles or add-ons/plugins that helps you to complete the project. This is optional but it will help you in the future. For example: -->

## Contact

-   Website [your-website.com](https://{your-web-site-link})
-   GitHub [@your-username](https://{github.com/your-usermame})
-   Twitter [@your-twitter](https://{twitter.com/your-username})
