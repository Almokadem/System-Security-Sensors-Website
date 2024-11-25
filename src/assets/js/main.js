const tabs = document.querySelectorAll('[id^="tab-"]');
const contents = document.querySelectorAll('.tab-content');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
    const target = tab.id.replace('tab-', 'content-')
    // Hide all content
    contents.forEach(content => {
        content.classList.add('hidden');
    })
    // Show the selected content
    document.getElementById(target).classList.remove('hidden');
    });
});
const toggleButton = document.getElementById('toggleSidebar');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
toggleButton.addEventListener('click', () => {
sidebar.classList.toggle('-translate-x-full');
overlay.classList.remove('hidden');
});

function hideSidebar() {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
}
overlay.addEventListener('click', hideSidebar);

// Toggle FAQ visibility
function toggleFaq(id) {
const faq = document.getElementById(id);
const icon = document.getElementById('icon-' + id);
faq.classList.toggle('hidden');
icon.classList.toggle('rotate-180');
}