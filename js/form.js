function formValidation() {
    const fullname = document.querySelector("#fullname");
    const emailid = document.querySelector("#emailid");
    const mobile = document.querySelector("#mobile");
    const dateofbirth = document.querySelector("#dob");
    const address = document.querySelector("#address");
    const country = document.querySelector("#country");
    const language = document.querySelector("#language");
    const file = document.querySelector("#file");


    const nameerror = document.getElementById("name-error");
    const emailiderror = document.getElementById("email-error");
    const mobileerror = document.getElementById("mobile-error");
    const dateofbirtherror = document.getElementById("dob-error");
    const gendererror = document.getElementById("gender-error");
    const addresserror = document.getElementById("address-error");
    const countryerror = document.getElementById("country-error");
    const languageerror = document.getElementById("language-error");
    const fileerror = document.getElementById("file-error");

    nameerror.textContent = "";
    emailiderror.textContent = "";
    mobileerror.textContent = "";
    dateofbirtherror.textContent = "";
    gendererror.textContent = "";
    addresserror.textContent = "";
    countryerror.textContent = "";
    languageerror.textContent = "";
    fileerror.textContent = "";

    fullname.classList.remove("input-error");
    emailid.classList.remove("input-error");
    mobile.classList.remove("input-error");
    dateofbirth.classList.remove("input-error");
    address.classList.remove("input-error");
    country.classList.remove("input-error");
    language.classList.remove("input-error");
    file.classList.remove("input-error");

    let isValid = true;

    // Full name
    if (fullname.value === "" || /\d/.test(fullname.value)) {
        nameerror.textContent = "Please enter your name properly";
        fullname.classList.add("input-error");
        isValid = false;
    }

    // Email
    if (emailid.value === "" || !emailid.value.includes("@")) {
        emailiderror.textContent = "Please enter your email id";
        emailid.classList.add("input-error");
        isValid = false;
    }

    // Mobile
    if (mobile.value === "" || mobile.value.length !== 10) {
        mobileerror.textContent = "Please enter a valid mobile number";
        mobile.classList.add("input-error");
        isValid = false;
    }

    // DOB
    if (dateofbirth.value === "") {
        dateofbirtherror.textContent = "Please enter date of birth";
        dateofbirth.classList.add("input-error");
        isValid = false;
    }

    // Gender
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        gendererror.textContent = "Please select your gender";
        isValid = false;
    }

    // Address
    if (address.value === "") {
        addresserror.textContent = "Please enter address";
        address.classList.add("input-error");
        isValid = false;
    }

    // Country
    if (country.value === "") {
        countryerror.textContent = "Please choose your country";
        country.classList.add("input-error");
        isValid = false;
    }

    // Language
    if (language.value === "") {
        languageerror.textContent = "Please choose your language";
        language.classList.add("input-error");
        isValid = false;
    }

    //upload file
    if (file.value ===""){
        fileerror.textContent = "Please choose your file";
        filw.classList.add("input-error");
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
    }

    return isValid;
}
