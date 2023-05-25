<template>
  <div class="uni-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'uniCheckboxGroup',
  provide () {
    return {
      CheckboxGroup: this
    }
  },
  props: {
    value: {
      type: Array
    }
  }
}
</script>
