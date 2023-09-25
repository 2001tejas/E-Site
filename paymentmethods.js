function showContainer(containerId) {
    // Get all payment method containers
    var containers = document.querySelectorAll('.card');

    // Hide all containers
    containers.forEach(function(container) {
        container.classList.add('hidden');
    });

    // Show the selected payment method container
    document.getElementById(containerId).classList.remove('hidden');
}