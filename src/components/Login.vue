<template>
  <div class=" login" style="padding-bottom: 4em">
    <!-- BEGIN LOGO -->
    <div class="logo">
      <!--<a href="index.html">-->
      <!--<img src="static/assets/logo.png" alt="" /> </a>-->
    </div>
    <!-- END LOGO -->
    <!-- BEGIN LOGIN -->
    <div class="content">
      <!-- BEGIN LOGIN FORM -->
      <form class="login-form">
        <h3 class="form-title">登录</h3>
        <div class="alert alert-danger display-hide">
          <button class="close" data-close="alert"></button>
          <span> 输入用户名和密码。 </span>
        </div>
        <div class="form-group">
          <!--ie8, ie9 does not support html5 placeholder, so we just show field title for that-->
          <label class="control-label visible-ie8 visible-ie9">用户名</label>
          <div class="input-icon">
            <i class="fa fa-user"></i>
            <input class="form-control placeholder-no-fix" type="text" autocomplete="off" placeholder="用户名"
                   name="loginName"/></div>
        </div>
        <div class="form-group">
          <label class="control-label visible-ie8 visible-ie9">Password</label>
          <div class="input-icon">
            <i class="fa fa-lock"></i>
            <input class="form-control placeholder-no-fix" type="password" autocomplete="off" placeholder="密码"
                   name="password"/></div>
        </div>
        <div class="form-actions">
          <label class="rememberme mt-checkbox mt-checkbox-outline">
            <input type="checkbox" name="remember" value="1"/> 记住
            <span></span>
          </label>
          <div id="login" class="btn green pull-right" @click="login"> 登录</div>
        </div>
        <div class="forget-password">
          <!--<h4>忘记密码</h4>-->
          <p> 忘记密码？ 点击
            <a href="javascript:;" id="forget-password"> 这里 </a> 重置密码。 </p>
        </div>
        <div class="create-account">
          <p> 没有账号 ?&nbsp;
            <a href="javascript:;" id="register-btn"> 注册 </a>
          </p>
        </div>
      </form>
      <!-- END LOGIN FORM -->
      <!-- BEGIN FORGOT PASSWORD FORM -->
      <form class="forget-form" action="index.html" method="post">
        <h3>忘记密码 ?</h3>
        <p> 输入邮箱地址找回您的密码。 </p>
        <div class="form-group">
          <div class="input-icon">
            <i class="fa fa-envelope"></i>
            <input class="form-control placeholder-no-fix" type="text" autocomplete="off" placeholder="邮箱"
                   name="email"/>
          </div>
        </div>
        <div class="form-actions">
          <button type="button" id="back-btn" class="btn grey-salsa btn-outline"> 返回</button>
          <button type="submit" class="btn green pull-right"> 提交</button>
        </div>
      </form>
      <!-- END FORGOT PASSWORD FORM -->
      <!-- BEGIN REGISTRATION FORM -->
      <form class="register-form" action="index.html" method="post">
        <h3>注册</h3>
        <!--<p> 输入个人详细信息 </p>-->
        <div class="form-group">
          <label class="control-label visible-ie8 visible-ie9">手机号码</label>
          <div class="input-icon">
            <i class="fa fa-mobile-phone"></i>
            <input class="form-control placeholder-no-fix" type="text" placeholder="手机号码" name="mobile_phone"/></div>
        </div>
        <div class="form-group">
          <!--ie8, ie9 does not support html5 placeholder, so we just show field title for that-->
          <label class="control-label visible-ie8 visible-ie9">邮箱</label>
          <div class="input-icon">
            <i class="fa fa-envelope"></i>
            <input class="form-control placeholder-no-fix" type="text" placeholder="邮箱" name="email"/></div>
        </div>
        <div class="form-group">
          <label class="control-label visible-ie8 visible-ie9">用户名</label>
          <div class="input-icon">
            <i class="fa fa-user"></i>
            <input class="form-control placeholder-no-fix" type="text" autocomplete="off" placeholder="用户名"
                   name="loginName"/></div>
        </div>
        <div class="form-group">
          <label class="control-label visible-ie8 visible-ie9">密码</label>
          <div class="input-icon">
            <i class="fa fa-lock"></i>
            <input class="form-control placeholder-no-fix" type="password" autocomplete="off" id="register_password"
                   placeholder="密码" name="password"/></div>
        </div>
        <div class="form-group">
          <label class="control-label visible-ie8 visible-ie9">重新输入密码</label>
          <div class="controls">
            <div class="input-icon">
              <i class="fa fa-check"></i>
              <input class="form-control placeholder-no-fix" type="password" autocomplete="off"
                     placeholder="重新输入密码" name="rpassword"/></div>
          </div>
        </div>
        <div class="form-group">
          <label class="mt-checkbox mt-checkbox-outline">
            <input type="checkbox" name="tnc"/> 我同意
            <a href="javascript:;">服务 </a> &
            <a href="javascript:;">保密协议 </a>
            <span></span>
          </label>
          <div id="register_tnc_error"></div>
        </div>
        <div class="form-actions">
          <button id="register-back-btn" type="button" class="btn grey-salsa btn-outline"> 返回</button>
          <button type="submit" id="register-submit-btn" class="btn green pull-right"> 提交</button>
        </div>
      </form>
      <!-- END REGISTRATION FORM -->
    </div>
  </div>
</template>

