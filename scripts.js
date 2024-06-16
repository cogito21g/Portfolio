// DOMContentLoaded 이벤트가 발생하면 실행됩니다.
document.addEventListener("DOMContentLoaded", function() {
    // 번역 데이터를 정의합니다.
    const translations = {
        en: {
            about: "About Me",
            projects: "Projects",
            contact: "Contact",
            // 추가 번역...
        },
        kr: {
            about: "소개",
            projects: "프로젝트",
            contact: "연락처",
            // 추가 번역...
        }
    };

    // 선택된 언어에 따라 텍스트를 변경합니다.
    function setLanguage(language) {
        document.getElementById("about").textContent = translations[language].about;
        document.getElementById("projects").textContent = translations[language].projects;
        document.getElementById("contact").textContent = translations[language].contact;
        // 나머지 번역도 추가...
    }

    // 언어 선택기에서 언어가 변경될 때 이벤트를 처리합니다.
    document.getElementById("language-selector").addEventListener("change", function(event) {
        setLanguage(event.target.value);
    });

    // 프로젝트 목록을 정의합니다.
    const projects = [
        { title: "Project 1", description: "Description of project 1", link: "project1.html" },
        { title: "Project 2", description: "Description of project 2", link: "project2.html" },
        { title: "Project 3", description: "Description of project 3", link: "project3.html" }
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

    // 키보드 내비게이션 지원
    const navLinks_a = document.querySelectorAll('#nav-links a');
    navLinks_a.forEach(link => {
        link.addEventListener('focus', () => {
            link.style.outline = '2px solid #007BFF';
        });
        link.addEventListener('blur', () => {
            link.style.outline = 'none';
        });
        });

    // 연락처 폼 제출 이벤트를 처리합니다.
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // 폼 제출을 막습니다.
        alert("Form submitted!"); // 폼 제출 시 알림을 표시합니다.
    });


});
