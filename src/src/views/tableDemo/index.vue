<template>
  <div>
    <tables :tableList="tableList" :tableData="tableData" :btnList="btnList">
       <template v-slot:isFiring="obj">
      <el-switch v-model="obj.scope.isFiring" active-color="#13ce66" inactive-color="#ff4949" />
      </template>
    </tables>
  </div>
</template>

<script>
import tables from '../../components/table.vue'
import {reactive} from 'vue'
export default {
  components:{
    tables
  },
  setup(props) {
    const tableList = reactive([{
      label:'角色名称',
      fields:'name'
    },{
      label:'角色类型',
      fields:'type'
    },{
      label:'组别',
      fields:'group'
    },{
      label:'职位',
      fields:'job'
    },{
      label:'是否开启',
      fields:'isFiring'
    }])
    const tableData = reactive([{
      name:'教师',
      type:'教职工',
      group:'中学组',
      job:'中学语文老师',
      isFiring:true
    },{
      name:'教师',
      type:'教职工',
      group:'高中组',
      job:'高中语文老师',
      isFiring:false
    },{
      name:'教务处',
      type:'教职工',
      group:'大学组',
      job:'心理辅导师',
      isFiring:false
    }
    ])
    const btnList = reactive([
      {
        label:'操作',
        width:'',
        options:[
          {
            type:'primary',
            size:'small',
            loading:false,
            icon:'el-icon-edit',
            property:'circle',
            label:''
          },
          {
            type:'danger',
            size:'small',
            loading:false,
            icon:'el-icon-delete',
            property:'circle',
            label:''
          },
          {
            type:'text',
            size:'small',
            loading:false,
            icon:'',
            property:'',
            label:'详情'
          },
        ]
      }
    ])
    return {
      tableList,
      tableData,
      btnList
    }
  }
}
</script>

<style>

</style>