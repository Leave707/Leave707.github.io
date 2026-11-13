
/*
    Ifill Moore
    Personal Portfolio Website

    This file controls:
    1. Skill cards and their descriptions
    2. Project cards and interactive demonstrations
    3. Pop-up windows
    4. Mobile navigation
    5. Website animations and scrolling
*/


// ==================================================
// 1. ICONS USED THROUGHOUT THE WEBSITE
// ==================================================

// Creates an SVG icon using the path provided.
function createIcon(paths) {
    return `
        <svg viewBox="0 0 24 24"
             aria-hidden="true"
             fill="none"
             stroke="currentColor"
             stroke-width="1.8"
             stroke-linecap="round"
             stroke-linejoin="round">
            ${paths}
        </svg>
    `;
}

// Icons for the different projects.
const icons = {
    python: createIcon(`
        <path d="M12 2v4M9 6h6a3 3 0 0 1 3 3v3H9a3 3 0 0 0-3 3v1H4a2 2 0 0 1-2-2V9a3 3 0 0 1 3-3h4Z"/>
        <path d="M12 22v-4m3 0H9a3 3 0 0 1-3-3v-3h9a3 3 0 0 0 3-3V8h2a2 2 0 0 1 2 2v5a3 3 0 0 1-3 3h-4Z"/>
        <path d="M7 9h.01M17 15h.01"/>
    `),

    code: createIcon(`
        <path d="m8 8-4 4 4 4m8-8 4 4-4 4M14 4l-4 16"/>
    `),

    office: createIcon(`
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M9 3v18M9 15h12"/>
    `),

    database: createIcon(`
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5M3 12c0 1.7 4 3 9 3s9-1.3 9-3"/>
    `),

    hardware: createIcon(`
        <rect x="5" y="5" width="14" height="14" rx="2"/>
        <path d="M9 9h6v6H9zM9 1v4m6-4v4M9 19v4m6-4v4M1 9h4m-4 6h4m14-6h4m-4 6h4"/>
    `),

    network: createIcon(`
        <rect x="9" y="2" width="6" height="5" rx="1"/>
        <rect x="2" y="17" width="6" height="5" rx="1"/>
        <rect x="16" y="17" width="6" height="5" rx="1"/>
        <path d="M12 7v5M5 17v-5h14v5"/>
    `),

    analytics: createIcon(`
        <path d="M3 3v18h18M7 16l4-5 4 2 5-7"/>
        <path d="M17 6h3v3"/>
    `),

    education: createIcon(`
        <path d="m2 9 10-5 10 5-10 5-10-5ZM6 11v6c4 3 8 3 12 0v-6M22 9v7"/>
    `)
};


// ==================================================
// 2. MY SKILLS AND INTERESTS
// ==================================================

// Each skill has a name, image, and personal story.
const skills = [
    {
        name: "Python Programming",
        key: "python",
        story: "I enjoy Python because it allows me to turn an idea into something that actually works. Working on programs for grades, text analysis, and number checking has helped me become more confident with logic and problem-solving."
    },

    {
        name: "HTML & CSS",
        key: "code",
        story: "I like being able to create a website from scratch and see the result right in my browser. HTML gives the page structure, while CSS lets me make it look clean, modern, and easy for people to use."
    },

    {
        name: "Microsoft Office",
        key: "office",
        story: "Microsoft Office is something I use regularly in education. I enjoy finding better ways to prepare documents, organize information in spreadsheets, and make everyday tasks quicker and more accurate."
    },

    {
        name: "Database Management",
        key: "database",
        story: "I find databases interesting because they help turn lots of separate records into information that is organized and useful. I especially like creating tables, queries, and reports that make it easier to find answers."
    },

    {
        name: "Computer Maintenance",
        key: "hardware",
        story: "I've always enjoyed working with computers beyond just using them. Learning how components fit together, troubleshooting problems, and maintaining systems gives me practical experience and the satisfaction of fixing something myself."
    },

    {
        name: "Networking",
        key: "network",
        story: "Networking interests me because it explains how computers and people stay connected. I want to keep learning how networks are set up, secured, and maintained so technology works reliably for everyone using it."
    },

    {
        name: "Data Analysis",
        key: "analytics",
        story: "Data analysis is the direction I want to grow in professionally. I enjoy looking at information, spotting patterns, and using the results to understand a problem and support better decisions."
    },

    {
        name: "IT Education",
        key: "education",
        story: "Teaching IT gives me a chance to share what I know while continuing to learn myself. One of the best parts is seeing students gain confidence when they understand a new concept or complete a practical task."
    }
];


// ==================================================
// 3. DISPLAY THE SKILL CARDS
// ==================================================

const skillsGrid = document.getElementById("skillsGrid");

