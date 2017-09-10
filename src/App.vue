<template>
  <router-view></router-view>
</template>

<script>
  export default {}
</script>

<style>

  :root {
    --xg-layout-header-height: 3.2em;
    --xg-layout-header-title-height: 1.59em;
    --xg-layout-footer-height: 1.5em;
    --xg-layout-content-nav-width: 1.6em;
    --xg-layout-content-subnav-width: 20em;
    --xg-ele-hover-color: #cccccc;
    --xg-ele-color: #ececec;
    --xg-ele-line-color: #dddddd;
    --xg-ele-title-bg-color: #EBEBEB;
    --xg-ele-content-bg-color: #f8f8f8;
    --xg-1-24: 4.16%
  }

  /*=============xg-form start=============*/
  .xg-form {
    width: 100%;
    background-color: var(--xg-ele-line-color);
  }

  .xg-form, table, tr, td {
    margin: 0px;
    pardding: 0px;
  }

  .xg-form td {
    border: 1px solid var(--xg-ele-line-color);
    line-height: 2em;
  }

  .xg-form caption {
    line-height: 2em;
    padding-left: 2em;
    font-weight: bold;
    color: black;
  }

  /*.xg-form td, caption {*/
  /*line-height: 2em;*/
  /*}*/

  .xg-form td.btn-group {
    padding-left: 0.5em;
    padding-right: 0.5em;
  }

  .xg-form td.btn-group.center {
    text-align: center !important;
  }

  .xg-form td.btn-group.right {
    text-align: right !important;
  }

  .xg-form td.btn-group.left {
    text-align: left !important;
  }

  .xg-form td:nth-child(2n+1) {
    font-weight: bold;
    text-align: right;
    padding-right: 1em;
    background-color: var(--xg-ele-title-bg-color);
  }

  .xg-form td:nth-child(2n+1).invert {
    background-color: var(--xg-ele-content-bg-color) !important;
  }

  .xg-form td:nth-child(2n) {
    padding-left: 0.25em;
    background-color: var(--xg-ele-content-bg-color);
  }

  .xg-form td:nth-child(2n).invert {
    background-color: var(--xg-ele-title-bg-color) !important;
  }

  .xg-form.xg-col-24 td {
    width: calc(var(--xg-1-24) * 1);
  }

  .xg-form.xg-col-24 td[colspan="2"] {
    width: calc(var(--xg-1-24) * 2);
  }

  .xg-form.xg-col-24 td[colspan="3"] {
    width: calc(var(--xg-1-24) * 3);
  }

  .xg-form.xg-col-24 td[colspan="4"] {
    width: calc(var(--xg-1-24) * 4);
  }

  .xg-form.xg-col-24 td[colspan="5"] {
    width: calc(var(--xg-1-24) * 5);
  }

  .xg-form.xg-col-24 td[colspan="6"] {
    width: calc(var(--xg-1-24) * 6);
  }

  .xg-form.xg-col-24 td[colspan="7"] {
    width: calc(var(--xg-1-24) * 7);
  }

  .xg-form.xg-col-24 td[colspan="8"] {
    width: calc(var(--xg-1-24) * 8);
  }

  .xg-form.xg-col-24 td[colspan="9"] {
    width: calc(var(--xg-1-24) * 9);
  }

  .xg-form.xg-col-24 td[colspan="10"] {
    width: calc(var(--xg-1-24) * 10);
  }

  .xg-form.xg-col-24 td[colspan="11"] {
    width: calc(var(--xg-1-24) * 11);
  }

  .xg-form.xg-col-24 td[colspan="12"] {
    width: calc(var(--xg-1-24) * 12);
  }

  .xg-form.xg-col-24 td[colspan="13"] {
    width: calc(var(--xg-1-24) * 13);
  }

  .xg-form.xg-col-24 td[colspan="14"] {
    width: calc(var(--xg-1-24) * 14);
  }

  .xg-form.xg-col-24 td[colspan="15"] {
    width: calc(var(--xg-1-24) * 15);
  }

  .xg-form.xg-col-24 td[colspan="16"] {
    width: calc(var(--xg-1-24) * 16);
  }

  .xg-form.xg-col-24 td[colspan="17"] {
    width: calc(var(--xg-1-24) * 17);
  }

  .xg-form.xg-col-24 td[colspan="18"] {
    width: calc(var(--xg-1-24) * 18);
  }

  .xg-form.xg-col-24 td[colspan="19"] {
    width: calc(var(--xg-1-24) * 19);
  }

  .xg-form.xg-col-24 td[colspan="20"] {
    width: calc(var(--xg-1-24) * 19);
  }

  .xg-form.xg-col-24 td[colspan="21"] {
    width: calc(var(--xg-1-24) * 21);
  }

  .xg-form.xg-col-24 td[colspan="22"] {
    width: calc(var(--xg-1-24) * 22);
  }

  .xg-form.xg-col-24 td[colspan="23"] {
    width: calc(var(--xg-1-24) * 23);
  }

  .xg-form.xg-col-24 td[colspan="24"] {
    width: 100%;
    text-align: left;
  }

  .xg-form.xg-col-24.xg-append tr:first-child td {
    border-top: 0px;
  }

  .xg-form caption {
    background-color: var(--xg-ele-title-bg-color);
  }

  .xg-form .field {
    background-color: #c4fafc !important;
  }

  .xg-form td {
    padding: 0.125em;
  }

  .xg-form td textarea, .xg-form td input:not([type=checkbox]):not([type=button]) {
    width: 90%;
  }

  .xg-form li.tips, i.tips {
    color: dodgerblue;
    margin-right: 0.25em;
  }

  .xg-form li.required, .xg-form i.required {
    color: red;
    margin-right: 0.25em;
    list-style-type: none;
    display: inline;
  }

  .xg-form li.sm, .xg-form i.sm {
    font-size: 0.35em;
    line-height: 0.35em;
    vertical-align: 100%;
  }

  .xg-form .form-group {
    /*重置form-group的值*/
    margin-bottom: 0px !important;
  }

  .xg-form .mt-checkbox-list, .mt-radio-list {
    padding: 6px 0 0 0;
  }

  /*compact*/
  .xg-form.compact td {
    padding: 0 0.68em;
    line-height: 1.68em;
  }

  .xg-form.type-blank {

  }

  .xg-form.type-blank td {
    text-align: left;
    background-color: white;
    padding: 0;
  }

  /*=============xg-form end=============*/

  /* 紧凑样式compact 开始*/
  .xg-compact .portlet.light {
    padding: 2px 10px 5px 10px;
  }

  .xg-compact .portlet {
    margin-bottom: 0px;
  }

  .xg-compact .portlet.light > .portlet-title {
    margin-bottom: 0px;
  }

  .xg-compact .portlet.light .form-body {
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .xg-compact .form-group {
    margin-bottom: 10px;
  }

  .xg-compact .mt-checkbox-inline, .mt-radio-inline {
    padding: 5px 0;
  }

  .xg-compact .form-body .mt-checkbox, .mt-radio {
    margin-bottom: 0px;
  }

  /* 紧凑样式compact 结束*/

  /* 重置bootstrap格式，解决bootstrap col 嵌套时，溢出的问题*/
  /*.row.xg-no-gutter [class^="col-"], .row.xg-no-gutter [class*="col-"] {*/
  /*padding-right: 0px;*/
  /*padding-left: 0px;*/
  /*}*/
  .xg-mix-no-mp {
    margin: 0;
    padding: 0
  }

  .nav.xg-mix-xs > li > a {
    padding: 5px 7.5px;
  }

  .control-label .required, .form-group .required {
    list-style-type: none;
    display: inline;
  }

  .control-label .hidden, .form-group .hidden {
    display: none;
  }

  blue {
    color: blue;
  }

</style>
