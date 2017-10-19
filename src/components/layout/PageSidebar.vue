<template>
  <div class="page-sidebar-wrapper">
    <!-- BEGIN SIDEBAR -->
    <!-- DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing -->
    <!-- DOC: Change data-auto-speed="200" to adjust the sub menu slide up/down speed -->
    <div class="page-sidebar navbar-collapse collapse">
      <!-- BEGIN SIDEBAR MENU -->
      <!-- DOC: Apply "page-sidebar-menu-light" class right after "page-sidebar-menu" to enable light sidebar menu style(without borders) -->
      <!-- DOC: Apply "page-sidebar-menu-hover-submenu" class right after "page-sidebar-menu" to enable hoverable(hover vs accordion) sub menu mode -->
      <!-- DOC: Apply "page-sidebar-menu-closed" class right after "page-sidebar-menu" to collapse("page-sidebar-closed" class must be applied to the body element) the sidebar sub menu mode -->
      <!-- DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing -->
      <!-- DOC: Set data-keep-expand="true" to keep the submenues expanded -->
      <!-- DOC: Set data-auto-speed="200" to adjust the sub menu slide up/down speed -->
      <ul class="page-sidebar-menu  page-header-fixed " data-keep-expanded="false" data-auto-scroll="true"
          data-slide-speed="200" style="padding-top: 20px">
        <!-- DOC: To remove the sidebar toggler from the sidebar you just need to completely remove the below "sidebar-toggler-wrapper" LI element -->
        <!-- BEGIN SIDEBAR TOGGLER BUTTON -->
        <li class="sidebar-toggler-wrapper hide">
          <div class="sidebar-toggler">
            <span></span>
          </div>
        </li>
        <!-- END SIDEBAR TOGGLER BUTTON -->

        <li class="nav-item start ">
          <a href="javascript:;" class="nav-link nav-toggle">
            <i class="icon-home"></i>
            <span class="title">Dashboard</span>
            <span class="arrow"></span>
          </a>
          <ul class="sub-menu">
            <li class="nav-item start ">
              <a href="index.html" class="nav-link ">
                <i class="icon-bar-chart"></i>
                <span class="title">Dashboard 1</span>
              </a>
            </li>
            <li class="nav-item start ">
              <a href="dashboard_2.html" class="nav-link ">
                <i class="icon-bulb"></i>
                <span class="title">Dashboard 2</span>
                <span class="badge badge-success">1</span>
              </a>
            </li>
            <li class="nav-item start ">
              <a href="dashboard_3.html" class="nav-link ">
                <i class="icon-graph"></i>
                <span class="title">Dashboard 3</span>
                <span class="badge badge-danger">5</span>
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item  ">
          <a href="javascript:;" class="nav-link nav-toggle">
            <i class="fa fa-connectdevelop"></i>
            <span class="title">开发资源</span>
            <span class="arrow"></span>
          </a>
          <ul class="sub-menu">
            <li class="nav-item  ">
              <a href="/static/admin_1/index.html" target="_blank" class="nav-link ">
                <span class="title">METRONIC DEMO</span>
              </a>
            </li>
            <li class="nav-item  ">
              <a href="http://getbootstrap.com" target="_blank" class="nav-link ">
                <span class="title">Bootstrap</span>
              </a>
            </li>
            <li class="nav-item  ">
              <a href="http://fontawesome.io/icons" target="_blank" class="nav-link ">
                <span class="title">fontawesome</span>
              </a>
            </li>
          </ul>
        </li>
        <li v-for="subMenu in menu" class="nav-item">
          <a href="javascript:;" class="nav-link nav-toggle">
            <i :class="subMenu.class"></i>
            <span class="title">{{subMenu.title}}</span>
            <span class="arrow"></span>
          </a>
          <ul class="sub-menu">
            <li v-for="item in subMenu.items" class="nav-item  ">
              <a :href="item.href" :target="item.target" class="nav-link">
                <span class="title">{{item.title}}</span>
              </a>
            </li>
          </ul>
        </li>

      </ul>
      <div v-for="item in [[{t:1},{t:2}]]">
        <p v-for="sub in item">
          xxx
        </p>
      </div>
      <!-- END SIDEBAR MENU -->
    </div>
    <!-- END SIDEBAR -->
  </div>
</template>

<script>
  import platformCfg from '../../api/platform/platformCfg.js'

  export default {
    data () {
      return {
        msg: '',
        menu: platformCfg.menu
      }
    },
    created: function () {
      console.log(this.menuItems)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
