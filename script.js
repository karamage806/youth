const jobs = [
  {
    title: "Internship",
    company: "YouthTech Ltd",
    location: "KARENGE CELL",
    deadline: "April 30, 2025"
  },
  {
    title: "Junior Web Developer",
    company: "Creative Innovations",
    location: "REMERA SECTOR",
    deadline: "May 10, 2025"
  },
  {
    title: "Marketing Intern",
    company: "Bright Future Co.",
    location: "KIBUNGO SECTOR",
    deadline: "May 15, 2025"
  }
];

const jobList = document.getElementById("jobList");

function displayJobs(jobArray) {
  jobList.innerHTML = "";
  jobArray.forEach(job => {
    const jobCard = `
      <div class="col-md-4">
        <div class="card p-3 shadow-sm">
          <h5>${job.title}</h5>
          <p><strong>${job.company}</strong></p>
          <p>${job.location}</p>
          <p>Deadline: ${job.deadline}</p>
        </div>
      </div>
    `;
    jobList.innerHTML += jobCard;
  });
}

displayJobs(jobs);
