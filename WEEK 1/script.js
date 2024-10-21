const td = document.getElementsByTagName("td");

Array.from(td).forEach((e) => {
    e.addEventListener("click", async function () {
        const firstClassName = e.className.split(/\s+/)[0];

        if (firstClassName) {
            console.log(firstClassName);

            window.location.href = `profile.html?p=${encodeURIComponent(firstClassName)}`;
        } else {
            console.log("No valid class name found!");
        }
    });
});

