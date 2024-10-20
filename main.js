const subjectDetails = {
    "Maths": "Mr. Dharmendra Yadav [Room no. 202] ",
    "Science": "Mrs. Neerja Sharma [Room no. 300]",
    "Hindi": "Mrs. Seema Jain [Room no. 101]",
    "English": "Mrs. Sahiba Khan [Room no. 401]",
    "Sports": "Mr. Y.P Singh [Sports room]",
    "Social": "Mr. Amit Singh [Room no. 209]",
    "Arts": "Mrs. Rihana Parveen [Art room]",
    "Project": "Mr. Piyush Gupta[Room no. 420]"

};


function showDetails(subject) {
    const details = subjectDetails[subject] || "Details not available.";
    alert(`You clicked on: ${subject}\n${details}`);
}
