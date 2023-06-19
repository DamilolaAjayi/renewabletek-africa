const IsPhone = {
    data() {
      return {
        IsPhone: null,
      };
    },
    created() {
      this.checkDeviceSize();
      window.addEventListener('resize', this.checkDeviceSize);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.checkDeviceSize);
    },
    methods: {
      checkDeviceSize() {
        this.IsPhone = document.documentElement.clientWidth <= 767;
      },
    },
  };
  
  export default IsPhone;
  