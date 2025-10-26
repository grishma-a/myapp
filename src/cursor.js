// custom-cursor.js
document.addEventListener('DOMContentLoaded', function () {
    // Create cursor element
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    // Move cursor with mouse
    document.addEventListener('mousemove', function (e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Click effect
    document.addEventListener('mousedown', function () {
        cursor.classList.add('clicked');
    });

    document.addEventListener('mouseup', function () {
        cursor.classList.remove('clicked');
    });

    // Hide cursor when leaving window
    document.addEventListener('mouseleave', function () {
        cursor.style.opacity = '0';
    });

    document.addEventListener('mouseenter', function () {
        cursor.style.opacity = '1';
    });
});