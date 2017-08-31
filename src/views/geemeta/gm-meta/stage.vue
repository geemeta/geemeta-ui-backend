<template>
  <div class="page-content-wrapper">
    <!-- BEGIN CONTENT BODY -->
    <div class="row">
      <div class="col-md-12">
        <div class="tabbable tabbable-line">
          <ul class="nav nav-tabs">
            <li class="active">
              <a href="#tab-designer" data-toggle="tab">设计</a>
            </li>
            <li>
              <a href="#tab-code" data-toggle="tab">代码</a>
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane stage-ui active" id="tab-designer" style="background-color: #2aa198">
              <form role="form">
                <div class="form-body">
                  <table class="xg-form xg-col-24" data-drag-target="append" data-drag-allow="layout"
                         data-drag-sortable>
                  </table>
                </div>
              </form>
            </div>
            <div class="tab-pane stage-code" id="tab-code">
              code
            </div>
            <div class="tab-pane stage-doc" id="tab-doc">
              <h3>页面说明</h3>
              <textarea rows="15"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import designer from '../../../common/designer'

  export default {
    data () {
      return {}
    },
    mounted: function () {
      designer.bindDragTarget('.xg-form', 'layout', 'append')
    },
    methods: {},
    components: {}
  }

</script>
<style scoped>
  .xg-form {
    min-height: 3em;
  }

  .stage-ui {

  }

  .stage-code {

  }
</style>

