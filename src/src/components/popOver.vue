<template>
<div>
  <el-popover :placement="direction" :width="popWidth" :trigger="triggerWay">
    <template #reference>
      <div>
        <slot name="user"></slot>
      </div>
    </template>
    <div>
      <slot name="popSlotContet"></slot>
    </div>
  </el-popover>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  props:{
    direction:{
      type:String
    },
    popWidth:{
      type:Number,
      default:function(){
        return 150 // 官方设置了min-width:150
      }
    },
    triggerWay:{
      type:String,
      default:function(){
        return 'hover'
      }
    }
  },
  setup(props,{emit}) {
    const state = reactive({
    })
    return {
      ...toRefs(state)
    }
  },
})
</script>