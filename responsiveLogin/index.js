document.addEventListener("DOMContentLoaded", () => {
    const signupBtn = document.querySelector(".signup");
    const loginBtn = document.querySelector(".login");
    const slider = document.querySelector(".slider");
    const formSection = document.querySelector(".form-section");

    signupBtn.addEventListener("click", () => {
        slider.classList.add("moveslider");
        formSection.classList.add("form-section-move");
    });

    loginBtn.addEventListener("click", () => {
        slider.classList.remove("moveslider");
        formSection.classList.remove("form-section-move");
    });
});
