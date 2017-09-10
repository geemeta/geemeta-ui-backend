<template>
  <div class="tabbable tabbable-tabdrop tabbable-line">
    <ul class="nav nav-tabs">
      <li class="active">
        <a href="#tab1" data-toggle="tab">Section 1</a>
      </li>
      <li>
        <a href="#tab2" data-toggle="tab">Section 2</a>
      </li>
      <li>
        <a href="#tab3" data-toggle="tab">Section 3</a>
      </li>
      <li>
        <a href="#tab4" data-toggle="tab">Section 4</a>
      </li>
      <li>
        <a href="#tab5" data-toggle="tab">Section 5</a>
      </li>
      <li>
        <a href="#tab6" data-toggle="tab">Section 6</a>
      </li>
      <li>
        <a href="#tab7" data-toggle="tab">Section 7</a>
      </li>
      <li>
        <a href="#tab8" data-toggle="tab">Section 8</a>
      </li>
    </ul>
    <div class="tab-content">
      <div class="tab-pane active" id="tab1">
        <p> I'm in Section 1. </p>
        <p>12</p>
        <p>13</p>
        <p>14</p>
        <p>f</p>
      </div>
      <div class="tab-pane" id="tab2">
        <p> Howdy, I'm in Section 2.  Howdy, I'm in Section 2.  Howdy, I'm in Section 2.  Howdy, I'm in Section 2. </p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
      <div class="tab-pane" id="tab3">
        <p> Howdy, I'm in Section 3. </p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
      <div class="tab-pane" id="tab4">
        <p> Howdy, I'm in Section 4. </p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
      <div class="tab-pane" id="tab5">
        <p> Howdy, I'm in Section 5. </p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
      <div class="tab-pane" id="tab6">
        <p> Howdy, I'm in Section 6. </p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
      <div class="tab-pane" id="tab7">
        <p> Howdy, I'm in Section 7. </p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
      <div class="tab-pane" id="tab8">
        <p> Howdy, I'm in Section 8. </p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
      <div class="tab-pane" id="tab9">
        <p> Howdy, I'm in Section 9. </p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
  </div>

</template>
<script>
  //  import utils from '../../common/utils'

  export default {
    props: {
      opts: {
        type: Object,
        default: {},
        required: true
      }
    },
    data () {
      return {}
    },
    created: function () {
    },
    mounted: function () {
      // ！！注意，若该vue文件被加载到modal中，且modal用了fade等入场动画，会导致以下执行无效，mounted早于modal的入场动画结束时间
      $(this.$el).find('.nav-tabs').tabdrop()
//      self.deployTimeOutId = setTimeout(() => {
//        $(self.$el).find('.nav-tabs').tabdrop({text: '更多'})
//        clearTimeout(self.deployTimeOutId)
//      }, 500)
    },
    methods: {},
    components: {}
  }
</script>
<style scoped>
</style>
