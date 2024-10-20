document.querySelectorAll('.subject').forEach(cell => {
    cell.addEventListener('click', function () {
        const teacher = this.getAttribute('data-teacher');
        document.getElementById('teacherDetails').innerText = `Teacher: ${teacher}`;
        document.getElementById('teacherModal').style.display = "block";
    });
});

document.querySelector('.close').addEventListener('click', function () {
    document.getElementById('teacherModal').style.display = "none";
});

window.onclick = function(event) {
    const modal = document.getElementById('teacherModal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
