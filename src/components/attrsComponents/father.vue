<template>
  <div>
    <h3>vue3.x 已经废弃了$listeners, 使用$attrs监听</h3>
    <h4>这里是父组件provide的:{{abcs}}</h4>
    <div>{{textName}}</div>
    <div>我从<span style="color:red">   {{paths}}</span>到祖父界面</div>
    <el-table :data='list'>
      <el-table-column type="selection" width="55" />
      <el-table-column
        prop="name"
        label="姓名"
      ></el-table-column>
      <el-table-column
        prop="study"
        label="学习科目"
      ></el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button @click='transmitClick(scope.row)'>传递</el-button>
          <el-button type="danger" @click='delRow(scope.$index)'>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    
    <!-- 儿子组件 -->
    <ChildView
      :is-show="isOpen"
      :row="row"
      @graps="graps"
      @getForm="getForm"
      @test1="test1" 
      @addRow="addRow"
      :textName="textName"
    >
    </ChildView>
  </div>
</template>

<script setup>
import ChildView from './Childs.vue';
import msgBox from '../../mixins/hooksMixins/messageBox'
import { provide,ref,reactive } from 'vue';
  components: { ChildView };
  const abcs = 'mac电脑'
  provide("abc",abcs);
  const isOpen = ref(false);
  const row = ref({});
  const paths = ref('');
  const textName = ref('');
  const list = reactive([
    { name: '王丽', study: 'Java' },
    { name: '李克', study: 'Python' }
  ])
  function transmitClick(rows){
    isOpen.value = true;
    row.value = rows
    console.log(row.value.name,'row.value.namerow.value.name')
    textName.value = row.value.name;
  }
  function delRow(index) {
    console.log(index,'scopess')
    msgBox('是否要删除？',list,index)
  }
  function addRow(row) {
    console.log(row,'row')
    list.push(row)
  }
  function graps(val){
    textName.value = val;
  }
  function getForm(form){
    paths.value = form
  }
  function test1(){
    console.log('我是text1')
  }
</script>
