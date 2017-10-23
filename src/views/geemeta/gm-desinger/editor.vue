<template>
  <div class="xg-designer page-content-wrapper xg-mix-no-mp">
    <div class="page-content">
      <div class="row">
        <div class="col-md-12">
          <div class="actions xg-actions-xs">
            <div class="btn-group">
              <!--green-haze-->
              <a class="btn btn-xs" href="javascript:;" data-toggle="dropdown" data-hover="dropdown"
                 data-close-others="true" aria-expanded="true">
                文件&nbsp;<i class="fa fa-angle-down"></i>
              </a>
              <ul class="dropdown-menu btn-xs">
                <li>
                  <a href="javascript:;" @click="newProject"><i class="fa fa-folder">&nbsp;</i>新建项目</a>
                </li>
                <li>
                  <a href="javascript:;" @click="openProject"><i class="fa fa-folder-open">&nbsp;</i>打开项目</a>
                </li>
                <li>
                  <a href="javascript:;"><i class="fa fa-file-code-o">&nbsp;</i>新建页面</a>
                </li>
                <li>
                  <a href="javascript:;"><i class="fa fa-pie-chart">&nbsp;</i>新建报表</a>
                </li>
              </ul>
              <a class="btn btn-xs" @click="savePage">保存</a>
              <a class="btn btn-xs">预览</a>
            </div>
          </div>
        </div>
        <div class="col-md-12 ">
          <div class="col-md-2 xg-mix-no-mp">
            <div id="designer-nav-tabs" class="tabbable">
              <ul class="nav nav-tabs xg-mix-xs">
                <li class="active">
                  <a href="#d-tab-project" class="xg-mix-xs" data-toggle="tab">项目</a>
                </li>
                <li>
                  <a href="#d-tab-designer" class="xg-mix-xs" data-toggle="tab">工具</a>
                </li>
              </ul>
              <div class="tab-content">
                <div class="tab-pane tab-panedesigner-project active" id="d-tab-project">
                  <project :ds="ds.project" @openPage="onProjectOpenPage"
                           @newPage="onProjectNewPage"></project>
                </div>
                <div class="tab-pane designer-toolbox" id="d-tab-designer">
                  <div id="designer-toolbox-dnd-tabs" class="tabbable tabbable-line">
                    <!-- 若tab项较多，可在class中加入tabbable-tabdrop，自动生成下拉-->
                    <!--nav-pills-->
                    <ul class="nav nav-tabs xg-mix-xs">
                      <li class="active">
                        <a href="#d-tab-layout" data-toggle="tab">布局</a>
                      </li>
                      <li>
                        <a href="#d-tab-web-component" data-toggle="tab">组件</a>
                      </li>
                      <li>
                        <a href="#d-tab-form" data-toggle="tab">表单</a>
                      </li>
                      <li>
                        <a href="#d-tab-control" data-toggle="tab">控件</a>
                      </li>
                      <li>
                        <a href="#d-tab-page" data-toggle="tab">页面</a>
                      </li>
                      <li>
                        <a href="#d-tab-field" data-toggle="tab">字段</a>
                      </li>
                    </ul>
                    <div class="tab-content">
                      <div class="tab-pane layout active" id="d-tab-layout">
                        <layout></layout>
                      </div>
                      <div class="tab-pane web-component" id="d-tab-web-component">
                        <web-component></web-component>
                      </div>
                      <div class="tab-pane form" id="d-tab-form">
                        <table-form></table-form>
                      </div>
                      <div class="tab-pane control" id="d-tab-control">
                        <control></control>
                      </div>
                      <!--<div class="tab-pane attributes" id="d-tab-attributes">-->
                      <!--<setting :options="settingOptions"></setting>-->
                      <!--</div>-->
                      <!--<div class="tab-pane data" id="d-tab-data">-->
                      <!--<p> Howdy, I'm in Section 3. </p>-->
                      <!--<p></p>-->
                      <!--<p></p>-->
                      <!--</div>-->
                      <div class="tab-pane page" id="d-tab-page">
                        <page></page>
                      </div>
                      <div class="tab-pane field" id="d-tab-field">
                        <field></field>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-8 xg-mix-no-mp" style="padding: 0px 0.5em">
            <div class="designer-stage">
              <stage @openSetting="onSettingOpen" @beforeChange="onSettingBefore" :page="page"></stage>
            </div>
          </div>
          <div class="col-md-2 xg-mix-no-mp">
            <div class="designer-toolbox">
              <!-- 若tab项较多，可在class中加入tabbable-tabdrop，自动生成下拉-->
              <div id="designer-toolbox-setting-tabs" class="tabbable tabbable-line">
                <ul class="nav nav-tabs xg-mix-xs">
                  <li class="active">
                    <a href="#d-tab-data" data-toggle="tab">页面设置</a>
                  </li>
                  <li>
                    <a href="#d-tab-attributes" data-toggle="tab">字段设置</a>
                  </li>
                </ul>
                <div class="tab-content">
                  <div class="tab-pane data active" id="d-tab-data">
                    <p>
                      <button class="btn">添加</button>
                    </p>
                    <p></p>
                    <p></p>
                  </div>
                  <div class="tab-pane attributes" id="d-tab-attributes">
                    <setting :options="settingOptions" @updated="onSettingUpdate"></setting>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  //  import Vue from 'vue'
  import core from '../../../api/core'
  import Project from './toolbox-project'
  import TableForm from './toolbox-table-form'
  import WebComponent from './toolbox-web-component.vue'
  import Layout from './toolbox-layout'
  import Control from './toolbox-control'
  import Setting from './setting.vue'
  import Page from './toolbox-page'
  import Field from './toolbox-field'
  import Stage from './stage'
  import utils from '../../../common/utils'
  import PageInfo from '../../../common/PageInfo'
  import entityNames from '../../../api/entityNames'
  //  import FileHtml5 from './file-template/html5'

  export default {
    data () {
      return {
        ds: {
          project: {id: ''}
        },
        pages: {},
        files: {},
        settingOptions: {},
        page: {},
        pageDefine: {
          id: '',
          template: '',
          before: {
            data: [],
            event: []
          }
        }
      }
    },
    mounted: function () {
    },
    methods: {
      newProject: function () {
        let self = this
        let project = {name: '新项目', tree: ''}
        core.data.save(entityNames.platform.dev.project, project).then(function (res) {
          project.id = res.data
          self.ds.project = project
          console.log('save project>', res.data)
        })
      },
      openProject: function (mouseEvent) {
        //        self.modalView = require('./tab-view.vue')
//        $(self.$el).find('.modal').modal()
        console.log('open project mouseEvent>', mouseEvent)
      },
      onSettingOpen: function (data) {
        $(this.$el).find('#designer-toolbox-setting-tabs a[href="#d-tab-attributes"]').tab('show')
        var d = data || {}
        // 改变actionId便于检测数据变化
        d.actionSeq = utils.uuid(8)
        this.settingOptions = d
      },
      onSettingBefore: function (page) {
        // 记录旧模板数据
        if (page.extendId) {
          this.pages[page.extendId].template = page.template
        }
      },
      onSettingUpdate: function (data) {
        this.page.cfg = data.cfg
//        console.log('onSettingUpdate this.page>', this.page)
      },
      onProjectNewPage: function (data) {
        let self = this
        // 加载页面配置 pageDefine
        core.data.getFileTemplate(data.type).then(function (vueFile) {
          console.log('vueFile>', vueFile)
          self.pageDefine = vueFile.$el.cloneNode(true)
          // 加载页面数据源，解析为最终渲染的内容
          self.pages[data.id] = new PageInfo({
            extendId: data.id,
            template: self.pageDefine,
            before: {
              data: []
            },
            evnet: []
          })
          self.cachePage(data.id)
          self.savePage()
        })
      },
      onProjectOpenPage: function (data) {
        let self = this
        if (!self.pages[data.id]) {
          // 加载页面配置 pageDefine
          core.data.getPageConfig2(data).then(function (res) {
//          console.log('res', res)
            self.pageDefine = res.data.define
            // 加载页面数据源，解析为最终渲染的内容
            self.pages[data.id] = {
              id: data.id,
              template: self.pageDefine.template,
              before: {
                data: [{
                  age: [{
                    groupCode: 'age',
                    groupName: '年龄',
                    code: 'ALL',
                    name: '所有'
                  }, {
                    groupCode: 'age',
                    groupName: '年龄',
                    code: '8TO18',
                    name: '8-18'
                  }, {
                    groupCode: 'age',
                    groupName: '年龄',
                    code: '19TO24',
                    name: '19-24'
                  }]
                }]
              },
              evnet: []
            }
            self.cachePage(data.id)
          })
        } else {
          self.cachePage(data.id)
        }
      },
      savePage: function () {
        let self = this
        this.page.template = this.page.template.outerHTML || this.page.template
        core.data.save(entityNames.platform.dev.pageConfig, {
          id: this.page.id,
          extendId: this.page.extendId,
          code: this.page.id,
          content: JSON.stringify(this.page)
        }).then(function (res) {
          self.page.id = res.data
        })
      },
      cachePage: function (extendId) {
        console.log('cachePage extendId>' + extendId + '>', this.pages[extendId])
        this.page = this.pages[extendId]
        this.page.extendId = extendId
      }
    },
    components: {Project, core, Layout, WebComponent, TableForm, Control, Setting, Page, Field, Stage}
  }

