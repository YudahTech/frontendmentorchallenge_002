const subscribeBtn = document.querySelector(".subscribe-btn"),
main = document.querySelector(".main"),
success = document.querySelector(".success"),
input = document.querySelector("input"),
emailLabel = document.querySelector(".email-label"),
form = document.querySelector("form"),
emailContainer = document.querySelector("email-container"),
successContainer = document .querySelector(".success-container"),
dismissBtn = document.createElement("button");





function subscribe(e) {
    e.preventDefault()
if (!input.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
 || input.value === "") {

    emailLabel.innerHTML = "Valid email required*"
    input.classList.add("active");
    //  alert("Email is required");
    } else {
        success.classList.remove("hide")
        main.classList.add("hide")
        successContainer.innerHTML = `
        <img src="/assets/images/icon-success.svg" alt="">
    <h1> Thanks for subscribing!
    </h1>
    <p class="email-container">A confirmation email has been sent to <strong>${input.value}</strong>
      Please open it and click the button inside to confirm your subscription.</p>
        `
    dismissBtn.innerText = "Dismiss Message"
    dismissBtn.classList.add("dismiss-btn")
    successContainer.appendChild(dismissBtn)
}
}

subscribeBtn.addEventListener("click", subscribe);

dismissBtn.addEventListener("click", () => {
        main.classList.remove("hide");
        success.classList.add("hide");
        input.value = ""
        input.classList.remove("active");
        emailLabel.innerHTML = ""
    });



