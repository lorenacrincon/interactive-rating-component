# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](/public/desktop-preview.jpg)

### Links

- Solution URL: [GitHub repository](https://github.com/lorenacrincon/interactive-rating-component)
- Live Site URL: [Click Here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

This challenge helped me a lot to reinforce some basic React tools.

```css
.ranking-btn {
  background-color: hsla(217, 12%, 63%, 0.1);
  color: var(--lightGrey);
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ranking-btn:hover {
  background-color: var(--lightGrey);
  color: var(--white);
}

.ranking-btn:focus {
  background-color: var(--orange);
  color: var(--white);
}
```

```jsx
const [selectedValue, setSelectedValue] = useState(null);

const handleRankingClick = (number) => {
  setSelectedValue(number);
};
```

## Author

- Website - [Lorena Rincón](https://www.your-site.com)
- Frontend Mentor - [@lorenacrincon](https://www.frontendmentor.io/profile/lorenacrincon)
