const navlist = document.getElementById("nav-list");
const sections = document.querySelectorAll("section");

ShowSection("about");

navlist.addEventListener("click", e =>
{
    const button = e.target.closest("button");
    if (!button) return;

    ShowSection(button.dataset.section);
});

function ShowSection(id)
{
    sections.forEach(section =>
        section.style.display = section.id === id ? "block" : "none"
    );

    [...navlist.children].forEach(button =>
        button.classList.toggle(
            "active",
            button.dataset.section === id
        )
    );
}