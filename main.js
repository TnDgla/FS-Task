const subjectDetails = {
    "Maths": "Mr. Harendra Singh[Room no. 202] ",
    "Science": "Mrs. Priyanka Yadav [Room no. 300]",
    "Hindi": "Ms. Sakshi Singh [Room no. 101]",
    "English": "Ms. Khushi Kumari [Room no. 401]",
    "Sports": "Mr. Arjun Yadav [Sports room]",
    "Social": "Mr. Yash Sharma [Room no. 209]",
    "Arts": "Mrs. Mehak Agarwal [Art room]",
    "Project": "Mr. Piyush Gupta[Room no. 410]",
    "Commerce": "Mr. Ranvir Gupta[Room no. 409]",
    "Chemistry": "Mr. Vivek Singh[Room no. 310]",
    "Physics": "Mr. Ram Kumar[Room no. 210]"




};


function showDetails(subject) {
    const details = subjectDetails[subject] || "Details not available.";
    alert(`You clicked on: ${subject}\n${details}`)

}