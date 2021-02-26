<template>
  <div>
    <footer class="section-container">
      <p>
        ©
        {{ currentYear }}
      </p>
    </footer>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: 'el-footer',
  data() {
    return {
      currentYear: moment().year(),
    };
  },
};
</script>

<style scoped></style>