skillsGrid.innerHTML = skills.map((skill, index) => {
    return `
        <button type="button"
                class="skill-card reveal"
                style="--delay:${index * 55}ms"
                data-skill="${index}"
                aria-label="Read why I enjoy ${skill.name}">

            <span class="skill-photo">
                <img src="assets/${skill.key}.webp"
                     alt="${skill.name} illustration"
                     loading="lazy"
                     decoding="async">
            </span>

            <span class="skill-info">
                <span class="skill-title">${skill.name}</span>

                <span class="skill-more">
                    My story
                    <span aria-hidden="true">↗</span>
                </span>

                <span class="skill-line"></span>
            </span>

        </button>
    `;
}).join("");


// ==================================================
// 4. MY PROJECTS
// ==================================================

const projects = [
    {
        name: "Student Grade Processing System",
        description: "A Python program that processes students' marks and calculates their grades.",
        tags: ["Python", "Problem Solving"],
        icon: icons.education
    },

    {
        name: "Text and Data Analyzer",
        description: "A Python program that counts words, searches text, and organizes results.",
        tags: ["Python", "Text Processing"],
        icon: icons.code
    },

    {
        name: "Prime Number Checker",
        description: "A program that checks whether a number is prime using problem-solving steps and a flowchart.",
        tags: ["Python", "Algorithms"],
        icon: icons.analytics
    }
];


// ==================================================
// 5. DISPLAY THE PROJECT CARDS
// ==================================================

const projectsGrid = document.getElementById("projectsGrid");

projectsGrid.innerHTML = projects.map((project, index) => {
    return `
        <button type="button"
                class="project-card reveal"
                style="--delay:${index * 100}ms"
                data-project="${index}"
                aria-label="Open interactive demonstration for ${project.name}">

            <div class="project-top">
                <span class="project-num">0${index + 1}</span>
                <span class="project-type">PYTHON</span>
            </div>

            <span class="project-icon">
                ${project.icon}
            </span>

            <h3>${project.name}</h3>

            <p>${project.description}</p>

            <div class="tags">
                ${project.tags.map(tag => `<span>${tag}</span>`).join("")}
            </div>

            <div class="project-action">
                Explore project <span>↗</span>
            </div>

        </button>
    `;
}).join("");


// ==================================================
// 6. POP-UP WINDOWS
// ==================================================

const projectDialog = document.getElementById("projectDialog");
const skillDialog = document.getElementById("skillDialog");
const demo = document.getElementById("demo");


// Opens a skill and displays my personal description.
function openSkill(index) {
    const skill = skills[index];

    document.getElementById("skillDialogTitle").textContent = skill.name;

    const skillImage = document.getElementById("skillDialogImage");

    skillImage.src = `assets/${skill.key}.webp`;
    skillImage.alt = `${skill.name} illustration`;

    document.getElementById("skillDialogStory").textContent = skill.story;

    skillDialog.showModal();
}


// Connect the skill cards to their pop-up windows.
document.querySelectorAll("[data-skill]").forEach(button => {
    button.addEventListener("click", () => {
        const index = Number(button.dataset.skill);
        openSkill(index);
    });
});


// Close the skill window using its close button.
document.getElementById("closeSkillDialog").addEventListener("click", () => {
    skillDialog.close();
});


// Close the skill window when clicking outside its content.
skillDialog.addEventListener("click", event => {
    if (event.target === skillDialog) {
        skillDialog.close();
    }
});


// ==================================================
// 7. OPEN A PROJECT DEMONSTRATION
// ==================================================

function openProject(index) {
    const project = projects[index];

    document.getElementById("dialogTitle").textContent = project.name;
    document.getElementById("dialogDesc").textContent = project.description;

    // Project 1: Student Grade Processing System
    if (index === 0) {
        demo.innerHTML = `
            <label for="marks">
                Enter a student's mark (0–100)
            </label>

            <p class="grading-note">
                Demo scale: A 80–100 · B 70–79 ·
                C 60–69 · D 50–59 · F below 50.
                Pass mark: 50.
            </p>

            <div class="demo-controls">
                <input id="marks"
                       type="number"
                       min="0"
                       max="100"
                       step="1"
                       placeholder="e.g. 78">

                <button class="btn primary" id="run">
                    Calculate grade
                </button>
            </div>

            <output id="result" aria-live="polite">
                Your result will appear here.
            </output>
        `;
    }

    // Project 2: Text and Data Analyzer
    if (index === 1) {
        demo.innerHTML = `
            <label for="sampleText">
                Enter text to analyze
            </label>

            <textarea id="sampleText"
                      rows="4"
                      placeholder="Type a sentence or paragraph..."></textarea>

            <button class="btn primary" id="run">
                Analyze text
            </button>

            <output id="result" aria-live="polite">
                Your results will appear here.
            </output>
        `;
    }

    // Project 3: Prime Number Checker
    if (index === 2) {
        demo.innerHTML = `
            <label for="prime">
                Enter a whole number
            </label>

            <div class="demo-controls">
                <input id="prime"
                       type="number"
                       step="1"
                       placeholder="e.g. 29">

                <button class="btn primary" id="run">
                    Check number
                </button>
            </div>

            <output id="result" aria-live="polite">
                Your result will appear here.
            </output>
        `;
    }

    // Run the selected demonstration.
    demo.querySelector("#run").addEventListener("click", () => {
        runDemo(index);
    });

    projectDialog.showModal();
}


