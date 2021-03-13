const IsMobile = {
    data() {
      return {
        isMobile: null,
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
        this.isMobile = document.documentElement.clientWidth <= 960;
      },
    },
  };
  
  export default IsMobile;
  