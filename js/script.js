
function resolve_include(element)
{
    // Load the content of the file referred to by the href attr.
    fetch(element.getAttribute("href"))
    .then(response => response.text())
    .then(data => {
        // Then just replace content.
        element.innerHTML = data;
    })
    .catch(error => console.error('Inclusion loading failed:', error));
}

document.addEventListener('DOMContentLoaded', () => {
    let tags = document.getElementsByTagName("include");
    for (let i = 0; i < tags.length; ++i) {
        if (tags[i].hasAttribute("href")) {
            resolve_include(tags[i]);
        }
    }
});