// Connect the project cards to their demonstrations.
document.querySelectorAll("[data-project]").forEach(button => {
    button.addEventListener("click", () => {
        const index = Number(button.dataset.project);
        openProject(index);
    });
});


// ==================================================
// 8. PROCESS THE PROJECT DEMONSTRATIONS
// ==================================================

function runDemo(index) {
    const result = document.getElementById("result");

    // Student Grade Processing System
    if (index === 0) {
        const input = document.getElementById("marks").value;
        const mark = Number(input);

        if (
            input.trim() === "" ||
            !Number.isInteger(mark) ||
            mark < 0 ||
            mark > 100
        ) {
            result.textContent =
                "Please enter a whole-number mark between 0 and 100.";
            return;
        }

        let grade;

        if (mark >= 80) {
            grade = "A";
        } else if (mark >= 70) {
            grade = "B";
        } else if (mark >= 60) {
            grade = "C";
        } else if (mark >= 50) {
            grade = "D";
        } else {
            grade = "F";
        }

        const status = mark >= 50 ? "PASS" : "FAIL";

        result.textContent =
            `Mark: ${mark}/100 | Grade: ${grade} | ${status}`;
    }

    // Text and Data Analyzer
    if (index === 1) {
        const text = document.getElementById("sampleText").value.trim();

        if (text === "") {
            result.textContent = "Enter some text first.";
            return;
        }

        const words = text.split(/\s+/).filter(Boolean);
        const characters = text.length;
        const lines = text.split(/\n/).length;

        result.textContent =
            `Words: ${words.length} | Characters: ${characters} | Lines: ${lines}`;
    }

    // Prime Number Checker
    if (index === 2) {
        const input = document.getElementById("prime").value;
        const number = Number(input);

        if (
            input.trim() === "" ||
            !Number.isSafeInteger(number) ||
            number < 0
        ) {
            result.textContent = "Enter a non-negative whole number.";
            return;
        }

        let isPrime = number >= 2;

        for (let divisor = 2; divisor * divisor <= number && isPrime; divisor++) {
            if (number % divisor === 0) {
                isPrime = false;
            }
        }

        if (isPrime) {
            result.textContent = `${number} is a prime number.`;
        } else {
            result.textContent = `${number} is not a prime number.`;
        }
    }
}


// ==================================================
// 9. CLOSE THE PROJECT WINDOW
// ==================================================

document.getElementById("closeDialog").addEventListener("click", () => {
    projectDialog.close();
});

projectDialog.addEventListener("click", event => {
    if (event.target === projectDialog) {
        projectDialog.close();
    }
});


// ==================================================
// 10. DISPLAY THE CURRENT YEAR
// ==================================================

document.getElementById("year").textContent = new Date().getFullYear();


// ==================================================
// 11. MOBILE NAVIGATION MENU
// ==================================================

const menu = document.getElementById("menu");
const links = document.getElementById("links");

menu.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");

    menu.setAttribute("aria-expanded", String(isOpen));
});


// Close the menu after selecting a navigation link.
links.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        links.classList.remove("open");
        menu.setAttribute("aria-expanded", "false");
    });
});


// ==================================================
// 12. ANIMATIONS WHEN SCROLLING
// ==================================================

const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

const revealElements = document.querySelectorAll(".reveal");

if (!reduceMotion && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.08
    });

    revealElements.forEach(element => observer.observe(element));

} else {
    revealElements.forEach(element => {
        element.classList.add("visible");
    });
}


// ==================================================
// 13. SCROLL PROGRESS INDICATOR
// ==================================================

const progress = document.querySelector(".progress");
let ticking = false;

window.addEventListener("scroll", () => {
    if (ticking) {
        return;
    }

    ticking = true;

    requestAnimationFrame(() => {
        const maximumScroll =
            document.documentElement.scrollHeight - window.innerHeight;

        const scrollProgress =
            maximumScroll > 0 ? window.scrollY / maximumScroll : 0;

        progress.style.transform = `scaleX(${scrollProgress})`;

        ticking = false;
    });

}, {
    passive: true
});
