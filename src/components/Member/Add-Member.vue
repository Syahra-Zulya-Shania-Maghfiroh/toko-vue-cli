<template>
    <!-- Modal -->
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
                <button type="button" class="btn btn-primary" @click="SaveCus()" data-bs-dismiss="modal">Submit</button>
            </div>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: "Add_Member",
        data: function(){
            return {
                nama: "",
                alamat: "",
                telp: "",
                username: "",
                password:"",
                action: "",
            }
        },
        methods: {
            SaveCus: function() {
                var dataCustomers = 
                {
                    nama : this.nama,
                    alamat : this.alamat,
                    telp : this.telp,
                    username : this.username,
                    password : this.password
                }
                this.axios.post('http://localhost/PROJECT-LARAVEL/belajar-toko/public/api/customers', dataCustomers)
                .then((response)=>{
                    alert(response.data.message)
                    console.log(response)
                    this.$router.push('/member')
                })
            }
        },
        // mounted(){
        //     this.SaveCus()
        // }
    }
</script>
