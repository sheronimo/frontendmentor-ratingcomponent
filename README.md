# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

Hi! This is my attempt at the Rating Component challenge. Although I've been working with React more recently, I decided to attempt this challenge using vanilla Javascript for the state management (in this case, dividing the "Ratings" portion and "Thank you" portion into two sections and showing/hiding them).

During my research, I learned that using `display: none` or `visibility: hidden` on an `input` element is not ideal for accessibility, so I attempted a different method using `opacity: 0` and `width: 0`.

### Screenshot

Desktop

![](./screenshots/screenshot_desktop.jpg)

Mobile

![](./screenshots/screenshot_mobile.jpg)

### Links

- Solution URL: [Here!](https://github.com/sheronimo/frontendmentor-ratingcomponent)
- Live Site URL: [Here!](https://sheronimo.github.io/frontendmentor-ratingcomponent/)

## My process

1. I first imported the design images into Photoshop and then sketched out the different element and font sizes, padding and margin units.
2. I then restructured the markup and worked on the styling.
3. After fine-tuning the styling, I then worked on the Javascript for the rating submission.
4. I also added an error message in case no rating was checked, for improved user experience.

### Built with

- Semantic HTML5
- Flexbox
- Javascript (form validation)

### What I learned

I learned about how to do simple state management in vanilla Javascript and make a component interactive without having to load different pages.

## Author

- Github - [sheronimo](https://github.com/sheronimo)
- Frontend Mentor - [@sheronimo](https://www.frontendmentor.io/profile/sheronimo)
