import { supabase } from "./main.js";

const form = document.querySelector(".login-form");
form?.addEventListener("submit", handleSubmit);

async function handleSubmit(e) {
    e.preventDefault();


    console.log("submitting...", e.target.querySelector('input[type=email]').value);

    console.log(e.target.querySelector('input[type=password]').value, " >>>>>");


    if (!e.target.querySelector('input[type=email]').value) {
        alert("Please enter an email address");
        return false;
    }


    if (!e.target.querySelector('input[type=password]').value) {
        alert("Please enter a password");
        return false;
    }
    //info@cleverfolk.co.nz , yrH 76!
    const { session, error } = await supabase.auth.signInWithPassword({
        email: e.target.querySelector('input[type=email]').value,
        password: e.target.querySelector('input[type=password]').value,

    });

    if (session) {
        alert("signed in successfully.");
        window.pigg = session;

    }

    if (error) {
        alert(error.message);
    }

}

