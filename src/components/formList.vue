<template>
<div>
 <el-row :gutter="20">
    <el-form ref="form" :model="form" :label-width="labelWidth">
      <el-col v-for="(it, i) in titleList" :key="i" :xs="24" :span="it.span">
        <div class="grid-content bg-purple">
          <el-form-item :label="it.name">
            <!-- 数字输入框 -->
            <el-input
              size="small"
              v-if="it.isNum == true"
              v-model.number="form[it.fields]"
              :placeholder="'请输入' + it.name"
              clearable
            ></el-input>
            <!-- 开关 -->
            <el-switch
            v-model="form[it.fields]"
            v-else-if="it.isSwitch == true"
            active-color="#13ce66"
            inactive-color="#ff4949">
          </el-switch>
            <!-- type == date / year  value-format == "yyyy-MM-dd / yyyy"-->
            <!-- 日期选择器 -->
            <el-date-picker
              v-else-if="it.isDate == true"
              v-model="form[it.fields]"
              :type="it.type" 
              size="small"
              :value-format="it.format"
              style="width: 100% !important"
              :placeholder="'请输入' + it.name"
              clearable
            >
            </el-date-picker>
            <!-- 联级选择器 -->
             <el-cascader
              :options="it.options"
              size="small"
              style="width: 100% !important"
              v-else-if="it.isCascader == true"
              v-model="form[it.fields]"
              :disabled="it.dis"
              :placeholder="'请输入' + it.name"
              :props="it.props"
              @change="getVal(form[it.fields])"
              clearable>
              </el-cascader>
              <el-input
                type="textarea"
                 v-else-if="it.textarea == true"
                :rows="2"
               :placeholder="'请输入' + it.name"
                v-model="form[it.fields]">
              </el-input>
              <!-- 下拉框 -->
            <el-select
            size="small"
              style="width: 100% !important"
              v-model="form[it.fields]"
              :placeholder="'请输入' + it.name"
               filterable
                :disabled="it.disabled"
              v-else-if="it.isSelect == true"
              clearable
            >
              <el-option
                v-for="item in it.selectList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <!-- 按钮组 -->
            <div style="display:flex" v-else-if="it.isBtn == true">
              <el-button :icon="item.icon" size="mini" @click="btnClick(item,index)" :type="item.type" v-for="(item,index) in it.btnList" :key="index">
                {{item.name}}
              </el-button>
            </div>
              <!-- 普通输入框 -->
            <el-input :disabled="it.disabled" clearable size="small" v-else v-model="form[it.fields]" :placeholder="'请输入' + it.name"></el-input>
          </el-form-item>
        </div>
      </el-col>
    </el-form>
  </el-row>
</div>
  
</template>

<script>
import {defineComponent,getCurrentInstance} from 'vue';
export default defineComponent({
  props: {
    // 字段
    form: {
      type: Object,
    },
    // 表单的lable和字段名
    titleList: {
      type: Array,
    },
    labelWidth: {
      type: String,
    }
  },
  setup(props) {
    const {proxy} = getCurrentInstance()
     function btnClick(item,index){
      this.$emit('btnclick',item,index)
    }
    function getVal(val){
      
    }
    return {
     btnClick,
     getVal
    }
  }
})
</script>

<style>

</style>