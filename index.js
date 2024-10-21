function showTeacher(subject) {
    const teacher = {
        'MACHINE LEARNING': '<b>Jagjeet Kumar</b> - jagjeetkumar@hotmail.com<br><br>Room: AB1 201, Contact: 791558602',
        'COMPETITIVE PROGRAMMING': '<b>Suresh Pratap Singh</b> - surestsingh@gla.ac.in<br><br>Room: AB9 106, Contact: 8955622330',
        'AGILE SOFTWARE DEVELOPMENT': '<b>Sonal Singh</b> - sonalsingh@gla.ac.in<br><br>Room: AB3 301, Contact: 7617765062',
        'QUANT AND APTITUDE': '<b>Jay Prakash Dixit</b> - jay_prakash@gla.ac.in<br><br>Room: AB3 202, Contact: 8155112385',
        'GROUP DISCUSSION': '<b>Dr. Anjali Mehra</b><br><br>Room: AB1 403, Contact: 76589865211',
        'MACHINE LEARNING LAB': '<b>Anushka sukhla</b> - anushka_sukla2@gla.ac.in<br><br>Room: AB1 202, Contact: 9085328958',
        'DESIGN ANALYSIS AND ALGORITHM': '<b>Sohil Khan</b> - sohilKhan@gmail.com<br><br>Room: AB1 413, Contact: 87255665452',
        'FULL_STACK': '<b>Govind Jha</b> - govind_jha@gmail.com<br><br>Room: AB9 109, Contact: 8901234567'
    };


    document.getElementById('details').innerHTML = teacher[subject];
    document.getElementById('teacher').style.display = 'flex';
}

function closeModal() {
    document.getElementById('teacher').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('teacher');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}