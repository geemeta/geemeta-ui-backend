<template>
  <div class="page-content-wrapper">
    <!-- BEGIN CONTENT BODY -->
    <div class="page-content">
      <!-- BEGIN PAGE HEADER-->
      <!-- END PAGE HEADER-->
      <div class="row">
        <div class="col-md-12">
          <!-- BEGIN GRID SIDEBAR -->
          <div class="grid-ui">
            <div class="grid-sidebar collapse in">
              <div class="portlet light">
                <div class="portlet-title">
                  <div class="caption" data-toggle="collapse" data-target=".grid-filter-tree">
                    <span class="caption-subject font-green-sharp bold uppercase" style="cursor: pointer">树型过滤 </span>
                  </div>
                </div>
                <div class="portlet-body grid-filter-tree collapse in">
                  <div id="geeTreeOne">
                  </div>
                </div>
              </div>
              <div class="portlet light">
                <div class="portlet-title">
                  <div class="caption" data-toggle="collapse" data-target=".grid-filter-list-content">
                    <span class="caption-subject font-green-sharp bold uppercase" style="cursor: pointer">常用过滤 </span>
                    <span class="caption-helper visible-sm-inline-block visible-xs-inline-block">click to view project list</span>
                  </div>
                  <div class="actions">
                    <div class="btn-group">
                      <a class="btn green btn-circle btn-outline btn-sm grid-filters-config" href="javascript:;"
                         data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                        <i class="icon-settings"></i> &nbsp;
                        <i class="fa fa-angle-down"></i>
                      </a>
                      <ul class="dropdown-menu pull-right">
                        <li>
                          <a href="javascript:;"> 从综合查询中创建 </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                          <a href="javascript:;">
                            <span class="badge badge-danger"> 点击删除 </span> 普能用户 </a>
                        </li>
                        <li>
                          <a href="javascript:;">
                            <span class="badge badge-danger"> 点击删除</span> 管理员 </a>
                        </li>
                        <li>
                          <a href="javascript:;">
                            <span class="badge badge-danger"> 点击删除 </span> 外部用户</a>
                        </li>
                        <li class="divider"></li>
                        <li>
                          <a href="javascript:;">
                            删除所有常用过滤</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="portlet-body grid-filter-list-content collapse in">
                  <div class="grid-filter-list">
                    <ul class="nav nav-stacked">
                      <li>
                        <a href="javascript:;">
                          <span class="badge badge-danger"> 失效 </span> 普能用户 </a>
                      </li>
                      <li>
                        <a href="javascript:;">
                          <span class="badge badge-danger"> 失效</span> 管理员 </a>
                      </li>
                      <li>
                        <a href="javascript:;">
                          <span class="badge badge-danger"> 失效 </span> 外部用户</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="portlet light">
                <div class="portlet-title">
                  <div class="caption" data-toggle="collapse" data-target=".grid-filter-list-content-tags">
                    <span class="caption-subject font-red bold uppercase">综合查询 </span>
                    <span class="caption-helper visible-sm-inline-block visible-xs-inline-block">click to view</span>
                  </div>
                  <div class="actions">
                    <div class="actions">
                      <a class="btn green btn-outline btn-sm" href="javascript:;">
                        <i class="fa fa-search"></i>查询 </a>
                      <a class="btn grey-salsa btn-outline btn-sm" href="javascript:;">
                        重置 </a>
                    </div>
                  </div>
                </div>
                <!--grid-filter-list-content grid-filter-list-content-tags-->
                <div class="portlet-body form">
                  <form role="form">
                    <div class="form-body">
                      <div class="form-group">
                        <label>Email Address</label>
                        <div class="input-group">
                          <span class="input-group-addon">
                              <i class="fa fa-envelope"></i>
                          </span>
                          <input type="text" class="form-control input-sm" placeholder="Email Address"></div>
                      </div>
                      <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <div class="input-group">
                          <input type="password" class="form-control input-sm" id="exampleInputPassword1"
                                 placeholder="Password">
                          <span class="input-group-addon">
                              <i class="fa fa-user font-red"></i>
                          </span>
                        </div>
                      </div>
                      <div class="form-group">
                        <label>Left Icon</label>
                        <div class="input-icon input-icon-sm">
                          <i class="fa fa-bell-o font-green"></i>
                          <input type="text" class="form-control input-sm" placeholder="Left icon"></div>
                      </div>
                      <div class="form-group">
                        <label>Left Icon(.input-sm)</label>
                        <div class="input-icon input-icon-sm">
                          <i class="fa fa-bell-o"></i>
                          <input type="text" class="form-control input-sm" placeholder="Left icon"></div>
                      </div>
                      <div class="form-group">
                        <label>Right Icon</label>
                        <div class="input-icon right">
                          <i class="fa fa-microphone fa-spin font-blue"></i>
                          <input type="text" class="form-control input-sm" placeholder="Right icon"></div>
                      </div>
                      <div class="form-group">
                        <label>Right Icon(.input-sm)</label>
                        <div class="input-icon input-icon-sm right">
                          <i class="fa fa-bell-o"></i>
                          <input type="text" class="form-control input-sm" placeholder="Left icon"></div>
                      </div>
                      <div class="form-group">
                        <label>Right Icon(.input-lg)</label>
                        <div class="input-icon input-icon-lg right">
                          <i class="fa fa-bell-o font-green"></i>
                          <input type="text" class="form-control input-lg" placeholder="Left icon"></div>
                      </div>
                      <div class="form-group">
                        <label>Circle Input</label>
                        <div class="input-icon right">
                          <i class="fa fa-microphone"></i>
                          <input type="text" class="form-control input-circle" placeholder="Right icon"></div>
                      </div>
                      <div class="form-group">
                        <label>Input with Icon</label>
                        <div class="input-group input-icon right">
                                                <span class="input-group-addon">
                                                    <i class="fa fa-envelope font-purple"></i>
                                                </span>
                          <i class="fa fa-exclamation tooltips" data-original-title="Invalid email."
                             data-container="body"></i>
                          <input id="email" class="input-error form-control" type="text" value=""></div>
                      </div>
                      <div class="form-group">
                        <label>Input With Spinner</label>
                        <input class="form-control spinner" type="text" placeholder="Process something"/></div>
                      <div class="form-group">
                        <label>Static Control</label>
                        <p class="form-control-static"> email@example.com </p>
                      </div>
                      <div class="form-group">
                        <label>Disabled</label>
                        <input type="text" class="form-control input-sm" placeholder="Disabled" disabled></div>
                      <div class="form-group">
                        <label>Readonly</label>
                        <input type="text" class="form-control input-sm" placeholder="Readonly" readonly></div>
                      <div class="form-group">
                        <label>Dropdown</label>
                        <select class="form-control input-sm">
                          <option>Option 1</option>
                          <option>Option 2</option>
                          <option>Option 3</option>
                          <option>Option 4</option>
                          <option>Option 5</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label>Multiple Select</label>
                        <select multiple class="form-control input-sm">
                          <option>Option 1</option>
                          <option>Option 2</option>
                          <option>Option 3</option>
                          <option>Option 4</option>
                          <option>Option 5</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label>Textarea</label>
                        <textarea class="form-control input-sm" rows="3"></textarea>
                      </div>
                      <div class="form-group">
                        <label for="exampleInputFile1">File input</label>
                        <input type="file" id="exampleInputFile1">
                        <p class="help-block"> some help text here. </p>
                      </div>
                      <div class="form-group">
                        <label>Checkboxes</label>
                        <div class="mt-checkbox-list">
                          <label class="mt-checkbox"> Checkbox 1
                            <input type="checkbox" value="1" name="test"/>
                            <span></span>
                          </label>
                          <label class="mt-checkbox"> Checkbox 2
                            <input type="checkbox" value="1" name="test"/>
                            <span></span>
                          </label>
                          <label class="mt-checkbox"> Checkbox 3
                            <input type="checkbox" value="1" name="test"/>
                            <span></span>
                          </label>
                        </div>
                      </div>
                      <div class="form-group">
                        <label>Outline Checkboxes</label>
                        <div class="mt-checkbox-list">
                          <label class="mt-checkbox mt-checkbox-outline"> Checkbox 1
                            <input type="checkbox" value="1" name="test"/>
                            <span></span>
                          </label>
                          <label class="mt-checkbox mt-checkbox-outline"> Checkbox 2
                            <input type="checkbox" value="1" name="test"/>
                            <span></span>
                          </label>
                          <label class="mt-checkbox mt-checkbox-outline"> Checkbox 3
                            <input type="checkbox" value="1" name="test"/>
                            <span></span>
                          </label>
                        </div>
                      </div>
                      <div class="form-group">
                        <label>Inline Checkboxes</label>
                        <div class="mt-checkbox-inline">
                          <label class="mt-checkbox">
                            <input type="checkbox" id="inlineCheckbox1" value="option1"> Checkbox 1
                            <span></span>
                          </label>
                          <label class="mt-checkbox">
                            <input type="checkbox" id="inlineCheckbox2" value="option2"> Checkbox 2
                            <span></span>
                          </label>
                          <label class="mt-checkbox mt-checkbox-disabled">
                            <input type="checkbox" id="inlineCheckbox3" value="option3" disabled> Disabled
                            <span></span>
                          </label>
                        </div>
                      </div>
                      <div class="form-group">
                        <label>Radios</label>
                        <div class="mt-radio-list">
                          <label class="mt-radio"> Radio 1
                            <input type="radio" value="1" name="test"/>
                            <span></span>
                          </label>
                          <label class="mt-radio"> Radio 2
                            <input type="radio" value="1" name="test"/>
                            <span></span>
                          </label>
                          <label class="mt-radio"> Radio 3
                            <input type="radio" value="1" name="test"/>
                            <span></span>
                          </label>
                        </div>
                      </div>
                      <div class="form-group">
                        <label>Outline Radios</label>
                        <div class="mt-radio-list">
                          <label class="mt-radio mt-radio-outline"> Radio 1
                            <input type="radio" value="1" name="test"/>
                            <span></span>
                          </label>
                          <label class="mt-radio mt-radio-outline"> Radio 2
                            <input type="radio" value="1" name="test"/>
                            <span></span>
                          </label>
                          <label class="mt-radio mt-radio-outline"> Radio 3
                            <input type="radio" value="1" name="test"/>
                            <span></span>
                          </label>
                        </div>
                      </div>
                      <div class="form-group">
                        <label>Inline Radio</label>
                        <div class="mt-radio-inline">
                          <label class="mt-radio">
                            <input type="radio" name="optionsRadios" id="optionsRadios4" value="option1" checked> Option
                            1
                            <span></span>
                          </label>
                          <label class="mt-radio">
                            <input type="radio" name="optionsRadios" id="optionsRadios5" value="option2"> Option 2
                            <span></span>
                          </label>
                          <label class="mt-radio mt-radio-disabled">
                            <input type="radio" name="optionsRadios" id="optionsRadios6" value="option3" disabled>
                            Disabled
                            <span></span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="form-actions">
                      <button type="submit" class="btn blue">Submit</button>
                      <button type="button" class="btn default">Cancel</button>
                    </div>
                  </form>
                  <div class="grid-filter-list">
                    <ul class="nav nav-pills nav-stacked">
                      <li>
                        <label>用户名</label>
                        <input name="user_name" value=""/>
                      </li>
                      <li>
                        <a href="javascript:;">
                          <span class="badge badge-info"> 2 </span> Completed </a>
                      </li>
                      <li>
                        <a href="javascript:;">
                          <span class="badge badge-success"> 14 </span> In Progress </a>
                      </li>
                      <li>
                        <a href="javascript:;">
                          <span class="badge badge-warning"> 6 </span> Closed </a>
                      </li>
                      <li>
                        <a href="javascript:;">
                          <span class="badge badge-info"> 2 </span> Delivered </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!-- END GRID SIDEBAR -->
            <!-- BEGIN GRID CONTENT -->
            <div class="grid-content">
              <div class="portlet light">
                <!-- GRID HEAD -->
                <div class="portlet-title">
                  <div class="caption">
                    <a href="javascript:;" class="btn btn-sm green" data-toggle="collapse"
                       data-target=".grid-sidebar">
                      <i class="fa fa-navicon fa-lg"></i>
                    </a>
                    <span class="caption-subject font-green-sharp bold uppercase">用户信息</span>
                  </div>
                  <div class="actions">

                    <div class="btn-group">
                      <button id="btn_new" class="btn green btn-circle btn-sm"> 新增
                        <i class="fa fa-plus"></i>
                      </button>
                    </div>
                    <div class="btn-group">
                      <button id="btn_delete" class="btn red btn-circle btn-sm"> 删除
                        <i class="fa fa-remove"></i>
                      </button>
                    </div>
                    <div class="btn-group">
                      <a class="btn green btn-circle btn-sm" href="javascript:;" data-toggle="dropdown"
                         data-hover="dropdown" data-close-others="true"> 导出
                        <i class="fa fa-angle-down"></i>
                      </a>
                      <ul class="dropdown-menu pull-right">
                        <li>
                          <a href="javascript:;">
                            <i class="fa fa-print"></i> Print </a>
                        </li>
                        <li>
                          <a href="javascript:;">
                            <i class="fa fa-file-pdf-o"></i> Save as PDF </a>
                        </li>
                        <li>
                          <a href="javascript:;">
                            <i class="fa fa-file-excel-o"></i> Export to Excel </a>
                        </li>
                        <li>
                          <a href="javascript:;"> New Task </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                          <a href="javascript:;"> Pending
                            <span class="badge badge-danger"> 4 </span>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:;"> Completed
                            <span class="badge badge-success"> 12 </span>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:;"> Overdue
                            <span class="badge badge-warning"> 9 </span>
                          </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                          <a href="javascript:;"> Delete Project </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!-- end GRID HEAD -->
                <div class="portlet-body">
                  <div class="row">
                    <div class="col-md-12">
                      <table class="table table-striped table-bordered table-hover table-checkable order-column"
                             id="geeGridOne">
                        <thead>
                        <tr>
                          <th>
                            <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                              <input type="checkbox" class="group-checkable" data-set="#geeGridOne .checkboxes"/>
                              <span></span>
                            </label>
                          </th>
                          <th> Username</th>
                          <th> Email</th>
                          <th> Status</th>
                          <th> Joined</th>
                          <th> Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr class="odd gradeX">
                          <td>
                            <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                              <input type="checkbox" class="checkboxes" value="1"/>
                              <span></span>
                            </label>
                          </td>
                          <td> shuxer</td>
                          <td>
                            <a href="mailto:shuxer@gmail.com"> shuxer@gmail.com </a>
                          </td>
                          <td>
                            <span class="label label-sm label-success"> Approved </span>
                          </td>
                          <td class="center"> 12 Jan 2012</td>
                          <td>
                            <div class="btn-group">
                              <button class="btn btn-xs green dropdown-toggle" type="button" data-toggle="dropdown"
                                      aria-expanded="false"> Actions
                                <i class="fa fa-angle-down"></i>
                              </button>
                              <ul class="dropdown-menu pull-left" role="menu">
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-docs"></i> New Post </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-tag"></i> New Comment </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-user"></i> New User </a>
                                </li>
                                <li class="divider"></li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-flag"></i> Comments
                                    <span class="badge badge-success">4</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr class="odd gradeX">
                          <td>
                            <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                              <input type="checkbox" class="checkboxes" value="1"/>
                              <span></span>
                            </label>
                          </td>
                          <td> looper</td>
                          <td>
                            <a href="mailto:looper90@gmail.com"> looper90@gmail.com </a>
                          </td>
                          <td>
                            <span class="label label-sm label-warning"> Suspended </span>
                          </td>
                          <td class="center"> 12.12.2011</td>
                          <td>
                            <div class="btn-group">
                              <button class="btn btn-xs green dropdown-toggle" type="button" data-toggle="dropdown"
                                      aria-expanded="false"> Actions
                                <i class="fa fa-angle-down"></i>
                              </button>
                              <ul class="dropdown-menu" role="menu">
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-docs"></i> New Post </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-tag"></i> New Comment </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-user"></i> New User </a>
                                </li>
                                <li class="divider"></li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-flag"></i> Comments
                                    <span class="badge badge-success">4</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr class="odd gradeX">
                          <td>
                            <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                              <input type="checkbox" class="checkboxes" value="1"/>
                              <span></span>
                            </label>
                          </td>
                          <td> userwow</td>
                          <td>
                            <a href="mailto:userwow@yahoo.com"> userwow@yahoo.com </a>
                          </td>
                          <td>
                            <span class="label label-sm label-success"> Approved </span>
                          </td>
                          <td class="center"> 12.12.2011</td>
                          <td>
                            <div class="btn-group">
                              <button class="btn btn-xs green dropdown-toggle" type="button" data-toggle="dropdown"
                                      aria-expanded="false"> Actions
                                <i class="fa fa-angle-down"></i>
                              </button>
                              <ul class="dropdown-menu" role="menu">
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-docs"></i> New Post </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-tag"></i> New Comment </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-user"></i> New User </a>
                                </li>
                                <li class="divider"></li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-flag"></i> Comments
                                    <span class="badge badge-success">4</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr class="odd gradeX">
                          <td>
                            <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                              <input type="checkbox" class="checkboxes" value="1"/>
                              <span></span>
                            </label>
                          </td>
                          <td> user1wow</td>
                          <td>
                            <a href="mailto:userwow@gmail.com"> userwow@gmail.com </a>
                          </td>
                          <td>
                            <span class="label label-sm label-danger"> Blocked </span>
                          </td>
                          <td class="center"> 12.12.2011</td>
                          <td>
                            <div class="btn-group">
                              <button class="btn btn-xs green dropdown-toggle" type="button" data-toggle="dropdown"
                                      aria-expanded="false"> Actions
                                <i class="fa fa-angle-down"></i>
                              </button>
                              <ul class="dropdown-menu" role="menu">
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-docs"></i> New Post </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-tag"></i> New Comment </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-user"></i> New User </a>
                                </li>
                                <li class="divider"></li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-flag"></i> Comments
                                    <span class="badge badge-success">4</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr class="odd gradeX">
                          <td>
                            <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                              <input type="checkbox" class="checkboxes" value="1"/>
                              <span></span>
                            </label>
                          </td>
                          <td> restest</td>
                          <td>
                            <a href="mailto:userwow@gmail.com"> test@gmail.com </a>
                          </td>
                          <td>
                            <span class="label label-sm label-success"> Approved </span>
                          </td>
                          <td class="center"> 12.12.2011</td>
                          <td>
                            <div class="btn-group">
                              <button class="btn btn-xs green dropdown-toggle" type="button" data-toggle="dropdown"
                                      aria-expanded="false"> Actions
                                <i class="fa fa-angle-down"></i>
                              </button>
                              <ul class="dropdown-menu" role="menu">
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-docs"></i> New Post </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-tag"></i> New Comment </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-user"></i> New User </a>
                                </li>
                                <li class="divider"></li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-flag"></i> Comments
                                    <span class="badge badge-success">4</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr class="odd gradeX">
                          <td>
                            <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                              <input type="checkbox" class="checkboxes" value="1"/>
                              <span></span>
                            </label>
                          </td>
                          <td> foopl</td>
                          <td>
                            <a href="mailto:userwow@gmail.com"> good@gmail.com </a>
                          </td>
                          <td>
                            <span class="label label-sm label-info"> Info </span>
                          </td>
                          <td class="center"> 12.12.2011</td>
                          <td>
                            <div class="btn-group">
                              <button class="btn btn-xs green dropdown-toggle" type="button" data-toggle="dropdown"
                                      aria-expanded="false"> Actions
                                <i class="fa fa-angle-down"></i>
                              </button>
                              <ul class="dropdown-menu" role="menu">
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-docs"></i> New Post </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-tag"></i> New Comment </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-user"></i> New User </a>
                                </li>
                                <li class="divider"></li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-flag"></i> Comments
                                    <span class="badge badge-success">4</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr class="odd gradeX">
                          <td>
                            <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                              <input type="checkbox" class="checkboxes" value="1"/>
                              <span></span>
                            </label>
                          </td>
                          <td> weep</td>
                          <td>
                            <a href="mailto:userwow@gmail.com"> good@gmail.com </a>
                          </td>
                          <td>
                            <span class="label label-sm label-danger"> Rejected </span>
                          </td>
                          <td class="center"> 12.12.2011</td>
                          <td>
                            <div class="btn-group">
                              <button class="btn btn-xs green dropdown-toggle" type="button" data-toggle="dropdown"
                                      aria-expanded="false"> Actions
                                <i class="fa fa-angle-down"></i>
                              </button>
                              <ul class="dropdown-menu" role="menu">
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-docs"></i> New Post </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-tag"></i> New Comment </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-user"></i> New User </a>
                                </li>
                                <li class="divider"></li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-flag"></i> Comments
                                    <span class="badge badge-success">4</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr class="odd gradeX">
                          <td>
                            <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                              <input type="checkbox" class="checkboxes" value="1"/>
                              <span></span>
                            </label>
                          </td>
                          <td> coop</td>
                          <td>
                            <a href="mailto:userwow@gmail.com"> good@gmail.com </a>
                          </td>
                          <td>
                            <span class="label label-sm label-info"> Info </span>
                          </td>
                          <td class="center"> 12.12.2011</td>
                          <td>
                            <div class="btn-group">
                              <button class="btn btn-xs green dropdown-toggle" type="button" data-toggle="dropdown"
                                      aria-expanded="false"> Actions
                                <i class="fa fa-angle-down"></i>
                              </button>
                              <ul class="dropdown-menu" role="menu">
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-docs"></i> New Post </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-tag"></i> New Comment </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-user"></i> New User </a>
                                </li>
                                <li class="divider"></li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-flag"></i> Comments
                                    <span class="badge badge-success">4</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr class="odd gradeX">
                          <td>
                            <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                              <input type="checkbox" class="checkboxes" value="1"/>
                              <span></span>
                            </label>
                          </td>
                          <td> pppol</td>
                          <td>
                            <a href="mailto:userwow@gmail.com"> good@gmail.com </a>
                          </td>
                          <td>
                            <span class="label label-sm label-danger"> Suspended </span>
                          </td>
                          <td class="center"> 12.12.2011</td>
                          <td>
                            <div class="btn-group">
                              <button class="btn btn-xs green dropdown-toggle" type="button" data-toggle="dropdown"
                                      aria-expanded="false"> Actions
                                <i class="fa fa-angle-down"></i>
                              </button>
                              <ul class="dropdown-menu" role="menu">
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-docs"></i> New Post </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-tag"></i> New Comment </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-user"></i> New User </a>
                                </li>
                                <li class="divider"></li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-flag"></i> Comments
                                    <span class="badge badge-success">4</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr class="odd gradeX">
                          <td>
                            <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                              <input type="checkbox" class="checkboxes" value="1"/>
                              <span></span>
                            </label>
                          </td>
                          <td> test</td>
                          <td>
                            <a href="mailto:userwow@gmail.com"> good@gmail.com </a>
                          </td>
                          <td>
                            <span class="label label-sm label-warning"> Suspended </span>
                          </td>
                          <td class="center"> 12.12.2011</td>
                          <td>
                            <div class="btn-group">
                              <button class="btn btn-xs green dropdown-toggle" type="button" data-toggle="dropdown"
                                      aria-expanded="false"> Actions
                                <i class="fa fa-angle-down"></i>
                              </button>
                              <ul class="dropdown-menu" role="menu">
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-docs"></i> New Post </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-tag"></i> New Comment </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-user"></i> New User </a>
                                </li>
                                <li class="divider"></li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-flag"></i> Comments
                                    <span class="badge badge-success">4</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr class="odd gradeX">
                          <td>
                            <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                              <input type="checkbox" class="checkboxes" value="1"/>
                              <span></span>
                            </label>
                          </td>
                          <td> userwow</td>
                          <td>
                            <a href="mailto:userwow@gmail.com"> userwow@gmail.com </a>
                          </td>
                          <td>
                            <span class="label label-sm label-warning"> Suspended </span>
                          </td>
                          <td class="center"> 12.12.2011</td>
                          <td>
                            <div class="btn-group">
                              <button class="btn btn-xs green dropdown-toggle" type="button" data-toggle="dropdown"
                                      aria-expanded="false"> Actions
                                <i class="fa fa-angle-down"></i>
                              </button>
                              <ul class="dropdown-menu" role="menu">
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-docs"></i> New Post </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-tag"></i> New Comment </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-user"></i> New User </a>
                                </li>
                                <li class="divider"></li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-flag"></i> Comments
                                    <span class="badge badge-success">4</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr class="odd gradeX">
                          <td>
                            <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                              <input type="checkbox" class="checkboxes" value="1"/>
                              <span></span>
                            </label>
                          </td>
                          <td> test</td>
                          <td>
                            <a href="mailto:userwow@gmail.com"> test@gmail.com </a>
                          </td>
                          <td>
                            <span class="label label-sm label-warning"> Suspended </span>
                          </td>
                          <td class="center"> 12.12.2011</td>
                          <td>
                            <div class="btn-group">
                              <button class="btn btn-xs green dropdown-toggle" type="button" data-toggle="dropdown"
                                      aria-expanded="false"> Actions
                                <i class="fa fa-angle-down"></i>
                              </button>
                              <ul class="dropdown-menu" role="menu">
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-docs"></i> New Post </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-tag"></i> New Comment </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-user"></i> New User </a>
                                </li>
                                <li class="divider"></li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-flag"></i> Comments
                                    <span class="badge badge-success">4</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr class="odd gradeX">
                          <td>
                            <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                              <input type="checkbox" class="checkboxes" value="1"/>
                              <span></span>
                            </label>
                          </td>
                          <td> goop</td>
                          <td>
                            <a href="mailto:userwow@gmail.com"> good@gmail.com </a>
                          </td>
                          <td>
                            <span class="label label-sm label-warning"> Suspended </span>
                          </td>
                          <td class="center"> 12.12.2011</td>
                          <td>
                            <div class="btn-group">
                              <button class="btn btn-xs green dropdown-toggle" type="button" data-toggle="dropdown"
                                      aria-expanded="false"> Actions
                                <i class="fa fa-angle-down"></i>
                              </button>
                              <ul class="dropdown-menu" role="menu">
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-docs"></i> New Post </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-tag"></i> New Comment </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-user"></i> New User </a>
                                </li>
                                <li class="divider"></li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-flag"></i> Comments
                                    <span class="badge badge-success">4</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr class="odd gradeX">
                          <td>
                            <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                              <input type="checkbox" class="checkboxes" value="1"/>
                              <span></span>
                            </label>
                          </td>
                          <td> weep</td>
                          <td>
                            <a href="mailto:userwow@gmail.com"> good@gmail.com </a>
                          </td>
                          <td>
                            <span class="label label-sm label-warning"> Suspended </span>
                          </td>
                          <td class="center"> 12.12.2011</td>
                          <td>
                            <div class="btn-group">
                              <button class="btn btn-xs green dropdown-toggle" type="button" data-toggle="dropdown"
                                      aria-expanded="false"> Actions
                                <i class="fa fa-angle-down"></i>
                              </button>
                              <ul class="dropdown-menu" role="menu">
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-docs"></i> New Post </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-tag"></i> New Comment </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-user"></i> New User </a>
                                </li>
                                <li class="divider"></li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-flag"></i> Comments
                                    <span class="badge badge-success">4</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr class="odd gradeX">
                          <td>
                            <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                              <input type="checkbox" class="checkboxes" value="1"/>
                              <span></span>
                            </label>
                          </td>
                          <td> toopl</td>
                          <td>
                            <a href="mailto:userwow@gmail.com"> good@gmail.com </a>
                          </td>
                          <td>
                            <span class="label label-sm label-warning"> Suspended </span>
                          </td>
                          <td class="center"> 12.12.2011</td>
                          <td>
                            <div class="btn-group">
                              <button class="btn btn-xs green dropdown-toggle" type="button" data-toggle="dropdown"
                                      aria-expanded="false"> Actions
                                <i class="fa fa-angle-down"></i>
                              </button>
                              <ul class="dropdown-menu" role="menu">
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-docs"></i> New Post </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-tag"></i> New Comment </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-user"></i> New User </a>
                                </li>
                                <li class="divider"></li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-flag"></i> Comments
                                    <span class="badge badge-success">4</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr class="odd gradeX">
                          <td>
                            <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                              <input type="checkbox" class="checkboxes" value="1"/>
                              <span></span>
                            </label>
                          </td>
                          <td> userwow</td>
                          <td>
                            <a href="mailto:userwow@gmail.com"> userwow@gmail.com </a>
                          </td>
                          <td>
                            <span class="label label-sm label-warning"> Suspended </span>
                          </td>
                          <td class="center"> 12.12.2011</td>
                          <td>
                            <div class="btn-group">
                              <button class="btn btn-xs green dropdown-toggle" type="button" data-toggle="dropdown"
                                      aria-expanded="false"> Actions
                                <i class="fa fa-angle-down"></i>
                              </button>
                              <ul class="dropdown-menu" role="menu">
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-docs"></i> New Post </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-tag"></i> New Comment </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-user"></i> New User </a>
                                </li>
                                <li class="divider"></li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-flag"></i> Comments
                                    <span class="badge badge-success">4</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr class="odd gradeX">
                          <td>
                            <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                              <input type="checkbox" class="checkboxes" value="1"/>
                              <span></span>
                            </label>
                          </td>
                          <td> tes21t</td>
                          <td>
                            <a href="mailto:userwow@gmail.com"> test@gmail.com </a>
                          </td>
                          <td>
                            <span class="label label-sm label-warning"> Suspended </span>
                          </td>
                          <td class="center"> 12.12.2011</td>
                          <td>
                            <div class="btn-group">
                              <button class="btn btn-xs green dropdown-toggle" type="button" data-toggle="dropdown"
                                      aria-expanded="false"> Actions
                                <i class="fa fa-angle-down"></i>
                              </button>
                              <ul class="dropdown-menu" role="menu">
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-docs"></i> New Post </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-tag"></i> New Comment </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-user"></i> New User </a>
                                </li>
                                <li class="divider"></li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-flag"></i> Comments
                                    <span class="badge badge-success">4</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr class="odd gradeX">
                          <td>
                            <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                              <input type="checkbox" class="checkboxes" value="1"/>
                              <span></span>
                            </label>
                          </td>
                          <td> fop</td>
                          <td>
                            <a href="mailto:userwow@gmail.com"> good@gmail.com </a>
                          </td>
                          <td>
                            <span class="label label-sm label-warning"> Suspended </span>
                          </td>
                          <td class="center"> 12.12.2011</td>
                          <td>
                            <div class="btn-group">
                              <button class="btn btn-xs green dropdown-toggle" type="button" data-toggle="dropdown"
                                      aria-expanded="false"> Actions
                                <i class="fa fa-angle-down"></i>
                              </button>
                              <ul class="dropdown-menu" role="menu">
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-docs"></i> New Post </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-tag"></i> New Comment </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-user"></i> New User </a>
                                </li>
                                <li class="divider"></li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-flag"></i> Comments
                                    <span class="badge badge-success">4</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr class="odd gradeX">
                          <td>
                            <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                              <input type="checkbox" class="checkboxes" value="1"/>
                              <span></span>
                            </label>
                          </td>
                          <td> kop</td>
                          <td>
                            <a href="mailto:userwow@gmail.com"> good@gmail.com </a>
                          </td>
                          <td>
                            <span class="label label-sm label-warning"> Suspended </span>
                          </td>
                          <td class="center"> 12.12.2011</td>
                          <td>
                            <div class="btn-group">
                              <button class="btn btn-xs green dropdown-toggle" type="button" data-toggle="dropdown"
                                      aria-expanded="false"> Actions
                                <i class="fa fa-angle-down"></i>
                              </button>
                              <ul class="dropdown-menu" role="menu">
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-docs"></i> New Post </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-tag"></i> New Comment </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-user"></i> New User </a>
                                </li>
                                <li class="divider"></li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-flag"></i> Comments
                                    <span class="badge badge-success">4</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr class="odd gradeX">
                          <td>
                            <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                              <input type="checkbox" class="checkboxes" value="1"/>
                              <span></span>
                            </label>
                          </td>
                          <td> vopl</td>
                          <td>
                            <a href="mailto:userwow@gmail.com"> good@gmail.com </a>
                          </td>
                          <td>
                            <span class="label label-sm label-warning"> Suspended </span>
                          </td>
                          <td class="center"> 12.12.2011</td>
                          <td>
                            <div class="btn-group">
                              <button class="btn btn-xs green dropdown-toggle" type="button" data-toggle="dropdown"
                                      aria-expanded="false"> Actions
                                <i class="fa fa-angle-down"></i>
                              </button>
                              <ul class="dropdown-menu" role="menu">
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-docs"></i> New Post </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-tag"></i> New Comment </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-user"></i> New User </a>
                                </li>
                                <li class="divider"></li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-flag"></i> Comments
                                    <span class="badge badge-success">4</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr class="odd gradeX">
                          <td>
                            <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                              <input type="checkbox" class="checkboxes" value="1"/>
                              <span></span>
                            </label>
                          </td>
                          <td> userwow</td>
                          <td>
                            <a href="mailto:userwow@gmail.com"> userwow@gmail.com </a>
                          </td>
                          <td>
                            <span class="label label-sm label-warning"> Suspended </span>
                          </td>
                          <td class="center"> 12.12.2011</td>
                          <td>
                            <div class="btn-group">
                              <button class="btn btn-xs green dropdown-toggle" type="button" data-toggle="dropdown"
                                      aria-expanded="false"> Actions
                                <i class="fa fa-angle-down"></i>
                              </button>
                              <ul class="dropdown-menu" role="menu">
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-docs"></i> New Post </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-tag"></i> New Comment </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-user"></i> New User </a>
                                </li>
                                <li class="divider"></li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-flag"></i> Comments
                                    <span class="badge badge-success">4</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr class="odd gradeX">
                          <td>
                            <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                              <input type="checkbox" class="checkboxes" value="1"/>
                              <span></span>
                            </label>
                          </td>
                          <td> wap</td>
                          <td>
                            <a href="mailto:userwow@gmail.com"> test@gmail.com </a>
                          </td>
                          <td>
                            <span class="label label-sm label-warning"> Suspended </span>
                          </td>
                          <td class="center"> 12.12.2011</td>
                          <td>
                            <div class="btn-group">
                              <button class="btn btn-xs green dropdown-toggle" type="button" data-toggle="dropdown"
                                      aria-expanded="false"> Actions
                                <i class="fa fa-angle-down"></i>
                              </button>
                              <ul class="dropdown-menu" role="menu">
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-docs"></i> New Post </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-tag"></i> New Comment </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-user"></i> New User </a>
                                </li>
                                <li class="divider"></li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-flag"></i> Comments
                                    <span class="badge badge-success">4</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr class="odd gradeX">
                          <td>
                            <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                              <input type="checkbox" class="checkboxes" value="1"/>
                              <span></span>
                            </label>
                          </td>
                          <td> test</td>
                          <td>
                            <a href="mailto:userwow@gmail.com"> good@gmail.com </a>
                          </td>
                          <td>
                            <span class="label label-sm label-warning"> Suspended </span>
                          </td>
                          <td class="center"> 12.12.2011</td>
                          <td>
                            <div class="btn-group">
                              <button class="btn btn-xs green dropdown-toggle" type="button" data-toggle="dropdown"
                                      aria-expanded="false"> Actions
                                <i class="fa fa-angle-down"></i>
                              </button>
                              <ul class="dropdown-menu" role="menu">
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-docs"></i> New Post </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-tag"></i> New Comment </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-user"></i> New User </a>
                                </li>
                                <li class="divider"></li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-flag"></i> Comments
                                    <span class="badge badge-success">4</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr class="odd gradeX">
                          <td>
                            <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                              <input type="checkbox" class="checkboxes" value="1"/>
                              <span></span>
                            </label>
                          </td>
                          <td> toop</td>
                          <td>
                            <a href="mailto:userwow@gmail.com"> good@gmail.com </a>
                          </td>
                          <td>
                            <span class="label label-sm label-warning"> Suspended </span>
                          </td>
                          <td class="center"> 12.12.2011</td>
                          <td>
                            <div class="btn-group">
                              <button class="btn btn-xs green dropdown-toggle" type="button" data-toggle="dropdown"
                                      aria-expanded="false"> Actions
                                <i class="fa fa-angle-down"></i>
                              </button>
                              <ul class="dropdown-menu" role="menu">
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-docs"></i> New Post </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-tag"></i> New Comment </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-user"></i> New User </a>
                                </li>
                                <li class="divider"></li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-flag"></i> Comments
                                    <span class="badge badge-success">4</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr class="odd gradeX">
                          <td>
                            <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                              <input type="checkbox" class="checkboxes" value="1"/>
                              <span></span>
                            </label>
                          </td>
                          <td> weep</td>
                          <td>
                            <a href="mailto:userwow@gmail.com"> good@gmail.com </a>
                          </td>
                          <td>
                            <span class="label label-sm label-warning"> Suspended </span>
                          </td>
                          <td class="center"> 12.12.2011</td>
                          <td>
                            <div class="btn-group">
                              <button class="btn btn-xs green dropdown-toggle" type="button" data-toggle="dropdown"
                                      aria-expanded="false"> Actions
                                <i class="fa fa-angle-down"></i>
                              </button>
                              <ul class="dropdown-menu" role="menu">
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-docs"></i> New Post </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-tag"></i> New Comment </a>
                                </li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-user"></i> New User </a>
                                </li>
                                <li class="divider"></li>
                                <li>
                                  <a href="javascript:;">
                                    <i class="icon-flag"></i> Comments
                                    <span class="badge badge-success">4</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- END GRID CONTENT -->
          </div>
        </div>
        <!-- END PAGE CONTENT-->
      </div>
    </div>
    <!-- END CONTENT BODY -->
  </div>
