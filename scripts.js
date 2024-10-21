document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const teacherName = params.get('name');
    
    if (teacherName) {
        document.getElementById('teacher-name').innerText = getTeacherDetails(teacherName);
    }
});

function getTeacherDetails(name) {
    const teachers = {
        'bcsc1012': 'Ram Mohan Sharma (BCSC 1012) - Expert in Computer Science',
        'pcph0002': 'Vinay Tiwari (PCPH 0002) - Physics Professor',
        'bcse0133': 'Chandra Shekhar Sharma (BCSE 0133) - Software Engineering Specialist',
        'pgdh0001': 'Shyam Kuntail (PGDH 0001) - Data Science and Analytics',
        'pqrh0002': 'Nishu Agrawal (PQRH 0002) - Robotics Instructor',
        'pvrh0001': 'Pradeep Chaudhary (PVRH 0001) - AI and Machine Learning Specialist',
        'bedm0001': 'Saras Singh Chauhan (BEDM 0001) - Database Expert',
        'bcsc1807': 'Ambika Sharma (BCSC 1807) - Web Development Specialist',
    };

    return teachers[name] || 'Teacher information not available';
}
