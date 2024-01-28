const selector = document.getElementById("language-selector");

for (const child of selector.children) {
    if (child.href.endsWith(window.location.pathname)) {
        child.classList = "selected";
    }
}
