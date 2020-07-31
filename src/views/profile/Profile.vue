<template>
  <div id="profile">
      <nav-bar background-color="#ff8198" text-color="#fff">
        <p slot="center">买买</p>
      </nav-bar>
    <login-state/>
    <info-list/>
    <profile-list/>
  </div>
</template>

<script>
  import LoginState from "./childComponents/LoginState";
  import InfoList from "./childComponents/InfoList";
  import ProfileList from "./childComponents/ProfileList";

  import NavBar from "../../components/common/navbar/NavBar";
  export default {
    name: "Profile",
    components: {
      NavBar,
      LoginState,
      InfoList,
      ProfileList
    }
  }
</script>

<style scoped>

</style>
