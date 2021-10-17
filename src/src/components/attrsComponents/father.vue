<template>
  <div>
    <h3>vue3.x 已经废弃了$listeners, 使用$attrs监听</h3>
    <div>{{textName}}</div>
    <div>我从<span style="color:red">   {{paths}}</span>到祖父界面</div>
    <el-table :data='list'>
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
      :textName="textName"
    >
    </ChildView>
  </div>
</template>

<script>
import ChildView from './Childs.vue'
export default {
  components: { ChildView },
  data() {
    return {
      isOpen: false,
      row: {},
      paths:'',
      textName:'',
      list: [
        { name: '王丽', study: 'Java' },
        { name: '李克', study: 'Python' }
      ]
    }
  },
  methods: {
    // 传递事件
    transmitClick(row) {
      this.isOpen = true;
      this.row = row
      this.textName = row.name;
    },
    graps(val){
      this.textName = val;
    },
    getForm(form){
      this.paths = form
    },
    test1(){
      console.log('我是text1')
    }
  }
}
</script>
