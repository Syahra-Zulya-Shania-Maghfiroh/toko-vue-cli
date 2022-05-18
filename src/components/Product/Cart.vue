<template>
    <div class="container">
        <div class = "card">
            <div class="card-body">
                <h2 align="center">List Cart</h2>
                <table class="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th>PRODUCT</th>
                            <th>PRICE</th>
                            <th>QTY</th>
                            <th>SUBTOTAL</th>
                            <!-- <th>ACTION</th> -->
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="cart in getcart" :key="cart.id_product">
                            <td>{{cart.nama_product}}</td>
                            <td>{{cart.harga}}</td>
                            <td>{{cart.quantity}}</td>
                            <td>{{ productSubtotal (cart.harga, cart.quantity) }}</td>
                            <!-- <td>
                                <button class="btn btn-danger">x</button> 
                                <button class="btn btn-success">o</button>
                            </td> -->
                        </tr>
                    </tbody>
                </table>
                <button class="btn btn-primary" v-on:click="saveDB()">Checkout</button>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:"keranjang_page",
        computed:{
            getcart(){
                return this.$store.getters.cartItems; 
            }
        },
        methods:{
            // var option = { headers :{'Authorization': 'Bearer ' + localStorage.getItem('token')}};
            productSubtotal(harga, quantity){
                return harga * quantity;
            },
            saveDB(){
                var data = {
                    datapost: this.$store.getters.cartItems
                }
                this.axios.post('http://localhost/PROJECT-LARAVEL/belajar-toko/public/api/order', data)
                .then(response=>{
                    alert(response.data.message)
                    this.$router.push('/product')
                    console.log(response)
                    this.$store.commit('reset')
                    // console.log(response.data);
                })
                
            }
        }
    }
</script>