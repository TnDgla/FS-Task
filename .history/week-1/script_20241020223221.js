
const modal = document.getElementById('teacherModal');


const teacherDetailsElement = document.getElementById('teacherDetails');
const additionalDetailsElement = document.getElementById('additionalDetails');

const timetableCells = document.querySelectorAll('.details');
timetableCells.forEach(cell => {
    cell.addEventListener('click', () => {
        const teacher = cell.getAttribute('data-teacher');
        const subject = cell.getAttribute('data-subject');
        
        if (teacher && subject) {
        
            const email = teacher.toLowerCase().replace(/ /g, '.') + '@gmail.com';
            teacherDetailsElement.textContent = `Subject: ${subject}, Teacher: ${teacher}`;
            additionalDetailsElement.innerHTML = `For more information about ${teacher}, please reach out via <a href="mailto:${email}">${email}</a> or contact.`;

            const modalInstance = new bootstrap.Modal(modal);
            modalInstance.show();

      
            const contactBtn = document.getElementById('contactBtn');
            contactBtn.onclick = () => {
                window.location.href = `contact.html?teacher=${encodeURIComponent(teacher)}&subject=${encodeURIComponent(subject)}`;
            };
        } else {
            console.error('Teacher or subject data not found!');
        }
    });
});
