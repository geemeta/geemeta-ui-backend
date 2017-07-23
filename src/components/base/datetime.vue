<template>
  <div class="input-group date form_meridian_datetime form_datetime bs-datetime">
    <input ref="input" type="text" size="16" class="form-control input-sm" :value="myValue"
           :placeholder="placeholder">
    <span class="input-group-addon input-sm">
      <button class="btn default date-reset btn-sm" type="button">
        <i class="fa fa-times"></i>
      </button>
    </span>
    <span class="input-group-addon">
      <button class="btn default date-set btn-sm" type="button">
        <i class="fa fa-calendar"></i>
      </button>
    </span>
  </div>
</template>
<script>
  export default {
    props: {
      value: null,
      placeholder: {},
      format: {
//        type: 'string',
        default: 'yyyy-mm-dd HH:ii'
      }
    },
    data () {
      return {
        myValue: this.value
      }
    },
    mounted () {
      let self = this
      let options = {
        isRTL: App.isRTL(),
        // dd MM yyyy - HH:ii P
        // yyyy-mm-dd HH:ii:ss
        format: this.format,
        autoclose: true,
        todayBtn: true,
        fontAwesome: true,
//        startDate: '2013-02-14 10:00',
        pickerPosition: (App.isRTL() ? 'bottom-right' : 'bottom-left'),
        minuteStep: 10
      }
      $(this.$el).datetimepicker(options).on('changeDate', function (ev) {
        self.$emit('input', self.$refs.input.value)
//        if (ev.date.valueOf() < date - start - display.valueOf()) {
//        }
      })
    },
    methods: {
      // 由于是通过jquery datetime js修改值，不会触发该事件 ,所以不需要  @input="handleInput"
//      handleInput (event) {
//        this.$emit('input', this.myValue)
//      }
    }
  }
</script>
<style>

</style>
