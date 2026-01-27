

console.log('connecting.....');
import { createClient } from '@supabase/supabase-js';

//or  import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';


export const supabase = createClient('https://pkpbzthkwskkudqogyrl.supabase.co', 'sb_publishable_MOHaPhKPaA_4Gb7ZMgxQgg_I4YNNk_w');
export const testObj = { a: 1, b: 2 };

