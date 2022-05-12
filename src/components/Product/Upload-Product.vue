<template>
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">
          Upload Product Data
        </h5>
      </div>

      <div class="mb-3">
        <label for="foto_product" class="form-label">Photo</label>
        <input
          type="file"
          class="form-control"
          id="foto_product"
          @change="UploadProduct($event)"
        />
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
          Cancel
        </button>
        <button
          type="button"
          class="btn btn-primary"
          @click="Upload(id_product)"
          data-bs-dismiss="modal"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Upload_product",
  data: function () {
    return {
      nama_product: "",
      deskripsi: "",
      harga: "",
      foto_product: "",
      action: "",
    };
  },
  methods: {
    getDetail(id_product) {
      this.axios
        .get(
          "http://localhost/PROJECT-LARAVEL/belajar-toko/public/api/product/" +
            id_product
        )
        .then((response) => {
          this.id_product = response.data[0].id_product;
          this.foto_product = response.data[0].foto_product;
        });
    },
    UploadProduct: function (e) {
      this.foto_product = e.target.files[0];
    },
    Upload: function (id_product) {
      let form = new FormData();
      form.append("foto_product", this.foto_product);

      this.axios.post("http://localhost/PROJECT-LARAVEL/belajar-toko/public/api/product/UploadProduct/" + id_product, form )
        .then((response) => {
          alert(response.data.message);
          this.$router.push("/product");
        });
    },
  },
  mounted() {
    this.getDetail(this.$route.params.id);
  },
};
</script>
