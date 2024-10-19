function showTeacherDetails(subject, teacher) {
    let contactInfo;
    let officeHours;

    switch (teacher) {
        case 'Sohal Khan':
            contactInfo = 'sohalkhan@gla.ac.in';
            officeHours = 'Mon & Wed, 2:00 PM - 4:00 PM';
            break;
        case 'Aman Kumar':
            contactInfo = 'amankumar@gla.ac.in';
            officeHours = 'Tue & Thu, 1:00 PM - 3:00 PM';
            break;
        case 'Shiv Kumar':
            contactInfo = 'shivkumar@gla.ac.in';
            officeHours = 'Fri, 10:00 AM - 12:00 PM';
            break;
        case 'Madhusudhan Datta':
            contactInfo = 'madhusudhan@gla.ac.in';
            officeHours = 'Mon & Thu, 3:00 PM - 5:00 PM';
            break;
        case 'Subham Sukla':
            contactInfo = 'subhamsukla@gla.ac.in';
            officeHours = 'Tue, 11:00 AM - 1:00 PM';
            break;
        case 'Praveen Mittal':
            contactInfo = 'praveenmittal@gla.ac.in';
            officeHours = 'Wed, 12:00 PM - 2:00 PM';
            break;
        case 'Reena Gupta':
            contactInfo = 'reenagupta@gla.ac.in';
            officeHours = 'Fri, 2:00 PM - 4:00 PM';
            break;
        default:
            contactInfo = 'N/A';
            officeHours = 'N/A';
            break;
    }

    const details = `
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Teacher:</strong> ${teacher}</p>
        <p><strong>Contact:</strong> ${contactInfo}</p>
        <p><strong>Office Hours:</strong> ${officeHours}</p>
    `;
    document.getElementById('teacherDetails').innerHTML = details;
   
    document.getElementById('teacherModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('teacherModal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('teacherModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
