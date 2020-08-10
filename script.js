const arrowBtn = document.getElementById("arrow");
const projects = document.getElementById("projects");
const resumeDownloadBtn = document.getElementById("resume-download");

// Event Listeners
arrowBtn.onclick = () => {
  projects.getAttribute("style")
    ? projects.removeAttribute("style")
    : (projects.style.transform = "translateY(-45%)");

  projects.classList.toggle("move-up");
};

resumeDownloadBtn.onclick = () => {
  const a = document.createElement("a");
  a.href = "/utils/Resume.pdf";
  a.download = "Praharsh's Resume";
};

// Utility function
const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

// removing the loader after 3 seconds
window.onload = () => {
  const loaderContainer = document.getElementById("loader-container");

  setTimeout(async () => {
    loaderContainer.classList.add("fade-out");
    await sleep(1000);
    loaderContainer.remove();
  }, 3000);
};
