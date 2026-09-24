const navList = document.getElementById("nav-list");
const sections = document.querySelectorAll("section");

showSection("about");

navList.addEventListener("click", e =>
{
    const button = e.target.closest("button");
    if (!button) return;

    showSection(button.dataset.section);
});

function showSection(id)
{
    sections.forEach(section =>
        section.style.display = section.id === id ? "block" : "none"
    );

    [...navList.children].forEach(button =>
        button.classList.toggle(
            "active",
            button.dataset.section === id
        )
    );
}
