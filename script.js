function filterProjects(category) {
  const projectItems = document.querySelectorAll('.project-item');

  projectItems.forEach((item) => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();
  // Add code for form submission or validation here
  alert('Form submitted!');
});
