const arrowBtn = document.getElementById("arrow");
const projects = document.getElementById("projects");

arrowBtn.onclick = () => {
  projects.getAttribute("style")
    ? projects.removeAttribute("style")
    : (projects.style.transform = "translateY(-45%)");

  projects.classList.toggle("move-up");
};

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

window.onload = () => {
  const loaderContainer = document.getElementById("loader-container");

  setTimeout(async () => {
    loaderContainer.classList.add("fade-out");
    await sleep(1000);
    loaderContainer.remove();
  }, 3000);
};
