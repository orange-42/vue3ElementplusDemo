<template>
  <div class="formList">
    <forms @btnclick="btnClick" labelWidth="205px" :titleList="titleList" :form="form"></forms>
  </div>
</template>
<script>
import forms from '../../components/formList.vue'
import { reactive } from 'vue'
export default {
  components:{
    forms
  },
  setup() {
    const titleList = reactive(
    [
      { fields: "enterpriseName", name: "企业名称", span: 6 },
      { fields: "unitResponsible", name: "单位负责人", span: 6 },
      { fields: "contactAddress", name: "通讯地址", span: 6 },
      { fields: "fullSummary", name: "是否填写完全汇总",isSwitch:true, span: 6 },
      { fields:'number',name:'数字输入框',isNum:true,span:6},
      {
          fields: "dwxz",
          name: "单位性质",
          span: 6,
          isSelect: true,
          selectList: [
            { value: "1", label: "1 | 经营性单位" },
            { value: "2", label: "2 | 费用性单位" },
            { value: "3", label: "3 | 待出售项目公司" },
            { value: "4", label: "4 | 其他" }
          ],
        },
      {
          
          fields: "jjlx",
          name: "经济类型",
          span: 6,
          isCascader: true,
          options: [
            {
              value: "10",
              label: "国有及国有控股",
              children: [
                { value: "11", label: "国有独资" },
                { value: "6", label: "国有控股" },
                { value: "13", label: "国有实际控制" },
              ],
            },
            { value: "30", label: "其他城镇集体" },
          ],
          props: { checkStrictly: true },
        },
      {
          fields: "createTime",
          name: "创建时间",
          span: 6,
          isDate: true,
          type: "datetime",
          format: "yyyy-MM-dd HH:mm:ss",
        },
        {
          btnList: [
            { type: "primary", name: "搜索", icon: "el-icon-search" },
            { type: "default", name: "重置", icon: "el-icon-refresh" },
          ],
          span: 4,
          isBtn: true,
        },
    ])
    let form = reactive({
      contactAddress: "",
      enterpriseName: "",
      unitResponsible: "",
      dwxz:"",
      jjlx:"",
      number:"",
      createTime:"",
      fullSummary:false
    })
    function btnClick(item, index) {
      if (index == 0) {
        handleQuery();
      } else {
        resetQuery();
      }
    }
    function handleQuery () {
      alert('搜索')
    }
    function resetQuery() {
      const initialState = {
      contactAddress: "",
      enterpriseName: "",
      unitResponsible: "",
      dwxz:"",
      jjlx:"",
      number:"",
      createTime:"",
      fullSummary:false
      }
      // 若目标对象中的属性具有和源对象相同的键，则目标对象的属性会被源对象中的相同属性覆盖
      Object.assign(form, initialState); // 重置语句
      alert('重置')
    }
    return {
      titleList,
      form,
      btnClick,
      handleQuery,
      resetQuery
    }
  },
}
</script>
<style>
  .formList {
    margin-top: 30px;
  }
</style>