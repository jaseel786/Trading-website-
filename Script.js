document.addEventListener('DOMContentLoaded', function() {
const navLinks = document.querySelectorAll('.nav-links li');
const pages = document.querySelectorAll('.page-content');
navLinks.forEach(link => {
link.addEventListener('click', function(e) {
e.preventDefault();
const targetPage = this.getAttribute('data-page');
navLinks.forEach(l => l.classList.remove('active'));
this.classList.add('active');
pages.forEach(page => {
page.classList.remove('active');
if (page.id === targetPage) {
page.classList.add('active');
}
});
});
});
const userInfoDropdown =
document.getElementById('userInfoDropdown');
const profileDropdown =
document.getElementById('profileDropdown');
notification.innerHTML = `
<div class="notification-header">
<span class="notification-title">
<span class="notification-icon">${iconMap[type]}</span>
${type.charAt(0).toUpperCase() + type.slice(1)}
</span>
<button class="notification-close">&times;</button>
</div>
<div class="notification-body">${message}</div>
<div class="notification-progress">
<div class="notification-progress-bar"></div>
</div>
`;
notificationContainer.appendChild(notification);
setTimeout(() => notification.classList.add('show'), 10);
const progressBar = notification.querySelector('.notification-
progress-bar');
let width = 100;
const interval = setInterval(() => {
width -= 100 / (duration / 100);
progressBar.style.width = `${width}%`;
if (width <= 0) {
clearInterval(interval);
hideNotification(notification);
}
}, 100);
notification.querySelector('.notification-
close').addEventListener('click', () => {
clearInterval(interval);
hideNotification(notification);
});
function hideNotification(notification) {
notification.classList.remove('show');
setTimeout(() => notification.remove(), 300);
}
}
});
