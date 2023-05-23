<script>

export default{
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async signUp(){
    const { data, error } = await this.$supabase.auth.signUp({
        email: this.email,
        password: this.password
      })
      console.log(data, error)
  },
  // async mounted() {
  //   /* when the component loads, fetch the user's profile */
  //   const profile = await this.$supabase.auth.user()
  //   this.profile = profile
  // }
          
    
  }}
</script>

<template>
  <div class="text-center form-signin container">
    <form @submit.prevent="signUp">
      <h1 class="h3 mb-3 mt-5 fw-normal">Please sign up</h1>
      
      <div class="form-floating mb-3">
        <input type="email" class="form-control" v-model="email" placeholder="Email Address">
      </div>

      <div class="form-floating mb-3">
        <input type="password" class="form-control" v-model="password" placeholder="Password">
      </div>
      
      
      <button class="w-100 btn btn-lg btn-primary mb-3"><i class="material-icons mr-2">facebook</i>Sign in with Facebook</button>
      <button class="w-100 btn btn-lg btn-danger mb-3"><i class="material-icons mr-2">email</i>Sign in with Google</button>
      <button class="w-100 btn btn-lg btn-secondary" type="submit">Sign Up</button>
      
      <div class="checkbox mb-3">
        <label>
          <NuxtLink to="/signin">Already have an account? Sign In</NuxtLink>
          
        </label>
      </div>
    </form>
    
      
      
          
    </div>
</template>

