<style>
  #shopping-cart>.margin>.cart-floatbar>.top{height: 120px;border: 1px solid #cccccc}
  #shopping-cart>.margin>.cart-floatbar>.bottom{height: 50px;border: 1px solid #cccccc;display: flex}
  #shopping-cart>.margin>.cart-floatbar>.bottom>div:nth-child(1){background-color: #f3f3f3;height: 50px;width: 974px;color: #333;line-height: 50px}
  #shopping-cart>.margin>.cart-floatbar>.bottom>div:nth-child(2){
    background-color: var(--main-color);height: 50px;width: 252px;color: white;
    font-size: 18px;
    text-align: center;
    line-height: 50px;
  }
</style>
<template>
  <div id="shopping-cart">
    <div class="margin">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          label="日期">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="单价">
          <template slot-scope="scope">
            <p>3333</p>
          </template>
        </el-table-column>
        <el-table-column label="数量">
          <template slot-scope="scope">
            <el-input-number size="small" v-model="shuliang" :min="1" :max="10" label="描述文字"></el-input-number>
          </template>
        </el-table-column>
        <el-table-column label="小计">
          <template slot-scope="scope">
            <p>100</p>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="cart-floatbar">
        <div class="top">
          <div></div>
          <ul>
            <li>
              <span>共5件商品  商品金额</span>
              <span>479</span>
            </li>
            <li>
              <span>总金额（未含运费)</span>
              <span>479</span>
            </li>
          </ul>
        </div>
        <div class="bottom">
          <div>
            <p style="float: right;margin-right: 20px">请在倒计时结束前结算</p>
          </div>
          <div>
            <div class="btn">
              <span>立即结算</span>
              <span>17:57</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        shuliang:"",
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>
