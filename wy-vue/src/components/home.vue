<template>
  <div>
    <Header></Header>
    <router-view></router-view>
   <Footer></Footer>
  </div>
</template>

<script>

// @ is an alias to /src
import Footer from '@/components/footer.vue'
import Header from '@/components/header.vue'

export default {
  components: {
    Footer,
    Header
  }
}
</script>