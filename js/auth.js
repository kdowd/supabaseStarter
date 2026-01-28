import { supabase } from "./main.js";


const theLoginForm = document.querySelector(".login-form");


//orig_id,customer_id,first_name,last_name,company,city,country,phone_1,phone_2,email,subscription_date,website
theLoginForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log("auth click ");
    let { data, error } = await supabase.auth.signInWithPassword({
        email: 'kevin.dowd@gmail.com',
        password: 'qwerty123',
    });

    if (error) {
        console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++");
        console.log(error.message);
        console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++");
    }

    if (data) {
        console.log("###################################################");
        console.log(data);
        window.pigg = data;
        console.log("###################################################");
        document.querySelector('.results').innerHTML = JSON.stringify(data);
    }
});

