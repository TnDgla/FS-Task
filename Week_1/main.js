
const subjectDetails = {
    "Maths": "Mr. Arvind Agarrwal [Room no. 202] ",
    "Science": "Mr. Asheshanand Acharaya [Room no. 300]",
    "Hindi": "Ms. Pushpanjali [Room no. 101]",
    "English": "Ms. Shazda Ali [Room no. 401]",
    "Game": "Ms. Sulekha [Sports room]",
    "Social": "Mr. R.D [Room no. 209]",
    "Arts": "Ms. Neelam [Art room]"

};


function showDetails(subject) {
    const details = subjectDetails[subject] || "Details not available.";
    alert(`You clicked on: ${subject}\n${details}`);
}

