function showDetails(teacher, subject) {
    document.getElementById('teacherName').innerText = teacher;
    document.getElementById('subjectDetails').innerText = "Subject: " + subject;
    $('#teacherDetailsModal').modal('show');
}

function showContactPage() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('contact').style.display = 'block';
}

function goBack() {
    document.getElementById('contact').style.display = 'none';
    document.getElementById('home').style.display = 'block';
}
