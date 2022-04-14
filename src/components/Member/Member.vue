<template>
    <div class="card mb-4">
        <div class="card-header">
            <i class="fas fa-table me-1"></i>
            List Member
            <router-link class="btn btn-primary btn-sm float-right" :to="{path:'/addMember'}" ><i class='fas fa-folder-plus'></i> Add Customer</router-link>
        </div>
        <div class="card-body">
            <table id="datatablesSimple" class="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>ID CUSTOMERS</th>
                        <th>CUSTOMERS NAME</th>
                        <th>ADDRESS</th>
                        <th>USERNAME</th>
                        <th>TELP</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="lm in list_member" :key="lm">
                        <td>{{ lm.id_customers }}</td>
                        <td>{{ lm.nama }}</td>
                        <td>{{ lm.alamat }}</td>
                        <td>{{ lm.username }}</td>
                        <td>{{ lm.telp }}</td>
                        <td>
                            <router-link class="btn btn-info" :to="{path: '/updateMember/' + lm.id_customers}"><i class='fas fa-pen'></i></router-link>
                            <button v-on:click="hapus(lm.id_customers)" class="btn btn-danger" ><i class="fas fa-trash-alt fa-fw"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'Member_page',
        data(){
            return{
                list_member:[],
            }
        },
        methods: {
            getData: function(){
                this.axios.get('http://localhost/PROJECT-LARAVEL/belajar-toko/public/api/customers')
                .then(response => {
                    this.list_member = response.data;
                    console.log(response)
                })
            }, 
            hapus(id_customers){
                if(confirm('Are you sure?')){
                    this.axios.delete('http://localhost/PROJECT-LARAVEL/belajar-toko/public/api/customers/' + id_customers)
                    .then(() =>{
                        this.getData()
                        location.reload();
                    })
                }
            }
        },
        mounted(){
            this.getData()
        }
    }

</script>