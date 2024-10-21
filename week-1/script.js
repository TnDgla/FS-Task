const urlParams = new URLSearchParams(window.location.search);
const teacher = urlParams.get('teacher');

if (teacher === 'Mr.Anil') {
  document.getElementById('teacher-name').innerText = 'Mr. Anil';
  document.getElementById('teacher-info').innerText = 'Subject: Hindi. Office: Room 105.';
} else if (teacher === 'Mrs.Anuja') {
  document.getElementById('teacher-name').innerText = 'Mrs. Anuja';
  document.getElementById('teacher-info').innerText = 'Subject: English. Office: Room 201.';
} else if (teacher === 'Mr.Bhargwa') {
  document.getElementById('teacher-name').innerText = 'Mr. Bhargwa';
  document.getElementById('teacher-info').innerText = 'Subject: Science. Office: Room 303.';
} else if (teacher === 'Mrs.Shhweta') {
  document.getElementById('teacher-name').innerText = 'Mrs. Shhweta';
  document.getElementById('teacher-info').innerText = 'Subject: Drawing. Office: Room 102.';
} else if (teacher === 'Mr.Chandra') {
  document.getElementById('teacher-name').innerText = 'Mr. Chandra';
  document.getElementById('teacher-info').innerText = 'Subject: Social Studies. Office: Room 401.';
} else {
  document.getElementById('teacher-name').innerText = 'Unknown Teacher';
  document.getElementById('teacher-info').innerText = 'Please check the timetable for the correct details.';
}
