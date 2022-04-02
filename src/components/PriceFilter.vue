<template>
  <VueSlider v-model="value" />
</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'

export default {
  components: {
    VueSlider
  },
  data () {
    return {
      value: [0,50],
    }
  }
}
</script>