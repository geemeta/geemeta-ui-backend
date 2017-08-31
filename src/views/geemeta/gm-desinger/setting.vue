<template>
  <div class="panel-group accordion" id="collapse_setting">
    <div v-if="!options.content" class="panel panel-default">
      <div style="text-align: center;color: red">
        请先在设计界面中选需设置的对象。
      </div>
    </div>
    <div v-if="options.content" class="panel panel-default">
      <div class="panel-heading">
        <h6 class="panel-title">
          <a class="accordion-toggle" data-toggle="collapse" data-parent="#collapse_setting1"
             href="#collapse_setting_default">数据</a>
        </h6>
      </div>
      <div id="collapse_setting_default" class="panel-collapse in">
        <div class="panel-body">
          <table class="xg-form compact xg-col-24">
            <tbody>
            <tr>
              <td colspan="8" title="页面展示的字段名称。">名称<i class="fa fa-question-circle"></i></td>
              <td colspan="16"><input type="text" v-model="cfg.data.name"></td>
            </tr>
            <tr>
              <td colspan="8" title="页面初始展示时，该字段的值。">初始值<i class="fa fa-question-circle"></i></td>
              <td colspan="16"><input type="text" v-model="cfg.data.defaultValue"></td>
            </tr>
            <tr>
              <td colspan="8" title="页面初始展示时，在输入框中的提示内容。">提示值<i class="fa fa-question-circle"></i></td>
              <td colspan="16"><input type="text" v-model="cfg.data.placeholder"></td>
            </tr>
            <tr>
              <td colspan="8" title="对应数据库实体的字段。">字段<i class="fa fa-question-circle"></i></td>
              <td colspan="16"><input type="text" v-model="cfg.data.field"></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div v-if="options.content" class="panel panel-default">
      <div class="panel-heading">
        <h6 class="panel-title">
          <a class="accordion-toggle" data-toggle="collapse" data-parent="#collapse_setting2"
             href="#collapse_setting_custom">外观</a>
        </h6>
      </div>
      <div id="collapse_setting_custom" class="panel-collapse in">
        <div class="panel-body">
          <table class="xg-form compact xg-col-24">
            <tbody>
            <tr data-setting-format>
              <td colspan="8" title="format">格式</td>
              <td colspan="16"><input type="text" v-model="cfg.facade.format"></td>
            </tr>
            <tr>
              <td colspan="8" title="class">类</td>
              <td colspan="16"><input type="text" v-model="cfg.facade.class"></td>
            </tr>
            <tr>
              <td colspan="8" title="style">样式</td>
              <td colspan="16"><input type="text" v-model="cfg.facade.style"></td>
            </tr>
            <tr>
              <td colspan="8" title="tip">提示</td>
              <td colspan="16">
                <textarea rows="2" v-model="cfg.facade.tip"></textarea>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div v-if="options.content" class="panel panel-default">
      <div class="panel-heading">
        <h6 class="panel-title">
          <a class="accordion-toggle" data-toggle="collapse" data-parent="#collapse_setting3"
             href="#collapse_setting_rule">规则</a>
        </h6>
      </div>
      <div id="collapse_setting_rule" class="panel-collapse in">
        <div class="panel-body">
          <table class="xg-form compact xg-col-24">
            <tbody>
            <tr>
              <td colspan="8">必填</td>
              <td colspan="16">
                <label class="mt-checkbox">
                  <input type="checkbox" v-model="cfg.auth.required"> 必填
                  <span></span>
                </label>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div v-if="options.content" class="panel panel-default">
      <div class="panel-heading">
        <h6 class="panel-title">
          <a class="accordion-toggle" data-toggle="collapse" data-parent="#collapse_setting4"
             href="#collapse_setting_auth">权限</a>
        </h6>
      </div>
      <div id="collapse_setting_auth" class="panel-collapse in">
        <div class="panel-body">
          <table class="xg-form compact xg-col-24">
            <tbody>
            <tr>
              <td colspan="8">显示给</td>
              <td colspan="16">
                <select v-model="cfg.auth.role">
                  <option>所有人</option>
                  <option>管理员</option>
                </select>
              </td>
            </tr>
            <tr>
              <td colspan="8">权限字符</td>
              <td colspan="16">
                <input type="text" v-model="cfg.auth.permission">
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  //  import dndHandler from '../../../common/dndHandler'
  import FieldSetting from './setting/field-setting'
  import settingOptions from '../../../common/settingOptions'

  export default {
    props: {
      options: {}
    },
    data () {
      return {
        cfg: {
          data: {
            name: '',
            field: '',
            defaultValue: '',
            placeholder: ''
          },
          facade: {
            format: '',
            class: '',
            style: '',
            tip: ''
          },
          auth: {
            required: '',
            role: '',
            permission: ''
          }
        },
        type: {
          singleText: ['value', 'format']
        }
      }
    },
    watch: {
      'options.actionId': function (val, oldVal) {
        this.$content = $(this.options.content)
        this.updateCfg()
      },
      'cfg.data.name': function (val, oldVal) {
        this.$content.find(settingOptions.selector.label).text(val)
      },
      'cfg.data.field': function (val, oldVal) {
//          this.$content.find(settingOptions.selector.field).val(val)
      },
      'cfg.data.defaultValue': function (val, oldVal) {
        this.$content.find(settingOptions.selector.control).val(val)
      },
      'cfg.data.placeholder': function (val, oldVal) {
        this.$content.find(settingOptions.selector.control).attr('placeholder', val)
      },
      'cfg.facade.format': function (val, oldVal) {
//        this.$content.find(settingOptions.selector.control).attr('placeholder', val)
      },
      'cfg.facade.class': function (val, oldVal) {
//        this.$content.find(settingOptions.selector.control).attr('placeholder', val)
      },
      'cfg.facade.style': function (val, oldVal) {
//        this.$content.find(settingOptions.selector.control).attr('placeholder', val)
      },
      'cfg.facade.tip': function (val, oldVal) {
        this.$content.find(settingOptions.selector.label).attr('title', val)
      },
      'cfg.auth.required': function (val, oldVal) {
        let $required = this.$content.find(settingOptions.selector.required)
        if (val) {
          $required.addClass('required')
          $required.removeClass('hidden')
        } else {
          $required.addClass('hidden')
          $required.removeClass('required')
        }
      }
    },
    mounted: function () {
      let page = {
        auth: [],
        ds: [],
        cfg: {
          ds: {},
          html: ''
        }
      }
      console.log(page)
    },
    methods: {
      updateCfg: function () {
        this.cfg.data.name = this.$content.find(settingOptions.selector.label).text()
        this.cfg.data.defaultValue = this.$content.find(settingOptions.selector.control).val()
        this.cfg.data.placeholder = this.$content.find(settingOptions.selector.control).attr('placeholder')
        this.cfg.facade.tip = this.$content.find(settingOptions.selector.label).attr('title')
        this.cfg.auth.required = this.$content.find(settingOptions.selector.required).hasClass('required')
      }
    },
    components: {FieldSetting}
  }
</script>
<style>

  #collapse_setting .xg-form td > label {
    margin-top: 3px;
    margin-bottom: 3px
  }

  #collapse_setting .xg-form td:nth-child(2n+1) {
    font-weight: normal;
    text-align: right;
    padding-right: 1em;
    background-color: white;
  }

  #collapse_setting .xg-form td:nth-child(2n+1) > i {
    margin-left: 2px;
  }

  #collapse_setting .xg-form td:nth-child(2n) {
    background-color: white;
    padding: 3px;
  }

</style>
