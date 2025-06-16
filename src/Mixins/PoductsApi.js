const productsApi = {
  data() {
    return {
      products: [],
      firstName: "hassan",
      lastName: "Amer",
      search: "",
    };
  },
  methods: {
    async getData() {
      await fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
          this.products = data.products;
          console.log(this.products);
        });
    },
  },
};

export default productsApi;
