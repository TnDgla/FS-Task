// Get all teacher cells
const teacherCells = document.querySelectorAll('.teacher-cell');

// Event listener for each teacher cell
teacherCells.forEach(cell => {
    cell.addEventListener('click', () => {
        const subject = cell.getAttribute('data-subject');
        const teacher = cell.getAttribute('data-teacher');
        const cabin = cell.getAttribute('data-cabin');
        const phone = cell.getAttribute('data-phone');
        
        // Redirect to a new page with teacher details
        const queryString = `?subject=${subject}&teacher=${teacher}&cabin=${cabin}&phone=${phone}`;
        window.location.href = `subject.html${queryString}`;
    });
});
