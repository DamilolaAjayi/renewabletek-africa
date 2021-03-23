<template>
  <div class="container" id="footer">
    <div class="wrapper">
      <img
        src="@/assets/images/renewabletek-africa-monochrome-full-logo-lg.png"
        alt="RenewableTek Africa logo"
      />
    </div>
  </div>
</template>

<script>
export default {
    name: 'el-footer',
};
</script>

<style scoped>
@media screen and (max-width: 992px) {
  .container {
    padding: 4rem 3rem;
  }
}
.container img {
  height: 6.5rem;
  width: auto;
}
@media screen and (max-width: 992px) {
  .container img {
    max-height: 4rem;
  }
}
@media screen and (max-width: 600px) {
  .container img {
    max-height: 3rem;
  }
  .wrapper {
    flex-direction: column;
    align-items: flex-start;
  }
  .spaces--info {
    flex-direction: column;
    margin-top: 2rem;
  }
}
.container {
  padding: 6rem 10rem;
  border-top: 0.1rem solid #f2f2f2;
  background: var(--neutralOne);
}
.wrapper {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.spaces--info a {
  align-items: center;
  display: flex;
  font-size: 1.5rem;
  padding-left: 1.6rem;
}
@media screen and (max-width: 768px) {
  .spaces--info a {
    font-size: 1.2rem;
  }
}
@media screen and (max-width: 600px) {
  .spaces--info a {
    padding-left: 0;
  }
}
a span {
  padding-left: 0.5rem;
}
.spaces--info {
  display: flex;
  float: right;
  align-items: baseline;
}
.spaces--info img {
  width: 2.4rem;
  height: 2.4rem;
}
</style>
