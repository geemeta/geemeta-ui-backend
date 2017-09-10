class SettingInfo {
  constructor () {
    this.cfg = {
      data: {
        name: '',
        field: '',
        defaultValue: '',
        placeholder: ''
      },
      facade: {
        icon: '', // fa fa-file
        tip: '',
        format: '',
        class: '',
        style: '',
        display: ''
      },
      rule: {
        required: ''
      },
      auth: {
        role: '',
        permission: ''
      }
    }
  }
}

export default SettingInfo
