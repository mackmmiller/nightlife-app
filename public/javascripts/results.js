console.log("results.js is runnning");

function attend(e) {
    fetch("/attend", {method="post", headers: new Headers(), body:JSON.stringify({choice: e})}).then((res) => res.json()).then((data) => console.log(data)).catch((err) => console.log(err))
}