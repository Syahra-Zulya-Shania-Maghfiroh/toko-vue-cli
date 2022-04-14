<template>
    <div class="container">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Customers Data</h5>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label for="nama" class="form-label">Name</label>
                        <input type="text" class="form-control" id="nama" v-model="nama" placeholder="Name">
                    </div>

                    <div class="mb-3">
                        <label for="alamat" class="form-label">Address</label>
                        <textarea class="form-control" id="alamat" v-model="alamat" rows="3"></textarea>
                    </div>

                    <div class="mb-3">
                        <label for="telp" class="form-label">Phone Number</label>
                        <input type="text" class="form-control" id="telp" v-model="telp" placeholder="Telp">
                    </div>

                    <div class="mb-3">
                        <label for="username" class="form-label">Username</label>
                        <input type="text" class="form-control" id="username" v-model="username" placeholder="Username">
                    </div>

                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" v-model="password" placeholder="Password">
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" @click="UpCustomers()" data-bs-dismiss="modal">Update</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Update_member", 
    data: function(){
        return {
            list_member: [],
            id_customers:'',
            nama:'',
            alamat:'',
            telp:'',
            username:'',
            password:'',
        }
    },
    methods: {
        getData : function(){
            this.axios.get('http://localhost/PROJECT-LARAVEL/belajar-toko/public/api/customers')
            .then((response)=>{
                this.list_member=response.data
            })
        },
        getDetail(id_customers){
            this.axios.get('http://localhost/PROJECT-LARAVEL/belajar-toko/public/api/customers/'+ id_customers)
            .then((response)=>{
                console.log(response.data[0])
                this.id_customers = response.data[0].id_customers
                this.nama = response.data[0].nama
                this.alamat = response.data[0].alamat
                this.telp = response.data[0].telp
                this.username = response.data[0].username
                this.password = response.data[0].password
            })
        },
        UpCustomers(){
            var dataCustomers =
            {
                nama : this.nama,
                alamat : this.alamat, 
                telp : this.telp, 
                username : this.username,  
                password : this.password
            }
            this.axios.put("http://localhost/PROJECT-LARAVEL/belajar-toko/public/api/customers/"+this.id_customers,
            dataCustomers).then((response)=>{
                this.$router.push({path: '/member'})
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
