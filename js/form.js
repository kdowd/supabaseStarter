import { supabase } from "./main.js";

const form = document.querySelector(".signup-form");

async function handleSubmit(e) {
    e.preventDefault();
    console.log("submitting", e.target.querySelector('input[type=email]').value);

    console.log(e.target.querySelector('input[type=email]').value);



    const { data, error } = await supabase.auth.signInWithOtp({
        email: e.target.querySelector('input[type=email]').value,
        options: {
            emailRedirectTo: 'http://127.0.0.63:5500/redirect.html'
        }
    });

    if (data) {
        window.pigg = data;
    }

    if (error) {
        alert(error.message);
    }

}

form?.addEventListener("submit", handleSubmit);