function attend(e) {
  e.preventDefault();
  const location = {
    location: this.dataset.location,
    willAttend: this.dataset.attending
  };

  fetch("/api/attend", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(location)
  })
    .then(res => {
      if (!res.ok) {
        throw new Error("IDK what's going on");
      }
      return res;
    })
    .catch(err => console.error(err));
}

function getAttendance(location) {
  return fetch(`/api/attend/${location}`)
    .then(res => {
      return res.json();
    })
    .then(json => {
      return json;
    })
    .catch(err => {
      console.log(err);
    });
}

const choices = document.querySelectorAll(".choice");
choices.forEach(choice => {
  choice.addEventListener("click", attend);
});

window.onload = function() {
  const venues = document.querySelectorAll(".business-title");
  venues.forEach(venue => {
    const location = venue.dataset.location;
    getAttendance(location).then(result => {
      venue.childNodes[4].textContent = " " + result.data;
    });
  });
};
