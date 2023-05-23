import { createClient } from '@supabase/supabase-js'

export default ({ app }, inject) => {
    const supabaseUrl = process.env.NUXT_ENV_SUPABASE_URL
    const supabaseKey = process.env.NUXT_ENV_SUPABASE_KEY
    const supabase = createClient(supabaseUrl, supabaseKey)
  
    inject('supabase', supabase)
}