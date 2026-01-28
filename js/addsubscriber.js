import { supabase } from "./main.js";


const theButton = document.querySelector(".add-subscriber");


//orig_id,customer_id,first_name,last_name,company,city,country,phone_1,phone_2,email,subscription_date,website
theButton?.addEventListener('click', async () => {
    console.log('click');

    const { data, error } = await supabase.from('subscribers').insert({
        website: 'test@gmail.com',
        first_name: 'test',
        last_name: 'test',
        company: 'test',
        city: 'test',
        country: 'test',
        email: 'test',


    }).select();

    if (error) {
        console.log(error.message);
    }

    if (data) {
        console.log(data);
        window.pigg = data;
        document.querySelector('.results').innerHTML = JSON.stringify(data);
    }
});

