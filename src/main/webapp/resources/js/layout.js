function toggle_sidebar_nav() {
    var sidebarNav = document.getElementById("layoutSidebar");
    var mainContent = document.getElementById("mainContent");

    if (sidebarNav.style.display != "none") {
        sidebarNav.style.display = "none";
        mainContent.style.marginLeft = "0px";
    } else {
        sidebarNav.style.display = "block";
        sidebarNav.style.width = "200px";
        mainContent.style.marginLeft = "200px";
    }
}