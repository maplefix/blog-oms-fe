<template>
  <div class="app-container">
    <el-form :inline="true">
      <el-form-item label="登录地址">
        <el-input v-model="queryParams.ipAddr" placeholder="请输入登录地址" clearable size="small"
                  @keyup.enter.native="handleQuery"/>
      </el-form-item>
      <el-form-item label="用户名称">
        <el-input v-model="queryParams.userName" placeholder="请输入用户名称" clearable size="small"
                  @keyup.enter.native="handleQuery"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
      </el-form-item>
    </el-form>

    <el-table
      v-loading="loading"
      :data="list.slice((pageNum-1)*pageSize,pageNum*pageSize)"
      style="width: 100%;"
    >
      <el-table-column label="序号" type="index">
        <template slot-scope="scope">
          <span>{{(pageNum - 1) * pageSize + scope.$index + 1}}</span>
        </template>
      </el-table-column>
      <el-table-column label="会话编号" prop="tokenId" :show-overflow-tooltip="true"/>
      <el-table-column label="登录名称" prop="userName" :show-overflow-tooltip="true"/>
      <el-table-column label="主机" prop="ipAddr" :show-overflow-tooltip="true"/>
      <el-table-column label="登录地点" prop="loginLocation"/>
      <el-table-column label="浏览器" prop="browser"/>
      <el-table-column label="操作系统" prop="os"/>
      <el-table-column label="登录时间" prop="loginTime" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.loginTime) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-popover :ref="scope.row.id" placement="top" width="180">
            <p>确定强退该用户吗？</p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="$refs[scope.row.id].doClose()">取消
              </el-button>
              <el-button :loading="loading" type="primary" size="mini" @click="handleForceLogout(scope.row.tokenId)">确定
              </el-button>
            </div>
            <el-button slot="reference" type="text" icon="el-icon-delete" size="mini">删除
            </el-button>
          </el-popover>
        </template>
      </el-table-column>
    </el-table>
    <pagination v-show="total>0" :total="total" :page.sync="pageNum" :limit.sync="pageSize"/>
  </div>
</template>

<script>
  import {list, forceLogout} from "@/api/monitor/online";

  export default {
    data() {
      return {
        // 遮罩层
        loading: true,
        // 总条数
        total: 0,
        // 表格数据
        list: [],
        pageNum: 1,
        pageSize: 10,
        // 查询参数
        queryParams: {
          ipAddr: undefined,
          userName: undefined
        }
      };
    },
    created() {
      this.getList();
    },
    methods: {
      /** 查询登录日志列表 */
      getList() {
        this.loading = true;
        list(this.queryParams).then(response => {
          this.list = response.rows;
          this.total = response.total;
          this.loading = false;
        });
      },
      /** 搜索按钮操作 */
      handleQuery() {
        this.pageNum = 1;
        this.getList();
      },
      /** 强退按钮操作 */
      handleForceLogout(tokenId) {
        this.loading = true;
        forceLogout(tokenId).then((response) => {
          if (response.code == 200) {
            this.msgSuccess("强退成功");
          } else {
            this.msgError("强退失败");
          }
          this.getList();
          this.loading = false
        });
      }
    }
  };
</script>

