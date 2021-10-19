<template>
  <div>
    <tables @edit="edit" :form="form" @resetForm="resetForm" @addRow="addRow" titles="表格" present="60%" confirmLabel="保存" ref="tables" :tableList="tableList" :tableData="tableData" :btnList="btnList">
      <template v-slot:isOpen="obj">
        <el-switch :disabled="true" v-model="obj.scope.isOpen" active-color="#13ce66" inactive-color="#ff4949" />
      </template>
      <template v-slot:type="obj">
        <span>{{getLabels(obj.scope.type,titleList[1].selectList)}}</span>
      </template>
       <template v-slot:group="obj">
        <span>{{getLabels(obj.scope.group,titleList[2].selectList)}}</span>
      </template>
      <template v-slot:belong="obj">
        <span>{{getLabels(obj.scope.belong,titleList[3].selectList)}}</span>
      </template>
      <template v-slot:dialog>
        <div>
          <form-list labelWidth="130px" :titleList="titleList" :form="form"></form-list>
        </div>
      </template> 
    </tables>
  </div>
</template>

<script>
import tables from '../../components/table.vue'
import {reactive,ref} from 'vue'
import FormList from '../../components/formList.vue'
export default {
  inheritAttrs: true,
  components:{
    tables,
    FormList
  },
  setup(props,ctx) {
    // 表格结构
    const tableList = reactive([{
      label:'角色名称',
      fields:'name'
    },{
      label:'角色类型',
      fields:'type'
    },{
      label:'角色组别',
      fields:'group'
    },{
      label:'角色所属校区',
      fields:'belong'
    },{
      label:'是否开启',
      fields:'isOpen'
    }])
    // 表格数据
    const tableData = ref([{
      name:'教师1',
      type:'teacher',
      group:'middleSchool',
      belong:'main',
      id:1,
      isOpen:true
    },{
      name:'教师2',
      type:'teacher',
      group:'highSchool',
      belong:'other',
      id:2,
      isOpen:false
    },{
      name:'教务处',
      type:'teacher',
      group:'primarySchool',
      belong:'main',
      id:3,
      isOpen:false
    }
    ])
    // 表格定义按钮
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
            label:'',
            title:'编辑'
          },
          {
            type:'danger',
            size:'small',
            loading:false,
            icon:'el-icon-delete',
            property:'circle',
            label:'',
            title:'删除'
          }
        ]
      }
    ])
    // 表格内置的表单
    const titleList = reactive(
    [
      { fields: "name", name: "角色名称", span: 12 },
      { fields: "type",
          name: "角色类型",
          span: 12,
          isSelect: true,
          selectList: [
          { value: "teacher", label: "教职工" },
          { value: "student", label: "学生" }
        ]
      },
      { fields: "group",
          name: "角色组别",
          span: 12,
          isSelect: true,
          selectList: [
          { value: "highSchool", label: "高中组" },
          { value: "middleSchool", label: "初中组" },
          { value: "primarySchool", label: "小学组" },
        ]
      },
      { fields: "belong",
          name: "角色所属校区",
          span: 12,
          isSelect: true,
          selectList: [
          { value: "main", label: "总校区" },
          { value: "other", label: "其他校区" }
        ]
      },
      { fields: "isOpen", name: "是否开启",isSwitch:true, span: 12 },
    ])
    // 填写的表单数据初始化
    const form = ref({
      name: "",
      type: "",
      group: "",
      belong:"",
      isOpen:false,
      id:null
    })
    const currentRow = ref()
    function edit(row,index){
      form.value = row;
      currentRow.value = index
    }
    function getLabels(data,list){
      let label = ''
      list.forEach((item)=>{
        if(item.value == data) {
          label = item.label;
        }
      })
      return label
    }
    // 新增一条记录
    function addRow(){
      // 定义一个自增id
      const ID = tableData.value[tableData.value.length-1].id + 1
      form.value.id = ID
      
      
      tableData.value.push(form.value)
      
    }
    function editRow(){
      tableData.value[currentRow.value] = form.value
    }
    // 重置表格
    function resetForm(){
      form.value ={
        name: "",
        type: "",
        group: "",
        belong:"",
        id:null,
        isOpen:false,
      }
    }
    return {
      tableList,
      tableData,
      btnList,
      titleList,
      form,
      currentRow,
      getLabels,
      edit,
      editRow,
      resetForm,
      addRow
    }
  }
}
</script>
