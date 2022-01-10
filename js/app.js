const toggleSidebarButton = document.getElementById('toggleSidebarButton');
const sidebar = document.getElementById('sidebar');

toggleSidebarButton.addEventListener('click', function(){
    sidebar.classList.toggle('active');
    toggleSidebarButton.classList.toggle('active');
})