<template>
  <div class="uni-form-item">
    <label :style="labelStyle" class="uni-form-item_label">{{label}}</label>
    <div class="uni-form-item_content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'uniFormItem',
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  inject: ['Form'],
  computed: {
    labelStyle () {
      return {
        width: this.Form.labelWidth
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .uni-form-item{
    margin-bottom: 25px;
    .uni-form-item_label{
      text-align: right;
      vertical-align: middle;
      float: left;
      font-size: 14px;
      color: #606266;
      line-height: 40px;
      padding: 0 12px 0 0;
      box-sizing: border-box;
    }
    .uni-form-item_content{
      line-height: 40px;
      position: relative;
      font-size: 14px;
      overflow: hidde;
    }
  }
</style>
