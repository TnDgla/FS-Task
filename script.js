document.querySelectorAll(".subject-cell").forEach((cell) => {
    cell.addEventListener("click", function () {
      const teacher = this.getAttribute("data-teacher");
      const subject = this.getAttribute("data-subject");
      alert(`Subject: ${subject}\nTeacher: ${teacher}`);
    });
  });