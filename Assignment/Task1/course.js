fetch("course.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(courses) {
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for(let course of courses) {
      out += `
        <tr>
          <td>${course.courseName}</td>
          <td>${course.level}</td>
          <td>${course.duration.fullTime}</td>
          <td>${course.starting}</td>
          <td>${course.fees.uk.fullTime}</td>
          <td>${course.fees.international.fullTime}</td>
          <td>${course.location}</td>
        </tr>
      `;
    }
    placeholder.innerHTML = out; 
  });
