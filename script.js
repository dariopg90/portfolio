const aboutButton = document.getElementsByClassName("about_button")[0];
const aboutSection = document.getElementsByClassName("about")[0];

const contactButton = document.querySelector(".contact_button");
const contactSection = document.querySelector(".contact");

const skillsSection = document.querySelector(".skills");
const skillsButton = document.querySelector(".skills_button");

contactButton.onclick = () => {
  contactSection.style.visibility = "visible";
  contactSection.style.opacity = "1";

  aboutSection.style.visibility = "hidden";
  aboutSection.style.opacity = "0";

  skillsSection.style.visibility = "hidden";
  skillsSection.style.opacity = "0";
};

aboutButton.onclick = () => {
  aboutSection.style.visibility = "visible";
  aboutSection.style.opacity = "1";

  contactSection.style.visibility = "hidden";
  contactSection.style.opacity = "0";

  skillsSection.style.visibility = "hidden";
  skillsSection.style.opacity = "0";
};

skillsButton.onclick = () => {
  skillsSection.style.visibility = "visible";
  skillsSection.style.opacity = "1";

  contactSection.style.visibility = "hidden";
  contactSection.style.opacity = "0";

  aboutSection.style.visibility = "hidden";
  aboutSection.style.opacity = "0";
};
