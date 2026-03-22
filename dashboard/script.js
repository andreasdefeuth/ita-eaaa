function toggleSemester(groupId) {
  const sidebar = document.getElementById("sidebar");
  const targetGroup = document.getElementById(groupId);
  const iframe = document.getElementById("main-iframe");

  if (targetGroup.classList.contains("active-sem")) {
    // Return to main overview
    sidebar.classList.remove("sem-active");
    targetGroup.classList.remove("active-sem");
    event.preventDefault();
    iframe.src = "overview/index.html";
  } else {
    // Open semester view
    document
      .querySelectorAll(".sem-group")
      .forEach((group) => group.classList.remove("active-sem"));
    sidebar.classList.add("sem-active");
    targetGroup.classList.add("active-sem");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const allLinks = document.querySelectorAll(".side-menu li a");
  allLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (this.closest(".sub-categories")) {
        document
          .querySelectorAll(".sub-categories li")
          .forEach((li) => li.classList.remove("active-course"));
        this.parentElement.classList.add("active-course");
      }
    });
  });
});
