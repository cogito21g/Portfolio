document.addEventListener("DOMContentLoaded", function() {
    const projects = [
        { title: "Project 1", description: "Description of project 1", link: "#" },
        { title: "Project 2", description: "Description of project 2", link: "#" },
        { title: "Project 3", description: "Description of project 3", link: "#" }
    ];

    const projectList = document.getElementById("project-list");

    projects.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");

        const projectTitle = document.createElement("h3");
        projectTitle.textContent = project.title;

        const projectDescription = document.createElement("p");
        projectDescription.textContent = project.description;

        const projectLink = document.createElement("a");
        projectLink.href = project.link;
        projectLink.textContent = "View Project";

        projectDiv.appendChild(projectTitle);
        projectDiv.appendChild(projectDescription);
        projectDiv.appendChild(projectLink);

        projectList.appendChild(projectDiv);
    });

    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Form submitted!");
    });
});
