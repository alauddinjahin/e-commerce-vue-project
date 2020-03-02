<template>
  <div class="row">
    <div  class="col-md-2 mb-2">
      <div class="card">
        <img class="card-img-top" :src="'http://e-commerce-view-project.test/storage/products/' + product.product_picture"/>
        <div class="card-body">
          <h5 class="card-title">{{ product.title}}</h5>
          <p class="card-text">TK {{ product.unit_price}}</p>
        </div>
      </div>
    </div>
    <div  class="col-md-10 mb-10">
      <div class="card">
        <div class="card-body">
          <strong>Description</strong>
          <p v-html="product.description"></p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
    import axios from '../../axios-auth'

    export default {
        data(){
            return {
                product: {}
            }
        },
        created(){
            this.getProduct()
        },
        methods: {
            getProduct(){
                axios.get('api/products/' + this.$route.params.product)
                    .then(response => {
                        this.product = response.data;
                        console.log(response.data);
                    }).catch(err => console.log(err))
            },
        }
    }
</script>

<style>

</style>
