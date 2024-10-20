document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const teacherName = params.get('name');
    
    if (teacherName) {
        document.getElementById('teacher-name').innerText = getTeacherDetails(teacherName);
    }
});

function getTeacherDetails(name) {
    const teachers = {
        'bcsc1012': 'Sohil Khan (BCSC 1012) - Design & Analysis of Algorithm',
        'pcph0002': 'Suresh Pratap Singh (PCPH 0002) - Competitive Programming',
        'bcse0133': 'Shivanshu Upadhyay (BCSE 0133) - Machine Learning Lab',
        'pgdh0001': 'Shyam Kuntail (PGDH 0001) - Data Science and Analytics',
        'pqrh0002': 'Anjali Mehra (PQRH 0002) - Group Discussion',
        'pvrh0001': 'Shiv Kumar (PVRH 0001) - Verbal Aptitude',
        'bedm0001': 'Preeti Verma (BEDM 0001) - Rashtra Gaurav',
        'bcsc1807': 'Sohil Khan (BCSC 1807) - Design & Analysis of Algorithm Lab',
        'tbpp01': 'Govind Jha/Parth (FullStack) - Full Stack Track',
        'tbpp02': 'Amir Khan/Piyush (DSA) - DSA Track',
    };

    return teachers[name] || 'Teacher information not available';
}
