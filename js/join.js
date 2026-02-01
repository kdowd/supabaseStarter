import { supabase } from "./main.js";


const theLoginForm = document.querySelector(".login-form");


// const {user} = await supabase.auth.api.getUserByCookie(req)

theLoginForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log("join click ");
    // let { data, error } = await supabase.auth.user({

    // });


    const { data, error } = await supabase.auth.signUp({
        email: 'vvfnvfhxuqqntmuoph@nespj.com',
        password: 'example-password',
        options: {
            data: {
                first_name: 'John',
                age: 27,
            }
        }
    });

    if (error) {
        console.error('Sign up error:', error.message);
        // Handle specific errors like 'Invalid email', 'Password too weak', etc.
    } else {
        // Signup successful, but user may need to confirm their email
        // if all is good they will now be signed-in / authenticated
        // but not admins
        console.log('Sign up successful, check email for verification!');
        console.log('User:', data.user);
        // data.session will likely be null if email confirmation is on
    }

});

