const arrowBtn = document.getElementById("arrow");
const projects = document.querySelectorAll(".projects");

const resumeDownloadBtn = document.getElementById("resume-download");

// Utility Functions
const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

// Event Listeners
arrowBtn.onclick = () => {
  projects.forEach(async (project, index) => {
    project.getAttribute("style")
      ? project.removeAttribute("style")
      : ((project.style.top = "100px"),
        (project.style.left = `${index * 10 + 25}%`));

    project.classList.toggle("move-up");
    await sleep(1000);
    project.classList.toggle("has-pointer-events");
  });

  arrowBtn.parentElement.classList.toggle("rotate-smooth");
};

resumeDownloadBtn.onclick = () => {
  const a = document.createElement("a");
  a.href = "./utils/Resume.pdf";
  a.download = "Praharsh's Resume";
};
