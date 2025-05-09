# Meowverse 🐱

Meowverse is a JavaScript library that adds fun and cuteness to your projects. It allows users to fetch random cat images via a simple API, offering an enjoyable experience. Meowverse is a perfect tool for JavaScript or Node.js-based projects that need a little extra cuteness.

## Features 🎉

- **Random Cat**: Fetch a random cat image.
- **Cat by Color**: Filter cats based on their color (e.g., black, white, orange).
- **Cat by Mood**: Choose a cat based on its mood (happy, sad, funny, sleepy, etc.).
- **Cat by Color + Mood**: Filter cats based on both color and mood for a more unique selection.

## Installation 🚀

1. **Install via NPM**:

    ```bash
    npm install meowverse
    ```

2. **Install via Yarn**:

    ```bash
    yarn add meowverse
    ```

## Usage 📖

### 1. **Random Cat Image**

Meowverse allows you to fetch random cat images via a simple API.

```javascript
import { purrfectlyRandomCat } from "meowverse";

const catImageUrl = await purrfectlyRandomCat();
console.log(catImageUrl);
```

### 2. **Cat by Color**

You can filter cats by their color:

```javascript
import { rainbowCatFinder } from "meowverse";

const catImageUrl = await rainbowCatFinder("black");
console.log(catImageUrl); // Black cat image
```

### 3. **Cat by Mood**

You can filter cats by their mood:

```javascript
import { moodyCatPicker } from "meowverse";

const catImageUrl = await moodyCatPicker("happy");
console.log(catImageUrl); // Happy cat image
```

### 4. **Cat by Color + Mood**

You can filter cats by both their color and mood:

```javascript
import { colorfulMoodCats } from "meowverse";

const catImageUrl = await colorfulMoodCats("orange", "playful");
console.log(catImageUrl); // Playful and orange cat image
```

## Contributing 🤝

Meowverse is an open-source project, and we welcome contributions! To contribute to the project, please follow these steps:

1. Clone this repo to your local machine:

   ```bash
   git clone https://github.com/Osmankaankorkmaz/meowverse.git
   ```

2. Make your changes and commit them:

   ```bash
   git commit -m "Description of changes"
   ```

3. Open a pull request on GitHub with your changes.

## License 📄

Meowverse is licensed under the MIT License. For more information, see the [LICENSE](LICENSE) file.

## Contact 📧

If you have any questions or suggestions, feel free to reach out:

* GitHub: [https://github.com/Osmankaankorkmaz](https://github.com/Osmankaankorkmaz)
* Email: [osmankaankorkmaz921@gmail.com](mailto:osmankaankorkmaz921@gmail.com)

## Support

If you love this project, please don't forget to give it a star! ⭐

---

## New Open-Source Project: Meowverse! 🐱

Hello everyone! Today, I’m excited to share my latest open-source project with you – Meowverse! It’s an NPM JavaScript library designed to add a bit of fun, cuteness, and inspiration into your development projects. 💻✨

### What is Meowverse?

Meowverse allows you to fetch random cat images through an easy-to-use API with several fun customization options. Here are some of the amazing functions you can use:

* **randomCat**: Get a completely random cat image.
* **randomCatByColor**: Filter cats by their color (e.g., black, white, orange, gray).
* **randomCatByMood**: Choose a cat based on its mood (happy, sad, funny, sleepy, curious, playful).
* **randomCatByColorAndMood**: Combine color and mood for a more unique cat selection.

With just a few lines of code, you can add some fun and delight to your web apps or projects by including adorable cat images!

### Why Meowverse?

As a developer, sometimes our work can get a bit dry, and we need something light-hearted to brighten up our day. Why not add some cat magic to your projects? 😸 Whether you’re building an app, website, or just playing around with JavaScript, Meowverse is here to bring a smile to your users’ faces. 🐾

---

Feel free to explore, contribute, and make use of Meowverse in your own projects!

---

Happy coding and may your projects always be filled with cuteness! 🐾