<script>
//  import * as types from '../store/types'

  function Login () {
    var handleLogin = function () {
      $('.login-form').validate({
        errorElement: 'span', // default input error message container
        errorClass: 'help-block', // default input error message class
        focusInvalid: false, // do not focus the last invalid input
        rules: {
          loginName: {
            required: true
          },
          password: {
            required: true
          },
          remember: {
            required: false
          }
        },

        messages: {
          loginName: {
            required: '用户名不能为空。'
          },
          password: {
            required: '密码不能为空。'
          }
        },

        invalidHandler: function (event, validator) {
          // display error alert on form submit
          $('.alert-danger', $('.login-form')).show()
        },

        highlight: function (element) { // hightlight error inputs
          $(element)
            .closest('.form-group').addClass('has-error') // set error class to the control group
        },

        success: function (label) {
          label.closest('.form-group').removeClass('has-error')
          label.remove()
        },

        errorPlacement: function (error, element) {
          error.insertAfter(element.closest('.input-icon'))
        },

        submitHandler: function (form) {
          form.submit() // form validation success, call ajax form submit
        }
      })
    }
    var handleForgetPassword = function () {
      $('.forget-form').validate({
        errorElement: 'span', // default input error message container
        errorClass: 'help-block', // default input error message class
        focusInvalid: false, // do not focus the last invalid input
        ignore: '',
        rules: {
          email: {
            required: true,
            email: true
          }
        },

        messages: {
          email: {
            required: 'Email is required.'
          }
        },

        invalidHandler: function (event, validator) { // display error alert on form submit

        },

        highlight: function (element) { // hightlight error inputs
          $(element)
            .closest('.form-group').addClass('has-error') // set error class to the control group
        },

        success: function (label) {
          label.closest('.form-group').removeClass('has-error')
          label.remove()
        },

        errorPlacement: function (error, element) {
          error.insertAfter(element.closest('.input-icon'))
        },

        submitHandler: function (form) {
          form.submit()
        }
      })

      $('.forget-form input').keypress(function (e) {
        if (e.which === 13) {
          if ($('.forget-form').validate().form()) {
            $('.forget-form').submit()
          }
          return false
        }
      })

      $('#forget-password').click(function () {
        $('.login-form').hide()
        $('.forget-form').show()
      })

      $('#back-btn').click(function () {
        $('.login-form').show()
        $('.forget-form').hide()
      })
    }
    var handleRegister = function () {
      function format (state) {
        if (!state.id) {
          return state.text
        }
        var $state = $(
          '<span><img src="../assets/global/img/flags/' + state.element.value.toLowerCase() + '.png" class="img-flag" /> ' + state.text + '</span>'
        )
        return $state
      }

      if ($().select2 && $('#country_list').size() > 0) {
        $('#country_list').select2({
          placeholder: '<i class="fa fa-map-marker"></i>&nbsp;Select a Country',
          templateResult: format,
          templateSelection: format,
          width: 'auto',
          escapeMarkup: function (m) {
            return m
          }
        })

        $('#country_list').change(function () {
          $('.register-form').validate().element($(this)) // revalidate the chosen dropdown value and show error or success message for the input
        })
      }

      $('.register-form').validate({
        errorElement: 'span', // default input error message container
        errorClass: 'help-block', // default input error message class
        focusInvalid: false, // do not focus the last invalid input
        ignore: '',
        rules: {

          fullname: {
            required: true
          },
          email: {
            required: true,
            email: true
          },
          address: {
            required: true
          },
          city: {
            required: true
          },
          country: {
            required: true
          },

          loginName: {
            required: true
          },
          password: {
            required: true
          },
          rpassword: {
            equalTo: '#register_password'
          },

          tnc: {
            required: true
          }
        },

        messages: { // custom messages for radio buttons and checkboxes
          tnc: {
            required: 'Please accept TNC first.'
          }
        },

        invalidHandler: function (event, validator) { // display error alert on form submit

        },

        highlight: function (element) { // hightlight error inputs
          $(element)
            .closest('.form-group').addClass('has-error') // set error class to the control group
        },

        success: function (label) {
          label.closest('.form-group').removeClass('has-error')
          label.remove()
        },

        errorPlacement: function (error, element) {
          if (element.attr('name') === 'tnc') { // insert checkbox errors after the container
            error.insertAfter($('#register_tnc_error'))
          } else if (element.closest('.input-icon').size() === 1) {
            error.insertAfter(element.closest('.input-icon'))
          } else {
            error.insertAfter(element)
          }
        },

        submitHandler: function (form) {
          form[0].submit()
        }
      })

      $('.register-form input').keypress(function (e) {
        if (e.which === 13) {
          if ($('.register-form').validate().form()) {
            $('.register-form').submit()
          }
          return false
        }
      })

      $('#register-btn').click(function () {
        $('.login-form').hide()
        $('.register-form').show()
      })

      $('#register-back-btn').click(function () {
        $('.login-form').show()
        $('.register-form').hide()
      })
    }

    return {
      init: function () {
        handleLogin()
        handleForgetPassword()
        handleRegister()
      }
    }
  }

  export default {
    mounted () {
      Login().init()
    },
    methods: {
      login: function () {
        let $vue = this
        if ($('.login-form').validate().form()) {
          var user = '{"loginName": "@loginName", "password": "@password","remember":"@remember"}'
          var loginName = $('.login-form input[name=\'loginName\']').val()
          var password = $('.login-form input[name=\'password\']').val()
          var remember = $('.login-form input[name=\'remember\']').prop('checked')
          user = user.replace('@loginName', loginName)
          user = user.replace('@password', password)
          $vue.$GM.login(user, remember, function (data) {
            console.debug('success....login....', data)
            $vue.$GM.profile(data)
//            $vue.$store.commit(types.LOGIN, data)
            $vue.$router.push('/m/designer')
          })
        }
      }
    }
  }
</script>

<style>

</style>
