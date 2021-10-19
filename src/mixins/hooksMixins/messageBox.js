import { isNumber } from '@vueuse/core'
import { ElMessageBox, ElMessage } from 'element-plus'
import { nextTick } from 'vue'
export default function (warningText, list, ids) {
  ElMessageBox.confirm(warningText, '删除', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(() => {
      if (!isNumber(ids)) {
        delSelections(list, ids)
      } else {
        console.log('进入单个删除',ids,'ids')
        list.splice(ids, 1)
      }
      ElMessage({
        type: 'success',
        message: '删除成功！',
      })
      
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '已取消删除',
      })
    })
}

function delSelections (list, ids) {
  list.forEach((element, index) => {
    for (let k = 0; k <= ids.length; k++){
      if (ids[k] === element.id) {
        list.splice(index, 1)
        delSelections(list, ids)
      }
    }
  })
}