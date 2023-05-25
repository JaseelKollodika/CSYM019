const tableBody = document.querySelector("#coursesTable tbody");
const currencySelect = document.querySelector("#currency");
const courses = [];

function loadData() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "./course.json");

    xhr.onload = function () {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            courses.push(...data.courses);
        } else {
            console.error(`Error loading data. Status code: ${xhr.status}`);
        }
    };

    xhr.onerror = function () {
        console.error(`Error loading data. Network error.`);
    };

    xhr.send();
}

// Call the function to load the data initially
loadData();

// Load data again if the currency is changed
currencySelect.addEventListener('change', function () {
    // Remove the existing course rows
    tableBody.innerHTML = '';

    // Load the data again with the updated prices
    loadData();
});

// Use setInterval to load the data every 22 seconds
const interval = setInterval(() => {
    if (courses.length > 0) {
        const course = courses.shift();

        const durationList = document.createElement("ul");
        course.duration.forEach((duration) => {
            const durationItem = document.createElement("li");
            durationItem.textContent = `${duration.name}: ${duration.duration}`;
            durationList.appendChild(durationItem);
        });

        const startingList = document.createElement("ul");
        course.starting.forEach((starting) => {
            const startingItem = document.createElement("li");
            startingItem.textContent = starting.name;
            startingList.appendChild(startingItem);
        });

        const feesUKList = document.createElement("ul");
        course.feesUk.forEach((fee) => {
            const feeItem = document.createElement("li");
            if (fee.currency === currencySelect.value) {
                feeItem.textContent = `${fee.currency}: ${fee.fees}`;
                feesUKList.appendChild(feeItem);
            }
        });

        const feesInternationalList = document.createElement("ul");
        course.feesInternational.forEach((fee) => {
            const feeItem = document.createElement("li");
            if (fee.currency === currencySelect.value) {
                feeItem.textContent = `${fee.currency}: ${fee.fees}`;
                feesInternationalList.appendChild(feeItem);
            }
        });

        const courseContainer = document.createElement("div");
        courseContainer.classList.add("course-container");
        courseContainer.innerHTML = `
                    <a href="${course.link}"><h3>${course.name}</h3></a>
                `;

        const row = tableBody.insertRow(-1);
        row.insertCell().appendChild(courseContainer);
        row.insertCell().textContent = course.level;
        row.insertCell().textContent = course.location;
        row.insertCell().appendChild(durationList);
        row.insertCell().appendChild(startingList);
        row.insertCell().appendChild(feesUKList);
        row.insertCell().appendChild(feesInternationalList);
        row.insertCell().textContent = course.courseDetails;
        row.insertCell().textContent = course.entryRequierment;
        row.insertCell().textContent = course.ielts;
    } 
}, 2000);
