import { supabase } from "./main.js";

const { data } = supabase.auth.onAuthStateChange((event, session) => {
    console.log(event, session);

    if (event === 'INITIAL_SESSION') {
        console.log("handle initial session");
    } else if (event === 'SIGNED_IN') {
        console.log("handle sign in event");
    } else if (event === 'SIGNED_OUT') {
        console.log("handle sign out event");
    } else if (event === 'PASSWORD_RECOVERY') {
        console.log("handle password recovery event");
    } else if (event === 'TOKEN_REFRESHED') {
        console.log("handle token refreshed event");
    } else if (event === 'USER_UPDATED') {
        console.log("handle user updated event");
    }
});

// call unsubscribe to remove the callback
// data.subscription.unsubscribe();