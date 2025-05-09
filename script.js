import {
  purrfectlyRandomCat,
  rainbowCatFinder,
  moodyCatPicker,
  colorfulMoodCats
} from "https://esm.sh/meowverse";

const showCat = async (fetchFn, loaderId, imageId) => {
  const loader = document.getElementById(loaderId);
  const image = document.getElementById(imageId);
  
  loader.classList.remove("hidden");
  image.classList.add("hidden");

  try {
    const url = await fetchFn();
    image.src = url;
    image.onload = () => {
      loader.classList.add("hidden");
      image.classList.remove("hidden");
    };
  } catch (err) {
    loader.innerText = "😿 Failed to load cat image";
  }
};

document.getElementById("randomBtn").addEventListener("click", () => {
  showCat(() => purrfectlyRandomCat(), "randomCatLoader", "randomCatImage");
});

document.getElementById("colorBtn").addEventListener("click", () => {
  const selectedColor = document.getElementById("colorSelect").value;
  showCat(() => rainbowCatFinder(selectedColor), "colorCatLoader", "colorCatImage");
});

document.getElementById("moodBtn").addEventListener("click", () => {
  const selectedMood = document.getElementById("moodSelect").value;
  showCat(() => moodyCatPicker(selectedMood), "moodCatLoader", "moodCatImage");
});

document.getElementById("colorMoodBtn").addEventListener("click", () => {
  const selectedColor = document.getElementById("colorSelectMood").value;
  const selectedMood = document.getElementById("moodSelectColor").value;
  showCat(() => colorfulMoodCats(selectedColor, selectedMood), "colorMoodCatLoader", "colorMoodCatImage");
});


showCat(() => purrfectlyRandomCat(), "randomCatLoader", "randomCatImage");
