<template>
  <div class="tables">
    <el-table
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
    >
      <el-table-column v-for="(item,index) in tableList" :key="index" :label="item.label" :width="item.width">
         <template #default="scope">
          <slot :scope="scope.row" :name="item.fields">{{scope.row[item.fields]}}</slot>
        </template>
      </el-table-column>
      <el-table-column :label="btnList[0].label" :width="btnList[0].width">
          <el-button v-for="(btnItem,btnIndex) in btnList[0].options" :key="btnIndex" :type="btnItem.type" :[btnItem.property]="true" :loading="btnItem.loading" :icon="btnItem.icon">{{btnItem.label}}</el-button>
    </el-table-column>
    </el-table>
     <el-pagination
      class="pagiation"
      v-model="currentPage"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  props:{
    // 表头
    tableList:{
      type:Array
    },
    // 表内容
    tableData:{
      type:Array
    },
    // 按钮组
    btnList:{
      type:Array
    }
  },
  data() {
    return {
      currentPage4: ref(4)
    }
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return 'warning-row'
      } else if (rowIndex === 3) {
        return 'success-row'
      }
      return ''
    },
    handleSizeChange(val) {
      console.log(`${val} items per page`)
    },
    handleCurrentChange(val) {
      console.log(`current page: ${val}`)
    }
  },
}
</script>

<style lang="scss">
.el-table .warning-row {
  --el-table-tr-background-color: var(--el-color-warning-lighter);
}
.el-table .success-row {
  --el-table-tr-background-color: var(--el-color-success-lighter);
}
.tables {
  margin-top: 20px;
}
.pagiation {
  margin-top:20px;
  display: flex;
}
.el-button [class*=el-icon-]+span {
  margin:0 !important
}
</style>