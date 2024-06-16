// DOMContentLoaded 이벤트가 발생하면 실행됩니다.
document.addEventListener("DOMContentLoaded", function() {
    // 프로젝트 목록을 정의합니다.
    const projects = [
        { title: "Project 1", description: "Description of project 1", link: "#" },
        { title: "Project 2", description: "Description of project 2", link: "#" },
        { title: "Project 3", description: "Description of project 3", link: "#" }
    ];

    // 프로젝트 리스트 요소를 가져옵니다.
    const projectList = document.getElementById("project-list");

    // 각 프로젝트를 동적으로 생성하여 추가합니다.
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

    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    // 메뉴 버튼 클릭 이벤트를 처리합니다.
    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("show");
    });

    // 연락처 폼 제출 이벤트를 처리합니다.
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // 폼 제출을 막습니다.
        alert("Form submitted!"); // 폼 제출 시 알림을 표시합니다.
    });
});
