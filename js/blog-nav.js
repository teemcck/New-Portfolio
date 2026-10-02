// Include with `defer` on entries using css/blog.css and #blog-content.
// Each h3 gets a sequential ID and a matching contents link.
(() => {
    const content = document.getElementById('blog-content');
    if (!content || document.getElementById('section-nav')) return;

    const headings = content.querySelectorAll('h3');
    if (!headings.length) return;

    const nav = document.createElement('nav');
    nav.id = 'section-nav';
    nav.setAttribute('aria-label', 'Article contents');

    const toggle = document.createElement('button');
    toggle.id = 'contents-toggle';
    toggle.type = 'button';
    toggle.setAttribute('aria-controls', 'section-links');
    toggle.append('Contents ');
    const action = document.createElement('span');
    action.className = 'contents-action';
    toggle.append(action);

    const links = document.createElement('ul');
    links.id = 'section-links';
    headings.forEach((heading, index) => {
        // Sequential IDs keep generation simple; skip any ID already used elsewhere.
        let id = `section-${index + 1}`;
        let suffix = index + 1;
        while (document.getElementById(id) && document.getElementById(id) !== heading) {
            id = `section-${++suffix}`;
        }
        heading.id = id;

        const item = document.createElement('li');
        const link = document.createElement('a');
        link.href = `#${heading.id}`;
        link.textContent = heading.textContent.trim();
        item.append(link);
        links.append(item);
    });

    function setExpanded(expanded) {
        toggle.setAttribute('aria-expanded', String(expanded));
        nav.classList.toggle('is-collapsed', !expanded);
        action.textContent = expanded ? '[hide]' : '[show]';
    }

    setExpanded(false);
    toggle.addEventListener('click', () => {
        setExpanded(toggle.getAttribute('aria-expanded') !== 'true');
    });
    links.addEventListener('click', (event) => {
        if (event.target.closest('a') && window.matchMedia('(max-width: 799px)').matches) {
            setExpanded(false);
            toggle.focus({ preventScroll: true });
        }
    });

    nav.append(toggle, links);
    content.before(nav);
})();
