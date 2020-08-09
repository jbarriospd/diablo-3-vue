<template>
  <ul class="list-unstyled">
    <!-- Itera -->
    <li v-for="attr in attributes" :key="attr.name" class="mb-1">
      <div class="d-flex justify-content-between">
        <!-- Nombre atributo -->
        <div class="pl-2 text-capitalize name-text">{{ attr.name }}</div>
        <!-- Valor formateado -->
        <div class="px-2 text-monospace">{{ attr.val | formatNumber }}</div>
      </div>
    </li>
  </ul>
</template>

<script>
import { formatNumber } from '@/filters/numeral'

export default {
  name: 'AttributeList',
  filters: { formatNumber },
  props: {
    attributes: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="stylus">
ul
  li
    .name-text
      color #efb45d
      font-weight 600
</style>
