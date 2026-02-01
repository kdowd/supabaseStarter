import { supabase } from "../js/main.js";
window.addEventListener("load", async () => {
    const { data: { user }, error } = await supabase.auth.getUser();
    const statusElement = document.querySelector('.status');


    console.log("User =", user);

    if (error) {
        // Auth session missing! probably
        console.log(error.message, " +++");
        statusElement.lastElementChild.classList.remove('hide');
        return;
    }

    if (user) {
        statusElement.firstElementChild.classList.remove('hide');
    } else {
        statusElement.lastElementChild.classList.remove('hide');
    }



});