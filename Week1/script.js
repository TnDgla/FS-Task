const cells = document.querySelectorAll('.timetable-cell');  

cells.forEach(cell => {  
    cell.addEventListener('click', function() {  
        const teacherName = this.dataset.teacher;  
        const subject = this.dataset.subject;  

        localStorage.setItem('teacherName', teacherName);  
        localStorage.setItem('teacherSubject', subject);  
        
        window.location.href = 'teacher.html';  
    });  
});  

if (window.location.pathname.endsWith('teacher.html')) {  
    document.getElementById('teacherName').innerText = localStorage.getItem('teacherName');  
    document.getElementById('teacherSubject').innerText = `Subject: ${localStorage.getItem('teacherSubject')}`;  
    
    const teacherEmail = localStorage.getItem('teacherName') === 'Mr. Gupta' ? 'Gupta@example.com' : 'Kumar@example.com';  
    const teacherPhone = localStorage.getItem('teacherName') === 'Mr. Gupta' ? '123-456-7890' : '098-765-4321';  
    
    document.getElementById('teacherEmail').innerText = teacherEmail;  
    document.getElementById('teacherPhone').innerText = teacherPhone;  
}  

  
function goBack() {  
    window.history.back();  
}