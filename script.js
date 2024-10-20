document.addEventListener("DOMContentLoaded", () => {
    const now = new Date()
    const currentDay = now.getDay();
    const currentHour = now.getHours();
    console.log(currentHour);
    const currentMinute = now.getMinutes();
    console.log(currentMinute);
    // Mapping days of the week to the corresponding table column 
    const dayMapping = {
        1: 2, // Monday
        2: 3, // Tuesday
        3: 4, // Wednesday
        4: 5, // Thursday
        5: 6, // Friday
        6: 7  // Saturday
    };

    // Map hours to corresponding time slots 
    const timeMapping = {
        10: 2, // 10-11 AM (2nd row in the table)
        11: 3, // 11-12 PM
        12: 4, // 12-1 PM
        13: 5, // 1-2 PM
        14: 6, // 2-3 PM
        15: 7, // 3-4 PM
        16: 8, // 4-5 PM
        17: 9  // 5-6 PM
    };

    // Check if current day and hour matches the timetable
    if (currentDay >= 1 && currentDay <= 6 && currentHour >= 11 && currentHour <= 17) {
        const dayColumn = dayMapping[currentDay]; // Get the column for the day
        const timeRow = timeMapping[currentHour]; // Get the row for the time slot

        // Select the correct table cell
        const cell = document.querySelector(`table tr:nth-child(${timeRow}) td:nth-child(${dayColumn})`);


        // Add the blinking class to the cell
        if (cell) {
            cell.classList.add('blinking');
        }
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const subjectCells = document.querySelectorAll("td.subject");

    function handleCellClick() {
        const subject = this.textContent.trim();
        window.location.href=`teacherInfoPage.html?subject=${subject}`;
        console.log(subject);
    }
    subjectCells.forEach(cell => {
        cell.addEventListener("click", handleCellClick);
    }); 
});

function getQueryParam(paramName) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(paramName);
}
function getSubject() {
    const subject = getQueryParam("subject");
    console.log(subject);

    const subjectNameElem = document.getElementById('subject-name');
    const subjectCodeElem = document.getElementById('subject-code');
    const subjectCreditElem = document.getElementById('subject-credit');
    const teacherNameElem = document.getElementById('teacher-name');
    const teacherEmailElem = document.getElementById('teacher-email');
    const teacherNumberElem = document.getElementById('teacher-number');
    const academicBlockElem = document.getElementById('academic-block');
    const roomNumberElem = document.getElementById('room-number');
    const timeElem = document.getElementById('time');
// Map subject to corresponding details
    const subjectDetails = {
        'BCSC 1012': {
            subjectName: 'Design & Analysis of Algorithms',
            subjectCode: 'BCSC1012',
            subjectCredit: '3',
            teacherName: 'Mr. Prateek R Bhansali',
            teacherEmail: 'prateek.bhansali@university.edu',
            teacherNumber: '+123456789',
            academicBlock: 'Block ABI',
            roomNumber: '305',
            time: '11:00 AM - 12:00 PM'
        },
        'BCSC 1807': {
            subjectName: 'Design & Analysis of Algorithms Lab',
            subjectCode: 'BCSC1807',
            subjectCredit: '0',
            teacherName: 'Mr. Prateek R Bhansali',
            teacherEmail: 'prateek.bhansali@gla.ac.in',
            teacherNumber: '+123456789',
            academicBlock: 'Block ABI',
            roomNumber: '305',
            time: '02:00 PM - 03:00 PM (Thursday)'
        },
        'BCSE 0105': {
            subjectName: 'Machine Learning',
            subjectCode: 'BCSE0105',
            subjectCredit: '3',
            teacherName: 'Mr. Shivanshu Upadhyay',
            teacherEmail: 'shivanshu.upadhyay@gla.ac.in',
            teacherNumber: '+987654321',
            academicBlock: 'Block ABI',
            roomNumber: '423',
            time: '02:00 PM - 03:00 PM (Friday)'
        },
        'BCSE 0133': {
            subjectName: 'Machine Learning Lab',
            subjectCode: 'BCSE0105_Lab',
            subjectCredit: '0',
            teacherName: 'Mr. Shivanshu Upadhyay',
            teacherEmail: 'shivanshu.upadhyay@gla.ac.in',
            teacherNumber: '+987654321',
            academicBlock: 'Block ABI',
            roomNumber: '423',
            time: '04:00 PM - 05:00 PM (Wednesday)'
        },
        'BCSE 0053': {
            subjectName: 'Agile Software Development',
            subjectCode: 'BCSE0053',
            subjectCredit: '3',
            teacherName: 'Ms. Sonal Singh',
            teacherEmail: 'sonal.singh@gla.ac.in',
            teacherNumber: '+123456789',
            academicBlock: 'Block ABI',
            roomNumber: '302',
            time: '03:00 PM - 04:00 PM (Wednesday)'
        },
        'PCPH 0002': {
            subjectName: 'Verbal Aptitude',
            subjectCode: 'PCPH0002',
            subjectCredit: '1',
            teacherName: 'Mr. Shiv Kumar',
            teacherEmail: 'shiv.kumar@gla.ac.in',
            teacherNumber: '+987654321',
            academicBlock: 'Block ABI',
            roomNumber: '413',
            time: '04:00 PM - 05:00 PM (Thursday)'
        },
        'PQRH 0001': {
            subjectName: 'Quant & Reasoning Aptitude',
            subjectCode: 'PQRH0001',
            subjectCredit: '1',
            teacherName: 'Mr. Jay Prakash Garg',
            teacherEmail: 'jay.garg@gla.ac.in',
            teacherNumber: '+123456789',
            academicBlock: 'Block ABI',
            roomNumber: '405',
            time: '11:00 AM - 12:00 PM (Thursday)'
        },
        'PCPH 0001': {
            subjectName: 'Logical Reasoning',
            subjectCode: 'PCPH0001',
            subjectCredit: '1',
            teacherName: 'Mr. Jay Prakash Garg',
            teacherEmail: 'jay.garg@gla.ac.in',
            teacherNumber: '+123456789',
            academicBlock: 'Block ABI',
            roomNumber: '405',
            time: '12:00 PM - 01:00 PM (Thursday)'
        },
        'PVRH 0001': {
            subjectName: 'Group Discussion & Personal Interview',
            subjectCode: 'PVRH0001',
            subjectCredit: '1',
            teacherName: 'Ms. Anjali Mehra',
            teacherEmail: 'anjali.mehra@gla.ac.in',
            teacherNumber: '+987654321',
            academicBlock: 'Block ABI',
            roomNumber: '321',
            time: '04:00 PM - 05:00 PM (Friday)'
        },
        'BEDM 0001': {
            subjectName: 'Rashtra-Gaurav',
            subjectCode: 'BEDM0001',
            subjectCredit: '2',
            teacherName: 'Dr. Preeti Verma',
            teacherEmail: 'preeti.verma@gla.ac.in',
            teacherNumber: '+123456789',
            academicBlock: 'Online',
            roomNumber: 'Online',
            time: '05:00 PM - 06:00 PM (Friday & Saturday)'
        }
    };


    // Populate the page with the correct details
    const details = subjectDetails[subject];
    if (details) {
        subjectNameElem.textContent = `Subject: ${details.subjectName}`;
        subjectCodeElem.textContent = `Subject Code: ${details.subjectCode}`;
        subjectCreditElem.textContent = `Subject Credit: ${details.subjectCredit}`;
        teacherNameElem.textContent = `Name: ${details.teacherName}`;
        teacherEmailElem.textContent = `Email: ${details.teacherEmail}`;
        teacherNumberElem.textContent = `Number: ${details.teacherNumber}`;
        academicBlockElem.textContent = `Academic Block: ${details.academicBlock}`;
        roomNumberElem.textContent = `Room Number: ${details.roomNumber}`;
        timeElem.textContent = `Time: ${details.time}`;
    }
    
}
document.addEventListener('DOMContentLoaded', getSubject);