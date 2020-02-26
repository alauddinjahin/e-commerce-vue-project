  
<template>
  <div class="component">
    <h1>This user component</h1>
    <p>I'm an awesome user!</p>
    <button @click="changeName">Change My Name</button>
    {{ name }}
    {{ age }}
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail
          :myName="name"
          @nameWasChanged="name = $event"
          :resetFn="resetNameCB"
          :userAge="age"
        ></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit :userAge="age" @ageWasEdited="age = $event"></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
  import UserDetail from "./UserDetail";
  import UserEdit from "./UserEdit";
  export default {
     data: function(){
       return {
         name: 'Ahosan',
         age: 27
       }
     },
    methods: {
      changeName: function () {
        this.name = 'Habib';
      },
      resetNameCB: function () {
        this.name = 'Ahosan';
      }
    },
    components: {
      appUserDetail: UserDetail,
      appUserEdit: UserEdit
    }
  }
</script>

<style scoped>
</style>