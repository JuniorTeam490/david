function toggleDetails(id) {
    const element = document.getElementById(id);
    element.style.display = (element.style.display === 'block') ? 'none' : 'block';
}

document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});
