<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light" v-if="authenticated">
      <a class="navbar-brand" href="#">MOKLET</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">
            <a>Home <span class="sr-only">(current)</span></a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/profil">Profile</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/member">Member</router-link>
          </li>
          <li class="nav-item" :class="{active: $route.name==='Product_page'}">
            <router-link class="nav-link" to="/product">Product</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/login" v-on:click="logout()">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
      <router-view @authenticated="setAuthenticated"></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      // authenticated: JSON.parse(localStorage.getItem('status'))
      authenticated: localStorage.getItem('status'),
      data: []
    }
  },
  methods: {
    setAuthenticated(status){
      this.authenticated = status
    },
    logout(){
      this.authenticated=false;
      localStorage.removeItem('status')
      localStorage.removeItem('token')
    },
    redirectlogin(){
      if(!this.authenticated){
        this.$router.replace('/login')
      }
    }
  },
  mounted(){
    this.redirectlogin();
    if(JSON.parse(localStorage.getItem('user'))!=null){
        this.data = JSON.parse(localStorage.getItem('user'));
    }
  }
}
</script>

