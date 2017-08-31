<template>
  <div class="page-content-wrapper">
    <!-- BEGIN CONTENT BODY -->
    <div class="page-content">
      <!-- BEGIN PAGE HEADER-->
      <!-- END PAGE HEADER-->
      <div class="row">
        <div class="col-md-12 xg-designer">
          <div class="designer-sidebar">
            <!-- 若tab项较多，可在class中加入tabbable-tabdrop，自动生成下拉-->
            <div class="tabbable  tabbable-line">
              <ul class="nav nav-tabs">
                <li class="active">
                  <a href="#d-tab1" data-toggle="tab">物理</a>
                </li>
                <li>
                  <a href="#d-tab2" data-toggle="tab">视图</a>
                </li>
                <li>
                  <a href="#d-tab3" data-toggle="tab">设置</a>
                </li>
                <li>
                  <a href="#d-tab4" data-toggle="tab">服务</a>
                </li>
              </ul>
              <div class="tab-content">
                <div class="tab-pane layout active" id="d-tab1">
                  <layout></layout>
                </div>
                <div class="tab-pane control" id="d-tab2">
                  <control></control>
                </div>
                <div class="tab-pane attributes" id="d-tab3">
                  <p> Howdy, I'm in Section 3. </p>
                  <p></p>
                  <p></p>
                </div>
                <div class="tab-pane data" id="d-tab4">
                  <p> Howdy, I'm in Section 3. </p>
                  <p></p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <div class="designer-content">
            <stage></stage>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Layout from './layout'
  import Control from './control'
  import Stage from './stage'

  export default {
    data () {
      return {}
    },
    mounted: function () {
    },
    methods: {},
    components: {Layout, Control, Stage}
  }

</script>
<style>
  .designer-sidebar {
    float: left;
    width: 280px;
    margin-right: 20px;
  }

  .designer-content {
    overflow: hidden;
  }

  .xg-designer .toolItem {
    position: static;
    border-style: dotted solid;
    border-width: 1px;
    border-color: #c9c9c9;
    background-color: #f4f4f4;
    margin: 0 .2em .2em;
    padding: .36em;
    zoom: 1;
    cursor: move;
  }

  .xg-designer .toolItem.active {
    background-color: #ececec;
  }

  .xg-designer .toolItem label {
    padding-left: 1em;
    cursor: move;
  }

  .xg-designer .toolItem > div {
    display: none;
  }

  .xg-designer .dragObject, .sortObject {
    cursor: move;
  }

  .xg-designer .dragObject label {
    cursor: move;
  }
</style>

