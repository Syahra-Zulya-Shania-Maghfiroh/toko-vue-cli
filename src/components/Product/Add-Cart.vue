<template>
    <div class="container m-auto d-flex flex-wrap align-items-stretch justify-content-around justify-content-sm-around">
            <div class="card mt-3" style="width:350px">
                <img :src="'http://localhost/PROJECT-LARAVEL/belajar-toko/public/photo/' + foto_product" width="250" height="200">
                <div class="card-body">
                    <h4 class="card-title">{{ nama_product }}</h4>
                    <p class="card-text">{{ deskripsi }}</p>
                    <h5 class="card-text">Rp. {{ harga }}</h5>
                    <p class="cart-text" v-if="getcount">On Cart : {{ getcount }}</p>
                    <p class="cart-text" v-else>On Cart : 0</p>
                    <a class="d-flex flex-wrap justify-content-around">
                        <button v-on:click="removeItem()" class="btn btn-secondary"><i class="fas fa-minus"></i></button>
                        <button v-on:click="AddToCart()" class="btn btn-primary"><i class="fas fa-plus"></i></button>
                    </a>
                </div>
            </div>
        </div>
</template>

<script>
    export default{
        name: 'Add_cart',
        data: function(){
            return{
                list_product:[],
                id_product: '',
                nama_product: '',
                deskripsi: '',
                harga: '',
                foto_product: '',
                // count: 0,
            };
        },
        methods:{
            AddToCart(){
                console.log(this.list_product)
                this.$store.commit('addToCart', this.list_product)
                // this.getcount()
            },
            removeItem(){
                this.$store.commit('removeProduct', this.list_product)
                // this.getcount()
            },
            getDetail(id_product){
                this.axios.get('http://localhost/PROJECT-LARAVEL/belajar-toko/public/api/product/' + id_product)
                .then((response)=>{
                    this.id_product = response.data[0].id_product
                    this.nama_product = response.data[0].nama_product
                    this.deskripsi = response.data[0].deskripsi
                    this.harga = response.data[0].harga
                    this.foto_product = response.data[0].foto_product

                    this.list_product = response.data[0]
                });
            },
            
        },
        mounted(){
            this.getDetail(this.$route.params.id);
        },
        computed: {
            getcount(){
                return this.$store.getters.productQty(this.list_product)
            }
        }
    }
</script>