</script>
<style>
  .designer-toolbox {
    float: left;
    /*width: 300px;*/
    /*margin-right: 20px;*/
  }

  .designer-stage {
    overflow: hidden;
  }

  /*reset*/
  .xg-designer.page-content-wrapper .page-content {
    padding: 10px 15px 10px;
  }

  .xg-designer .tabbable-line > .tab-content {
    padding: 2px;
  }

  .xg-designer .panel-body {
    padding: 2px;
  }

  .xg-designer .panel-title {
    font-size: 12px;
    font-weight: bold;
  }

  .xg-designer .float-toolbar {
    float: inherit;
    position: relative;
    top: 0px;
    line-height: 1em;
    font-size: 0.8em;
    text-align: center;
    background-color: #ffbe52;
    border-radius: 10px !important;
    cursor: pointer;
    margin: 1px 0;
  }

  .xg-designer .popover-content {
    padding: 1px 1px;
  }

  .xg-designer .dnd-container {
    padding: 5px;
    min-height: 5em;
    border: 1px dotted #DDD;
  }

  /*.xg-designer*/
  /*.dnd-toolbox .dnd-item*/
  /*.dnd-toolbox .dnd-item.active*/
  /*.dnd-toolbox .dnd-item  > .dnd-dsc{}*/
  /*.dnd-toolbox .dnd-item  > .dnd-dsc > .dnd-title {}*/
  /*.dnd-toolbox .dnd-item  > .dnd-dsc > .dnd-detail {}*/
  /*.dnd-toolbox .dnd-item  > .dnd-toolbar{}*/
  /*.dnd-toolbox .dnd-item  > .dnd-content{}*/

  /*.dnd-stage .dnd-item  > .dnd-dsc{}*/
  /*.dnd-stage .dnd-item  > .dnd-dsc > .dnd-title {}*/
  /*.dnd-stage .dnd-item  > .dnd-dsc > .dnd-detail {}*/
  /*.dnd-stage .dnd-item  > .dnd-toolbar{}*/
  /*.dnd-stage .dnd-item  > .dnd-content{}*/
  /*.dnd-stage.preview*/

  /*.dnd-stage .dnd-target*/
  /*.dnd-stage .dnd-target.dnd-control*/

  .xg-designer .dnd-item {
    /*cursor: move;*/
  }

  .xg-designer .dnd-toolbox .dnd-item {
    position: static;
    border-style: dotted solid;
    background-color: #f4f4f4;
    margin: 0 .2em .2em;
    padding: .36em;
    border-width: 1px 1px 1px 4px;
    border-color: #c9c9c9;
    zoom: 1;
    cursor: move;
  }

  .xg-designer .dnd-toolbox .dnd-item.active {
    background-color: #ececec;
  }

  .xg-designer .dnd-toolbox .dnd-item > .dnd-dsc {
  }

  .xg-designer .dnd-toolbox .dnd-item > .dnd-dsc > .dnd-title {
    padding-left: 0.5em;
    cursor: move;
  }

  .xg-designer .dnd-toolbox .dnd-item > .dnd-dsc > .dnd-title > * {
    cursor: move;
  }

  .xg-designer .dnd-toolbox .dnd-item > .dnd-dsc > .dnd-title > label {
    padding-left: 6px;
  }

  .xg-designer .dnd-toolbox .dnd-item > .dnd-dsc > .dnd-detail {
  }

  .xg-designer .dnd-toolbox .dnd-item > .dnd-toolbar {
    display: none;
  }

  .xg-designer .dnd-toolbox .dnd-item > .dnd-content {
    display: none;
  }

  .xg-designer .dnd-stage .dnd-item {
    border: 1px solid #ffbe52;
  }

  .xg-designer .dnd-stage .dnd-item > .dnd-dsc {
  }

  .xg-designer .dnd-stage .dnd-item > .dnd-dsc > .dnd-title {
  }

  .xg-designer .dnd-stage .dnd-item > .dnd-dsc > .dnd-detail {
  }

  .xg-designer .dnd-stage .dnd-item > .dnd-toolbar {
    width: 100%;
    line-height: 1em;
    display: block;
    /*background-color: #ffe7a8;*/
    background-color: #fffde6;
    text-align: center;
    cursor: move;
  }

  .xg-designer .dnd-stage .dnd-item > .dnd-toolbar > .btn {
    line-height: 1.1em;
    /*float: right;*/
    margin: 2px 4px 2px 0;
    font-size: 0.7em;
  }

  .xg-designer .dnd-stage .dnd-item tr.dnd-toolbar td {
    width: 100%;
    line-height: 0.7em;
    background-color: #5fd895;
    text-align: right;
    cursor: move;
    padding: 0;
  }

  .xg-designer .dnd-stage .dnd-item tr.dnd-toolbar td .btn {
    line-height: 1.1em;
    /*float: right;*/
    margin: 2px 2px;
    font-size: 0.7em;
  }

  .xg-designer .dnd-stage .dnd-item tr > td > table > tbody > tr > td {
    border: 1px solid #59c487;
  }

  .xg-designer .dnd-stage .dnd-item > .dnd-content {
    clear: both;
  }

  .xg-designer .dnd-stage.preview {
  }

  .xg-designer .dnd-stage .dnd-target {
    min-height: 5em;
    /*border: 1px dotted #d8d8d8;*/
    padding: 5px;
  }

  .xg-designer .dnd-stage .dnd-target[data-dnd-allow*=control] {
    min-height: 2.5em;
    border: 1px dotted #c5f1ff;
  }

  .xg-designer .dnd-stage .dnd-target[data-dnd-allow*=layout] {
    min-height: 5em;
    /*ffbe52*/
    border: 1px dotted #ffbe52;
  }

  .xg-designer .dnd-stage .dnd-target.dnd-control {
    min-height: 1em;
    /*background-color: #e2fff8 !important;*/
  }

  .xg-designer .dnd-stage .dnd-placeholder {
    min-height: 5em;
    background-color: #fffee8;
    /*border: 1px dotted #c9c9c9;*/
    text-align: center;
    line-height: 5em;
    width: 100%;
  }

  .xg-designer .dnd-stage tr.dnd-placeholder > td {
    background-color: #ebfff2;
    text-align: center;
    font-weight: normal;
  }

  .xg-designer .column {
    min-height: 5em;
    /*background-color: #f0f0f0;*/
    border: 1px dotted #DDD;
    margin: 0;
    padding: 4px;
  }

  /***********reset***********/
  .xg-designer .actions.xg-actions-xs {
    background-color: #EBEBEB;
    padding: 4px 10px;
    margin-bottom: 1px;
  }

  /*.xg-designer .actions.xg-actions-xs > .btn-group > a {*/
  /*font-weight: bold;*/
  /*}*/
  .xg-designer .actions.xg-actions-xs > .btn-group > a {
    margin-left: 10px;
    font-weight: bold;
    font-size: 0.9em;
    color: #616161;
  }

  .xg-designer .actions.xg-actions-xs > .btn-group > a:hover {
    color: black;
  }

  .xg-designer .actions.xg-actions-xs .dropdown-menu > li > a {
    padding: 0.5em 1em;
  }

  .xg-designer .actions.xg-actions-xs .dropdown-menu {
    min-width: 8em;
    font-weight: bold;
  }

  /**, :after, :before {*/
  /*box-sizing: border-box;*/
  /*}*/
</style>

