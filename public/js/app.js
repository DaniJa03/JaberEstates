const { createApp } = Vue;

const myApp = {
  data() {
    return {
      immos: [],
      id: '',
      preis: '',
    };
  },
  methods: {
    async getImmos() {
      try {
        const { data } = await axios.get('/immos');
        this.immos = data;
        console.log(this.immos);
      } catch (error) {
        console.log(error);
      }
    },
    async delImmo(id) {
      try {
        const { data } = await axios.delete(`/immos/${id}`);
        this.immo = data;
        this.getImmos();
        console.log('GELÖSCHT!!!');
      } catch (error) {
        console.log(error);
      }
    },
    editImmo(i) {
      this.id = i.id;
      this.preis = i.price;
    },
    async patchImmo() {
      try {
        const { data } = await axios.patch(`/immos/${this.id}`, {
          price: this.preis,
        });
        this.immo = data;
        this.getImmos();
        console.log('GEPATCHT!!!');
      } catch (error) {
        console.log(error);
      }
    },
  },
};

createApp(myApp).mount('#app');
