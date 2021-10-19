<template>
  <el-dialog
    v-model="dialogVisible"
    :title="dialogConfig.titles"
    :width="dialogConfig.present"
    :before-close="handleClose"
  >
    <slot></slot>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button @click="submit" type="primary">{{ dialogConfig.confirmLabels }}</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { defineComponent, ref, reactive, onMounted, nextTick, getCurrentInstance } from 'vue'
import { ElMessageBox } from 'element-plus'

export default defineComponent({
  inheritAttrs: true,
  props:{
    actionName:{
      type:String,
      default:function(){
        return 'add'
      }
    }
  },
  setup (props, ctx) {
    console.log(ctx,'ctx11111')
    const { proxy } = getCurrentInstance();
    const dialogVisible = ref(false)
    const dialogConfig = reactive({
      confirmLabels: '',
      titles: '',
      present: '',
    })
    onMounted(() => {
      nextTick(() => {
        const obj = {
          confirmLabels: ctx.attrs.confirmLabel,
          titles: ctx.attrs.titles,
          present: ctx.attrs.present,
        }
        Object.assign(dialogConfig, obj)
      })
    })
    const handleClose = (done) => {
      ElMessageBox.confirm('Are you sure to close this dialog?')
        .then(() => {
          done()
        })
        .catch(() => {
          // catch error
        })
    }
    function submit (){
      dialogVisible.value = false;
      if(props.actionName == 'add'){
        ctx.attrs.onAddRow();
      }else{
        ctx.attrs.onEditRow();
      }
    }
    return {
      dialogVisible,
      dialogConfig,
      handleClose,
      submit
    }
  },
})
</script>
