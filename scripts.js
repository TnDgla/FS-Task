document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const teacherName = params.get('name');
    
    if (teacherName) {
        document.getElementById('teacher-name').innerText = getTeacherDetails(teacherName);
    }
});

function getTeacherDetails(name) {
    const teachers = {
        'bcsc1012': 'Nikhil Govil (BCSC 1012) - Agile Software Development',
        'pcph0002': 'Suresh singh (PCPH 0002) - Soft Skils',
        'bcse0133': 'Sohil Khan (BCSE 0133) - Design and Analysis of Algorithms',
        'pgdh0001': 'jay prakash garg (PGDH 0001) - Data Science and Analytics',
        'pqrh0002': 'Akash Chaudhary (PQRH 0002) - Apptitude',
        'pvrh0001': 'Naman Mishra (PVRH 0001) - AI and Machine Learning',
        'bedm0001': 'Kunal (BEDM 0001) - DBMS',
        'bcsc1807': 'Himanshu Sharma (BCSC 1807) - Web Development',
    };

    return teachers[name] || 'Teacher information not available';
}
