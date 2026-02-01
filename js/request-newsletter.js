import { supabase } from "./main.js";


const theForm = document.querySelector(".newsletter-form");


//orig_id,customer_id,first_name,last_name,company,city,country,phone_1,phone_2,email,subscription_date,website
theForm?.addEventListener('submit', async (e) => {


    e.preventDefault();
    console.log("submitting...", e.target.querySelector('input[name=first_name]').value.trim());




    if (!e.target.querySelector('input[type=email]').value.trim()) {
        alert("Please enter an email address");
        return false;
    }


    const { data, error } = await supabase.from('newsletters').insert({
        first_name: e.target.querySelector('input[name=first_name]').value.trim(),
        last_name: e.target.querySelector('input[name=last_name').value.trim(),
        email: e.target.querySelector('input[type=email]').value.trim(),
    }).select();

    if (error) {
        document.querySelector('.results').innerHTML = `<span class="error">${error.message}</span>`;

    }

    if (data) {
        console.log(data);
        window.pigg = data;
        document.querySelector('.results').innerHTML = JSON.stringify(data);
    }
});

