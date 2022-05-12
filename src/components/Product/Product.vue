<template>
    <div class="card mb-4">
        <div class="card-header">
            <i class="fas fa-table me-1"></i>
            List Product
            <router-link class="btn btn-primary btn-sm float-right" :to="{path:'/addProduct'}" ><i class='fas fa-folder-plus'></i> Add Product</router-link>
        </div>
        <div class="container m-auto d-flex flex-wrap align-items-stretch justify-content-around justify-content-sm-around">
            <div class="card mt-3" style="width:250px" v-for="lp in list_product" :key="lp">
                <img :src="'http://localhost/PROJECT-LARAVEL/belajar-toko/public/photo/' + lp.foto_product" width="250" height="200">
                <div class="card-body">
                    <h4 class="card-title">{{ lp.nama_product }}</h4>
                    <p class="card-text">{{ lp.deskripsi }}</p>
                    <h5 class="card-text">Rp. {{ lp.harga }}</h5>
                    <a class="d-flex flex-wrap justify-content-around">
                        <router-link class="btn btn-primary" :to="{path: '/addCart/' + lp.id_product}"><i class='fas fa-cart-plus'></i></router-link>
                        <router-link class="btn btn-warning" :to="{path: '/uploadProduct/' + lp.id_product}"><i class='fas fa-image'></i></router-link>
                        <router-link class="btn btn-info" :to="{path: '/updateProduct/' + lp.id_product}"><i class='fas fa-pen'></i></router-link>
                        <button v-on:click="hapus(lp.id_product)" class="btn btn-danger" ><i class="fas fa-trash-alt fa-fw"></i></button>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'Product_page',
        data(){
            return{
                list_product:[],
            }
        },
        methods: {
            getData: function(){
                this.axios.get('http://localhost/PROJECT-LARAVEL/belajar-toko/public/api/product')
                .then(response => {
                    this.list_product = response.data;
                })
            },
            hapus(id_product){
                if(confirm('Are you sure?')){
                    this.axios.delete('http://localhost/PROJECT-LARAVEL/belajar-toko/public/api/product/' + id_product)
                    .then(() => {
                        this.getData()
                        location.reload()
                    })
                }
            },
            // addCart(id_product){
                
            // },
        },
        mounted(){
            this.getData()
        }
    }
</script>
