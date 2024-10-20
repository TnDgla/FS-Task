function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

window.onload = function() {
    const teacher = getQueryParam('teacher');
    const teacherDetails = {
        'Science_A': {
            name: 'Mr. Sharma',
            email: 'sharma@gmail.com',
            education: 'M.Sc. in Physics',
            experience: '5 years of teaching experience'
        },
        'Maths_A': {
            name: 'Mrs. Gupta',
            email: 'gupta@gmail.com',
            education: 'M.Sc. in Mathematics',
            experience: '7 years of teaching experience'
        },
        'Science_B': {
            name: 'Mr. Patel',
            email: 'patel@gmail.com',
            education: 'M.Sc. in Chemistry',
            experience: '4 years of teaching experience'
        },
        'Maths_B': {
            name: 'Mrs. Verma',
            email: 'verma@gmail.com',
            education: 'M.Sc. in Mathematics',
            experience: '6 years of teaching experience'
        },
        'Arts_A': {
            name: 'Ms. Reddy',
            email: 'reddy@gmail.com',
            education: 'B.A. in Fine Arts',
            experience: '3 years of teaching experience'
        },
        'Social_A': {
            name: 'Mr. Nair',
            email: 'nair@gmail.com',
            education: 'M.A. in Social Studies',
            experience: '5 years of teaching experience'
        },
        'Hindi_A': {
            name: 'Ms. Singh',
            email: 'singh@gmail.com',
            education: 'M.A. in Hindi Literature',
            experience: '8 years of teaching experience'
        },
        'English_A': {
            name: 'Mr. Iyer',
            email: 'iyer@gmail.com',
            education: 'M.A. in English Literature',
            experience: '10 years of teaching experience'
        },
        'Sports_A': {
            name: 'Mr. Joshi',
            email: 'joshi@gmail.com',
            education: 'B.P.Ed.',
            experience: '5 years of coaching experience'
        },
        'Project_A': {
            name: 'Ms. Kapoor',
            email: 'kapoor@gmail.com',
            education: 'M.Tech. in Project Management',
            experience: '3 years of teaching experience'
        },
    };

    if (teacher) {
        const details = teacherDetails[teacher];
        document.getElementById('teacherName').innerText = details.name;
        document.getElementById('teacherDetails').innerHTML = `
            <strong>Email:</strong> ${details.email}<br>
            <strong>Education:</strong> ${details.education}<br>
            <strong>Experience:</strong> ${details.experience}
        `;
    }
};

function goBack() {
    window.history.back();
}
