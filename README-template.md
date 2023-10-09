# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Features](#features)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### Features

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **TODO** Fix some issues like having multiple dots or too long calculation string.

### Screenshot

![](./screenshots/theme-1.png)
![](./screenshots/theme-2.png)
![](./screenshots/theme-3.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

This was a simple project to style, so I decided to give **Sass** a try. First of all I set up project with Vite and React, and predefined color variables to reuse them later. Then I split it to two components: Calculator and Buttons, just to make it clean. After that I started to building JSX elements. Styling with Sass was convinient, because of possibility to nest classes, so implementing theme switching feature was piece of cake. So I did it and implemented logic for switching themes. At the end I added logic for calculation. App just takes each value on click and concatinates it to a single string. After clicking Equal Button it just evals this string.

### Built with

- Semantic HTML5 markup
- Sass
- Flexbox
- CSS Grid
- React
- TypeScript

### What I learned

Work with number in JavaScript is the hardest one for me, so it was good practice. I tried to use my TypeScript Course knowledge, but I don't see advantages of this language at this moment. I know it is less error prone than JS, but that was probably too simple application to use it.

### Continued development

I want to continue learning TypeScript at this moment, and then use React + TypeScript power to build some advanced applications.

## Author

- Website - [BBualdo](https://bbualdo-portfolio.netlify.app)
- Frontend Mentor - [@bbualdo](https://www.frontendmentor.io/profile/bbualdo)
