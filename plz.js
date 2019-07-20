const btn = document.getElementById("btn");
let tmp = 1;

function getindex(c) {
    let d = 0;
    for (d; c = c.previousElementSibling; d++);
    return d
}

function decryptEffect(elem, time) {
    const effect = setInterval(function() {
        elem.innerText = Math.floor(Math.random()*44 + 1)
    }, 10);
    setTimeout(function() {
        clearInterval(effect),
        elem.classList.add("done"),
        elem.innerText = Math.floor(Math.random()*44 + 1)
    },  time * 1000 + 1000)
}

function lottery() {
    Array.from(document.querySelectorAll(".ball")).forEach(a => {
        a.classList.remove("done"),
        decryptEffect(a, getindex(a))
    })
}

btn.addEventListener("click", function() {
    tmp === 1 && (
        tmp = 0,
        btn.classList.add("hide"),
        lottery(),
        setTimeout(function() {
            tmp = 1,
            btn.classList.remove("hide")
        }, 9000)
    )
})
