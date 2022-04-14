<template>
    <div class="container">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Product Data</h5>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label for="nama_product" class="form-label">Product Name</label>
                        <input type="text" class="form-control" id="nama_product" v-model="nama_product">
                    </div>

                    <div class="mb-3">
                        <label for="deskripsi" class="form-label">Description</label>
                        <textarea class="form-control" id="deskripsi" v-model="deskripsi" rows="3"></textarea>
                    </div>

                    <div class="mb-3">
                        <label for="harga" class="form-label">Price</label>
                        <input type="text" class="form-control" id="harga" v-model="harga">
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" @click="Edit()" data-bs-dismiss="modal">Update</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Update_product",
    data: function(){
        return {
            list_product: [],
            id_product: '',
            nama_product: '',
            deskripsi: '',
            harga: '',
            foto_product: ''
        }
    },
    methods: {
        getData : function(){
               this.axios.get('http://localhost/PROJECT-LARAVEL/belajar-toko/public/api/product')
               .then((response)=>{
                   this.list_product=response.data
               })
        },
        getDetail(id_product){
               this.axios.get('http://localhost/PROJECT-LARAVEL/belajar-toko/public/api/product/' + id_product)
               .then((response)=>{
                   this.id_product = response.data[0].id_product
                   this.nama_product = response.data[0].nama_product
                   this.deskripsi = response.data[0].deskripsi
                   this.harga = response.data[0].harga
                   this.foto_product = response.data[0].foto_product
               })
        },
        Edit(){
            var dataProduct = {
                nama_product: this.nama_product,
                deskripsi: this.deskripsi,
                harga: this.harga,
                foto_product: this.foto_product
            }
            this.axios.put('http://localhost/PROJECT-LARAVEL/belajar-toko/public/api/product/' + this.id_product, 
            dataProduct).then((response)=>{
                this.$router.push({path: '/product'})
                alert(response.data.message)

                console.log(response)
            })
        }
    },
    mounted(){
        this.getData()
        this.getDetail(this.$route.params.id)
    }
}
</script>
