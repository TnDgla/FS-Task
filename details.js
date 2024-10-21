function showDetails(subject, teacherName, age, email) {
    const detailsDiv = document.getElementById('teacherDetails');
    detailsDiv.innerHTML = `
        <h3>${teacherName} - ${subject}</h3>
        <p>Age: ${age}</p>
        <p>Email: <a href="mailto:${email}">${email}</a></p>
    `;
    detailsDiv.style.display = 'block';

    console.log('heloo');

    let arr=new Array(5);
    arr.add()

}