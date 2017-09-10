<template>
  <div class="panel-group accordion" id="collapse_setting">
    <div v-if="!options.content" class="panel panel-default">
      <div style="text-align: center;color: red">
        请先在设计界面中选需设置的对象。
      </div>
    </div>
    <div v-if="options.content&&current.selector.data" class="panel panel-default">
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
            <tr v-if="current.selector.data.name">
              <td colspan="8" title="页面展示的字段名称。">名称<i class="fa fa-question-circle"></i></td>
              <td colspan="16"><input type="text" v-model="cfg.data.name"></td>
            </tr>
            <tr v-if="current.selector.data.defaultValue">
              <td colspan="8" title="页面初始展示时，该字段的值。">初始值<i class="fa fa-question-circle"></i></td>
              <td colspan="16"><input type="text" v-model="cfg.data.defaultValue"></td>
            </tr>
            <tr v-if="current.selector.data.placeholder">
              <td colspan="8" title="页面初始展示时，在输入框中的提示内容。">提示值<i class="fa fa-question-circle"></i></td>
              <td colspan="16"><input type="text" v-model="cfg.data.placeholder"></td>
            </tr>
            <tr v-if="current.selector.data.field">
              <td colspan="8" title="对应数据库实体的字段。">字段<i class="fa fa-question-circle"></i></td>
              <td colspan="16"><input type="text" v-model="cfg.data.field"></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div v-if="options.content&&current.selector.facade" class="panel panel-default">
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
            <tr v-if="current.selector.facade.format">
              <td colspan="8" title="format">格式</td>
              <td colspan="16"><input type="text" v-model="cfg.facade.format"></td>
            </tr>
            <tr v-if="current.selector.facade.icon">
              <td colspan="8" title="i.icon">图标</td>
              <td colspan="16"><input type="text" v-model="cfg.facade.icon"></td>
            </tr>
            <tr v-if="current.selector.facade.class">
              <td colspan="8" title="class">类</td>
              <td colspan="16"><textarea rows="2" v-model="cfg.facade.class"></textarea></td>
            </tr>
            <tr v-if="current.selector.facade.style">
              <td colspan="8" title="style">样式</td>
              <td colspan="16"><input type="text" v-model="cfg.facade.style"></td>
            </tr>
            <tr v-if="current.selector.facade.tip">
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
    <div v-if="options.content&&current.selector.rule" class="panel panel-default">
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
            <tr v-if="current.selector.rule.required">
              <td colspan="8">必填</td>
              <td colspan="16">
                <label class="mt-checkbox">
                  <input type="checkbox" v-model="cfg.rule.required"> 必填
                  <span></span>
                </label>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div v-if="options.content&&current.selector.auth" class="panel panel-default">
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
            <tr v-if="current.selector.auth.role">
              <td colspan="8">显示给</td>
              <td colspan="16">
                <select v-model="cfg.auth.role">
                  <option>所有人</option>
                  <option>管理员</option>
                </select>
              </td>
            </tr>
            <tr v-if="current.selector.auth.permission">
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
  import dndOptions from '../../../common/dndOptions'
  import settingHandler from '../../../common/SettingHandler'
  import SettingInfo from '../../../common/SettingInfo'

  export default {
    props: {
      options: {
        meta: {
          ui: ''
        }
      }
    },
    data () {
      return {
        cfg: new SettingInfo().cfg,
        current: {
          selector: {}
        }
      }
    },
    watch: {
      'options.actionSeq': function (val, oldVal) {
        let handler = this.getHandler()
        if (handler) {
//          console.log('this.$content>', this.$content)
          handler.setConfig(this.cfg, this.$content)
          this.current.selector = handler.selector
        } else {
          console.error('未有相应的配置器，options>', this.options)
        }
//        this.updateCfg()
      },
      'cfg.data.name': function (val, oldVal) {
        this.$content.findIncludeSelf(this.getHandler().selector.data.name).text(val)
      },
      'cfg.data.field': function (val, oldVal) {
//          this.$content.findIncludeSelf(settingOptions.selector.field).val(val)
      },
      'cfg.data.defaultValue': function (val, oldVal) {
        this.$content.findIncludeSelf(settingOptions.selector.control).val(val)
      },
      'cfg.data.placeholder': function (val, oldVal) {
        this.$content.findIncludeSelf(settingOptions.selector.control).attr('placeholder', val)
      },
      'cfg.facade.format': function (val, oldVal) {
//        this.$content.findIncludeSelf(settingOptions.selector.control).attr('placeholder', val)
      },
      'cfg.facade.icon': function (val, oldVal) {
        this.$content.findIncludeSelf(this.getHandler().selector.facade.icon).attr('class', val)
      },
      'cfg.facade.class': function (val, oldVal) {
        this.$content.findIncludeSelf(this.getHandler().selector.facade.class).attr('class', val)
      },
      'cfg.facade.style': function (val, oldVal) {
        this.$content.findIncludeSelf(this.getHandler().selector.facade.style).attr('style', val)
      },
      'cfg.facade.tip': function (val, oldVal) {
        this.$content.findIncludeSelf(settingOptions.selector.label).attr('title', val)
      },
      'cfg.rule.required': function (val, oldVal) {
        if (!this.getHandler().selector.rule.required) {
          return
        }
        let $required = this.$content.findIncludeSelf(this.getHandler().selector.rule.required)
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
//      this.watchAndUpdateView('cfg.data.name')
    },
    updated: function () {
      if (this.$content) {
        let id = this.$content.attr(dndOptions.attr.data.id)
        this.$emit('updated', {id: id, cfg: this.cfg})
      }
    },
    methods: {
      getHandler: function () {
        this.$content = $(this.options.content)
//        console.log('this.options>', this.options)
        if (this.options.meta) {
          return settingHandler.getHandler(this.options.meta.ui)
        }
        return undefined
      },
      updateCfg: function () {
//        console.log('options>', this.options)
        this.cfg.data.name = this.$content.findIncludeSelf(settingOptions.selector.label).text()
        this.cfg.data.defaultValue = this.$content.findIncludeSelf(settingOptions.selector.control).val()
        this.cfg.data.placeholder = this.$content.findIncludeSelf(settingOptions.selector.control).attr('placeholder')
        this.cfg.facade.tip = this.$content.findIncludeSelf(settingOptions.selector.label).attr('title')
        this.cfg.auth.required = this.$content.findIncludeSelf(settingOptions.selector.required).hasClass('required')
      }
//      watchAndUpdateView: function (propNamePath) {
//        let self = this
//        let handler = this.getHandler()
//        if (handler) {
//          self.$watch(propNamePath, function (val, oldVal) {
//            handler.updateView()
//            self.$content.findIncludeSelf(settingOptions.selector.label).text(val)
//          })
//        } else {
//          console.error('未有相应的配置器，options>', this.options)
//        }
//      }
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
