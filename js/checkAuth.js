import { supabase } from "./main.js";

const statusButton = document.querySelector('.checkLoginStatus > button');



statusButton.addEventListener("click", async (e) => {
    console.log("Check Login");
    const { data: { user }, error } = await supabase.auth.getUser();

    if (error) {
        console.error("Error fetching user:", error.message);
        return false;
    }


    if (user) {
        // User is logged in, you can access user details via session.user
        console.log('Logged in user:', user);
        document.querySelector('.checkLoginStatus span').innerHTML = user ? user.email : 'Unknown.';
    } else {
        // User is not logged in
        document.querySelector('.checkLoginStatus span').innerHTML = 'No session.';
    }
});



