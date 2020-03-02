<template>
  <div  class="col-md-2 mb-2">
    <div class="card">
      <img class="card-img-top" :src="'http://e-commerce-view-project.test/storage/products/' + product.product_picture"/>
      <div class="card-body">
        <h5 class="card-title">{{ product.title}}</h5>
        <p class="card-text">TK {{ product.unit_price}}</p>
      </div>
      <div class="card-footer">
        <router-link
          :to="'/products/' + product.id "
          class="btn btn-outline-success btn-sm"
        >Show</router-link>

      </div>
    </div>
  </div>
</template>

<script>
    import axios from '../../axios-auth'

    export default {
        props: ['product'],
        methods: {
            show(){
                let page_url = `api/products/${this.product.id}`
                axios.get(page_url)
                    .then(response => {
                        console.log(response)
                    }).catch(err => console.log(err))
            },
        }
    }
</script>

<style>

</style>
