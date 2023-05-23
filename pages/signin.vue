<template>
  <div>

    <Head>
            <Title>Sign In</Title>

  </Head>
    <div class="text-center form-signin container">
      <form @submit.prevent="onSubmit">
        <h1 class="h3 mb-3 mt-5 fw-normal">Please sign in</h1>
        
        <!-- <div class="form-floating mb-3">
          <input type="text" class="form-control" id="floatingInput" placeholder="First Name">
          
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="floatingInput" placeholder="Last Name">
          
        </div> -->
        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="floatingInput" placeholder="Email Address">
        </div>
  
        <div class="form-floating mb-3">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
        </div>

        <div class="checkbox mb-3">
          <label>
            <a href="">Forgot Password?</a>
            
          </label>
        </div>
        
        
        <button class="w-100 btn btn-lg btn-primary mb-3" type="submit"><i class="material-icons mr-2">facebook</i>Sign in with Facebook</button>
        <button class="w-100 btn btn-lg btn-danger mb-3" type="submit"><i class="material-icons mr-2">email</i>Sign in with Google</button>
        <button class="w-100 btn btn-lg btn-secondary" type="submit" @click="SignIn">Sign in</button>
        
        <div class="checkbox mb-3">
          <label>
            <NuxtLink to="/">Don't have an account? Sign up</NuxtLink>
            
          </label>
        </div>
      </form>

      
      
        
        
            
      </div>
  </div>
  </template>

<script setup>
const client = useSupabaseClient()

const SignIn = async () => {
   const {user, error} = await client.auth.SignIn({
    email: email.value,
    password: password.value
   })
}