<template>
  <div class="component">
    <h3>You may view the user details here</h3>
    <p>Details</p>
    <p>{{ userAge }}</p>
    <p>User Name: {{ switchedName() }}</p>
    <button @click="resetName">Reset Name</button>
    <button @click="resetFn()">Reset Name</button>
  </div>
</template>

<!--props name is same as what we using on template. because behind the seen this will create the property-->

<script>
    import { eventBus } from "../main";
    export default {
      props: {
        myName: String,
        resetFn: Function,
        userAge: Number
      },
      methods: {
        switchedName(){
          return this.myName.split("").reverse().join("");
        },
        resetName(){
          this.myName = 'Ahosan';
          this.$emit('nameWasChanged', this.myName);
        }
      },
      created(){
        eventBus.$on('ageWasEdited', (age)=>{
          this.userAge = age;
        })
      }
    }
</script>

<style scoped>
  div{
    background-color: lightcoral;
  }
</style>