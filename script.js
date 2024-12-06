const languages = [
    { name: "Python", progress: 80, notes: "Strong in data handling and automation." },
    { name: "JavaScript", progress: 70, notes: "Good for web development and dynamic pages." },
    { name: "C++", progress: 60, notes: "Used in system programming and performance-critical apps." },
    { name: "Java", progress: 75, notes: "Well-versed in OOP and backend development." },
    { name: "HTML", progress: 90, notes: "Markup for structuring web pages." },
    { name: "CSS", progress: 85, notes: "Styling and layout expertise." },
    { name: "SQL", progress: 65, notes: "Database management and querying." },
    { name: "C#", progress: 50, notes: "Understanding of Windows applications." },
    { name: "Expressjs", progress: 45, notes: "Basics of server-side scripting." },
    { name: "Nextjs", progress: 40, notes: "Knowledge of Ruby on Rails." },
    { name: "React-Native", progress: 30, notes: "Beginner in concurrent programming." },
    { name: "Swift", progress: 25, notes: "Learning iOS development." },
    { name: "Kotlin", progress: 35, notes: "Android app development in progress." },
    { name: "R", progress: 50, notes: "Proficient in statistical computing." },
    { name: "Flutter", progress: 55, notes: "Utilized for simulations and analysis." },
    { name: "Dart", progress: 20, notes: "Exploring Flutter for mobile development." },
    { name: "Rust", progress: 15, notes: "Learning memory-safe programming." },
    { name: "TypeScript", progress: 10, notes: "Focusing on strong typing in JavaScript." },
    { name: "MongoDB", progress: 20, notes: "Understanding functional programming." },
    { name: "AngularJs", progress: 10, notes: "Exploring text processing capabilities." },
];

const dashboard = document.getElementById('dashboard');

languages.forEach(lang => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <h2>${lang.name}</h2>
        <p><strong>Progress:</strong> ${lang.progress}%</p>
        <p><strong>Notes:</strong> ${lang.notes}</p>
    `;

    dashboard.appendChild(card);
});
