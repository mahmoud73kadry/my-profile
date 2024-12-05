// Profile Modal
const profileImg = document.querySelector('.profile img'); // حدد صورة البروفايل
const profileModal = document.getElementById('profileModal');
const profileImage = document.getElementById('profileImage');
const profileCaption = document.getElementById('profileCaption');
const closeProfileModal = document.getElementsByClassName('close')[0];
profileImg.onclick = function() {
    profileModal.style.display = "block";
    profileImage.src = this.src; // تعيين صورة البروفايل في المودال
    profileCaption.innerHTML = this.alt; // تعيين النص البديل كتعليق
}
closeProfileModal.onclick = function() {
    profileModal.style.display = "none"; // إغلاق المودال
}
window.onclick = function(event) {
    if (event.target == profileModal) {
        profileModal.style.display = "none"; // إغلاق المودال عند النقر خارجه
    }
}

// Projects Modal
function openModal(project) {
    const modal = document.getElementById("projectModal");
    const modalImages = document.getElementById("modalImages");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    if (project === 'project1') {
        modalTitle.innerText = "Project 1";
        modalImages.innerHTML = `
            <img src="images/projects/project1/1.jpg" alt="Image 1">
            <img src="images/projects/project1/2.jpg" alt="Image 2">
            <img src="images/projects/project1/3.jpg" alt="Image 3">
            <img src="images/projects/project1/4.jpg" alt="Image 4">
            <img src="images/projects/project1/5.jpg" alt="Image 5">
            <img src="images/projects/project1/6.jpg" alt="Image 6">
        `;
        modalDescription.innerHTML = `
            This Is Description for your project1.
            <br><br>
            <a href="#" target="_blank" class="view-website">View Website</a>
        `;
    } else if (project === 'project2') {
        modalTitle.innerText = "Project 2";
        modalImages.innerHTML = `
            <img src="images/projects/project2/1.jpg" alt="Image 1">
            <img src="images/projects/project2/2.jpg" alt="Image 2">
            <img src="images/projects/project2/3.jpg" alt="Image 3">
            <img src="images/projects/project2/4.jpg" alt="Image 4">
            <img src="images/projects/project2/5.jpg" alt="Image 5">
            <img src="images/projects/project2/6.jpg" alt="Image 6">
        `;
        modalDescription.innerHTML = `
            This Is Description for your project2.
            <br><br>
            <a href="#" target="_blank" class="view-website">View Website</a>
        `;
    } else if (project === 'project3') {
        modalTitle.innerText = "Project 3";
        modalImages.innerHTML = `
            <img src="images/projects/project3/1.jpg" alt="Image 1">
            <img src="images/projects/project3/2.jpg" alt="Image 2">
            <img src="images/projects/project3/3.jpg" alt="Image 3">
            <img src="images/projects/project3/4.jpg" alt="Image 4">
            <img src="images/projects/project3/5.jpg" alt="Image 5">
            <img src="images/projects/project3/6.jpg" alt="Image 6">
        `;
        modalDescription.innerHTML = `
            This Is Description for your project3.
            <br><br>
            <a href="#" target="_blank" class="view-website">View Website</a>
        `;
    }
    modal.style.display = "block";
}
function closeModal() {
    document.getElementById("projectModal").style.display = "none";
}
// Close modal when clicking anywhere outside of it
window.onclick = function(event) {
    const modal = document.getElementById("projectModal");
    if (event.target == modal) {
        closeModal();
    }
}

function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const menuButton = document.querySelector('.menu-button');

    if (navMenu.style.display === 'block') {
        navMenu.style.display = 'none';
        menuButton.setAttribute('aria-expanded', 'false');
    } else {
        navMenu.style.display = 'block';
        menuButton.setAttribute('aria-expanded', 'true');
    }
}



