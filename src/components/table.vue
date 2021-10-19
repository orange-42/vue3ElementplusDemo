<template>
  <div class="tables">
    <div class="btn-menu">
      <div>
        <div class="left-btnGroup">
          <el-button @click="add" type="primary" size="small">新增</el-button>
          <el-button :disabled="multipleSelection.length==0" @click="selDel" type="danger" size="small">批量删除</el-button>
        </div>
        <div class="right-btnGroup">
        </div>
      </div>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%"
      @selection-change="handleSelectionChange"
      :row-class-name="tableRowClassName"
    >
    <el-table-column type="selection" width="55" />
    <el-table-column v-for="(item,index) in tableList" :key="index" :label="item.label" :width="item.width">
      <template #default="scope">
        <slot :scope="scope.row" :name="item.fields">{{scope.row[item.fields]}}</slot>
      </template>
    </el-table-column>
    <el-table-column :label="btnList[0].label" :width="btnList[0].width">
      <template #default="scope">
        <el-button @click="btnEvent(btnItem.title,scope.$index,scope.row)" :title="btnItem.title" v-for="(btnItem,btnIndex) in btnList[0].options" :key="btnIndex" :type="btnItem.type" :[btnItem.property]="true" :loading="btnItem.loading" :icon="btnItem.icon">{{btnItem.label}}</el-button>
      </template>
    </el-table-column>
    </el-table>
     <el-pagination
      class="pagiation"
      v-model="currentPage"
      :page-sizes="pageSize"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totals"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
    <Dialogs :actionName="actionName" v-bind="$attrs" ref="dialogs">
      <div>
        <slot name="dialog"></slot>
      </div>
    </Dialogs>
  </div>
</template>

<script>
import { getCurrentInstance, ref} from 'vue';
import msgbox from '../mixins/hooksMixins/messageBox'
import Dialogs from '../components/dialogs.vue'
export default {
  // 继承所有父组件的内容
  inheritAttrs: true,
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
    },
    // 表格分页器规格
    pageSize:{
      type:Array,
      default:function(){
        return [10,20,30,40]
      }
    },
    // 表格当前选择分页器规格
    pagesize:{
      type:Number,
      default:function(){
        return 10
      }
    },
    // 当前页数
    currentPage:{
      type:Number,
      default:function(){
        return 1
      }
    },
    // 表格总条数
    totals:{
      type:Number,
      default:function(){
        return 40
      }
    }
  },
  components:{ Dialogs },
  setup(props,ctx){
    const actionName = ref('add')
    const multipleSelection = ref([]);
    const currentPage4 = ref(4);
    const ins = getCurrentInstance(); // 拿到页面实例
    // 单双数 表格背景颜色
    function tableRowClassName ({ row, rowIndex }) {
      if (rowIndex === 1) {
        return 'warning-row'
      } else if (rowIndex === 3) {
        return 'success-row'
      }
      return ''
    }
    // 表格新增
    function add() {
      actionName.value = 'add'
      dialogOpen();
      console.log(ins,ctx,props,'ctxsssprops')
      ctx.emit('resetForm')
    }
    function dialogOpen() {
      ins.refs.dialogs.dialogVisible = true;
    }
    // 多选 进行选择后的数组
    function handleSelectionChange(val){
      multipleSelection.value = val;
    }
    // 一页显示多少条数据
    function handleSizeChange(val) {
      props.pagesize = val;
    }
    // 当前页面
    function handleCurrentChange(val) {
      props.currentPage = val;
    }
    function btnEvent(eventName,index,row){
      console.log(index,'btnEvent')
      switch (eventName) {
        case '编辑':
          actionName.value = 'edit';
          ctx.emit('edit',row,index)
          return dialogOpen()
        case '删除':
          return msgbox('是否删除该条数据？',props.tableData,index)
      }
    }
    // 多选删除
    function selDel(){
      let selArr = [];
      props.tableData.forEach((item,index)=>{
        console.log(item.id)
        multipleSelection.value.forEach((item1)=>{
        console.log(item1.id)
          if(item1.id == item.id) {
            selArr.push(item1.id)
          }
        })
      })
      console.log(selArr,'selArr')
      if(selArr.length == multipleSelection.value.length){
        msgbox('是否对选中项进行批量删除？',props.tableData,selArr)
      }
    }
    return {
      currentPage4,
      actionName,
      tableRowClassName,
      handleSizeChange,
      add,
      selDel,
      handleCurrentChange,
      btnEvent,
      dialogOpen,
      handleSelectionChange,
      multipleSelection
    }
  }
}
</script>

<style lang="scss">
.el-table .warning-row {
  --el-table-tr-background-color: var(--el-color-warning-lighter);
}
.el-table .success-row {
  --el-table-tr-background-color: var(--el-color-success-lighter);
}
.pagiation {
  margin-top:20px;
  display: flex;
}
.el-button [class*=el-icon-]+span {
  margin:0 !important
}
.btn-menu {
  margin-top: 30px;
  height: 40px;
  .left-btnGroup {
    float: left;
  }
}
</style>