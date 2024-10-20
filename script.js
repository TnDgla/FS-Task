document.addEventListener('DOMContentLoaded', () => {
    // Get all subjects
    const subjects = document.querySelectorAll('.subject');
    const currentTime = new Date();
    
    // Function to show the dialog box with subject details
    function showDialog(event) {
        const subject = event.target.dataset.subject;
        const time = event.target.dataset.time;
        const faculty = event.target.dataset.faculty;

        // Create a modal dynamically
        const modal = document.createElement('div');
        modal.classList.add('modal');
        
        // Modal content
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-btn">&times;</span>
                <h2>${subject}</h2>
                <p><strong>Time:</strong> <span id="subject-time">${time}</span></p>
                <p><strong>Faculty:</strong> ${faculty}</p>
                <button id="edit-btn" class="edit-btn">Edit</button>
                <div id="edit-form" class="edit-form" style="display: none;">
                    <label for="new-time">New Time:</label>
                    <input type="text" id="new-time" value="${time}" placeholder="e.g., 10:00-11:00">
                    <button id="save-btn" class="save-btn">Save</button>
                </div>
            </div>
        `;

        // Append modal to body
        document.body.appendChild(modal);

        // Show the modal
        modal.style.display = 'block';

        // Close modal when clicking on the close button
        modal.querySelector('.close-btn').onclick = function() {
            modal.style.display = 'none';
            modal.remove();
        };

        // Close modal when clicking anywhere outside the modal content
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
                modal.remove();
            }
        };

        // Edit button event listener
        const editBtn = document.getElementById('edit-btn');
        const editForm = document.getElementById('edit-form');
        editBtn.addEventListener('click', () => {
            editForm.style.display = 'block'; // Show the edit form
        });

        // Save button event listener to change the time
        const saveBtn = document.getElementById('save-btn');
        const newTimeInput = document.getElementById('new-time');
        saveBtn.addEventListener('click', () => {
            const newTime = newTimeInput.value;
            if (newTime) {
                event.target.dataset.time = newTime; // Update time in dataset
                document.getElementById('subject-time').textContent = newTime; // Update time in modal
                modal.remove(); // Close modal
            }
        });
    }

    // Function to check if the current subject is ongoing
    function isOngoing(time) {
        const [start, end] = time.split('-');
        const [startHour, startMinute] = start.split(':').map(Number);
        const [endHour, endMinute] = end.split(':').map(Number);
        
        const currentHours = currentTime.getHours();
        const currentMinutes = currentTime.getMinutes();

        // Check if the current time is within the lecture time range
        return (currentHours > startHour || (currentHours === startHour && currentMinutes >= startMinute)) &&
               (currentHours < endHour || (currentHours === endHour && currentMinutes <= endMinute));
    }

    // Add event listeners to each subject
    subjects.forEach(subject => {
        subject.addEventListener('click', showDialog);

        // Check if this subject is ongoing
        const time = subject.dataset.time;
        if (isOngoing(time)) {
            subject.classList.add('ongoing');
        }
    });
});