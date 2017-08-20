<template>
  <div>
    <div class="tab">
      <router-link to="/recommend" tag="div" class="tab-item">
        <span class="tab-link">推荐</span>
      </router-link>
      <router-link to="/singer" tag="div" class="tab-item">
        <span class="tab-link">歌手</span>
      </router-link>
      <router-link to="/rank" tag="div" class="tab-item">
        <span class="tab-link">排行</span>
      </router-link>
      <router-link to="/search" tag="div" class="tab-item">
        <span class="tab-link">搜索</span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import "~common/stylus/variable"
  .tab
    display: flex
    height: 44px
    line-height: 44px
    font-size: $font-size-medium
    .tab-item
      flex: 1
      text-align: center
      .tab-link
        padding-bottom: 5px
        color: $color-text-l
      &.router-link-active
        .tab-link
          color: $color-theme
          border-bottom: 2px solid $color-theme
</style>