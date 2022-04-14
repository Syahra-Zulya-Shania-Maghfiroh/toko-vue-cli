<template>
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Product Data</h5>
            </div>
            <div class="modal-body">
                <div class="mb-3">
                    <label for="nama_product" class="form-label">Product Name</label>
                    <input type="text" class="form-control" id="nama_product" v-model="nama_product" placeholder="Input Your Product Name">
                </div>

                <div class="mb-3">
                    <label for="deskripsi" class="form-label">Description</label>
                    <textarea class="form-control" id="deskripsi" v-model="deskripsi" rows="3"></textarea>
                </div>

                <div class="mb-3">
                    <label for="harga" class="form-label">Price</label>
                    <input type="text" class="form-control" id="harga" v-model="harga" placeholder="Input Your Price">
                </div>

                <!-- <div class="mb-3">
                    <label for="foto_product" class="form-label">Photo</label>
                    <input type="file" class="form-control" id="foto_product" @change="uploadProduct($event)">
                </div> -->

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-primary" @click="Save()" data-bs-dismiss="modal">Submit</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: "Add_Product",
        data: function(){
            return {
                nama_product: "",
                deskripsi: "",
                harga: "",
                foto_product: "",
                action: "",
            }
        },
        methods: {
            Save: function() {
                var dataProduct =
                {
                    nama_product : this.nama_product,
                    deskripsi : this.deskripsi,
                    harga : this.harga,
                    foto_product: this.foto_product
                }
                this.axios.post('http://localhost/PROJECT-LARAVEL/belajar-toko/public/api/product', dataProduct)
                .then((response)=>{
                    alert(response.data.message)
                    console.log(response)
                    this.$router.push('/product')
                })
            }
        }
    }
</script>