</template>
<script>
  export default {
    data () {
      return {
        msg: ''
      }
    },
    mounted: function () {
      $('#geeTreeOne').jstree({
        'core': {
          'themes': {
            'responsive': false
          },
          // so that create works
          'check_callback': true,
          'data': [{
            'text': 'Parent Node',
            'children': [{
              'text': 'Initially selected',
              'state': {
                'selected': true
              }
            }, {
              'text': 'Custom Icon',
              'icon': 'fa fa-warning icon-state-danger'
            }, {
              'text': 'Initially open',
              'icon': 'fa fa-folder icon-state-success',
              'state': {
                'opened': true
              },
              'children': [
                {'text': 'Another node', 'icon': 'fa fa-file icon-state-warning'}
              ]
            }, {
              'text': 'Another Custom Icon',
              'icon': 'fa fa-warning icon-state-warning'
            }, {
              'text': 'Disabled Node',
              'icon': 'fa fa-check icon-state-success',
              'state': {
                'disabled': true
              }
            }, {
              'text': 'Sub Nodes',
              'icon': 'fa fa-folder icon-state-danger',
              'children': [
                {'text': 'Item 1', 'icon': 'fa fa-file icon-state-warning'},
                {'text': 'Item 2', 'icon': 'fa fa-file icon-state-success'},
                {'text': 'Item 3', 'icon': 'fa fa-file icon-state-default'},
                {'text': 'Item 4', 'icon': 'fa fa-file icon-state-danger'},
                {'text': 'Item 5', 'icon': 'fa fa-file icon-state-info'}
              ]
            }]
          },
            'Another Node'
          ]
        },
        'types': {
          'default': {
            'icon': 'fa fa-folder icon-state-warning icon-lg'
          },
          'file': {
            'icon': 'fa fa-file icon-state-warning icon-lg'
          }
        },
        'state': {'key': 'demo2'},
        'plugins': ['contextmenu', 'dnd', 'state', 'types']
      })
//      function AppGrid () {
//        // private functions & variables
//        var _initComponents = function () {
//          // init datepicker
//          //          $('.grid-taskbody-due').datepicker({
//          //            rtl: window.App.isRTL(),
//          //            orientation: 'left',
//          //            autoclose: true
//          //          })
//          // init tags
//          //          $('.grid-taskbody-tags').select2({
//          //            placeholder: 'Status'
//          //          })
//        }
//        var _handleProjectListMenu = function () {
//          if (window.App.getViewPort().width <= 992) {
//            $('.grid-filter-list-content').addClass('collapse')
//          } else {
//            $('.grid-filter-list-content').removeClass('collapse').css('height', 'auto')
//          }
//        }
//        // public functions
//        return {
//          // main function
//          init: function () {
//            _initComponents()
//            _handleProjectListMenu()
//            window.App.addResizeHandler(function () {
//              _handleProjectListMenu()
//            })
//          }
//        }
//      }
//
//      new AppGrid().init()

      console.log('beforeMount is triggered.')
      var table = $('#geeGridOne')
      // begin first table
      table.dataTable({
        // Internationalisation. For more info refer to http://datatables.net/manual/i18n
//        'language': {
//          'aria': {
//            'sortAscending': ': activate to sort column ascending',
//            'sortDescending': ': activate to sort column descending'
//          },
//          'emptyTable': 'No data available in table',
//          'info': 'Showing _START_ to _END_ of _TOTAL_ records',
//          'infoEmpty': 'No records found',
//          'infoFiltered': '(filtered1 from _MAX_ total records)',
//          'lengthMenu': 'Show _MENU_',
//          'search': 'Search:',
//          'zeroRecords': 'No matching records found',
//          'paginate': {
//            'previous': 'Prev',
//            'next': 'Next',
//            'last': 'Last',
//            'first': 'First'
//          }
//        },
        'language': {
          'aria': {
            'sortAscending': ': 正序',
            'sortDescending': ': 倒序'
          },
          'emptyTable': '没有数据',
          'info': ' _START_ 到 _END_ /共 _TOTAL_ 条记录',
          'infoEmpty': '没有数据',
          'infoFiltered': '(从 _MAX_ 条记录中筛选)',
          'lengthMenu': '每页 _MENU_ 条记录',
          'search': '搜索当前表格:',
          'zeroRecords': '没有数据',
          'paginate': {
            'previous': '上一页',
            'next': '下一页',
            'last': '最后一页',
            'first': '第一页'
          }
        },
        // save datatable state(pagination, sort, etc) in cookie.
        'bStateSave': true,
        // change per page values here
        'lengthMenu': [
          [5, 10, 15, 20, -1],
          [5, 10, 15, 20, 30, '所有']
        ],
        // set the initial value
        'pageLength': 5,
        'pagingType': 'bootstrap_full_number',
        'columnDefs': [
          {
            // set default column settings
            'orderable': false,
            'targets': [0]
          },
          {
            'searchable': false,
            'targets': [0]
          },
          {
            'className': 'dt-right'
            // 'targets': [2]
          }
        ],
        // set first column as a default sort by asc
        'order': [
          [1, 'asc']
        ]
      })
      table.find('.group-checkable').change(function () {
        var set = $(this).attr('data-set')
        var checked = $(this).is(':checked')
        $(set).each(function () {
          if (checked) {
            $(this).prop('checked', true)
            $(this).parents('tr').addClass('active')
          } else {
            $(this).prop('checked', false)
            $(this).parents('tr').removeClass('active')
          }
        })
      })
      table.on('change', 'tbody tr .checkboxes', function () {
        $(this).parents('tr').toggleClass('active')
      })
    }
  }
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
</style>
