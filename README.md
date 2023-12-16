# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Links

- Solution URL: [My Github](https://github.com/jetskeeter1/advice-generator-app)
- Live Site URL: [LIVE advice-generator](https://jetskeeter1.github.io/advice-generator-app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- javascript API fetch

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

What I learned from this that in order to get data from an API I use 
```js 
fetch()
``` 
and paste in the url inside the brackets of the api advice message and get the promise of a request by following 
```js
.then()
``` 
and create a function and that helps to get a promise. 

```js
fetch(urlhere).then(response function(){
  return response.json();
})
```
this create a request and returns a promise that we can get a hold of the data and we follow up with another .then to grab the value and paste it into my html giving me random advice.
```js
.then(data function(){
  document.queryselector(".element").innerHTML = data.slip.id;
})
```
this grabs the value that I want have the random advice id into my element.

### Continued development

I have no idea what I can do with fetch, but maybe I can create my own random data api that I could use, but this serves as learning to get better at researching on google. So that is a plus and i'll continue to explore more related to javascript to create responsive and interactive websites.

### Useful resources

- [ByteGrad - youtuber](https://www.youtube.com/watch?v=zUcc4vW-jsI) - this helps me with the basic of fetch.


## Author

- Website - [jetskeeter](https://jetskeeter1.github.io/advice-generator-app/)
- Frontend Mentor - [@jetskeeter1](https://www.frontendmentor.io/profile/jetskeeter1)
- instagram - [@jetskeeter6](https://www.instragram.com/jetskeeter6)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

- [ByteGrad - youtuber](https://www.youtube.com/watch?v=zUcc4vW-jsI) - his video help me with making the random advice api and it was easier than I expect without having to have a lot of problem with just searching.