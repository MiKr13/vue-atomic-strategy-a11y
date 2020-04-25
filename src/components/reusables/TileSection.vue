<template>
  <div v-if="!mobileView" class="row between-xs tile-section">
    <div v-for="(el, index) in tileData" :key="index" class="col-xs-2">
      <square-tile :mobileView="mobileView" :icon="el.icon" :text="el.text"/>
    </div>
  </div>
  <div v-else class="row between-xs tile-section">
    <div v-for="(el, index) in tileData" :key="index" class="col-xs-12 align-normal">
      <square-tile :mobileView="mobileView" :icon="el.icon" :text="el.text"/>
    </div>
  </div>
</template>


<script>
import SquareTile from './SquareTile';
export default {
  name: 'TileSection',

  components: {
    SquareTile
  },

  props: {
    mobileView: Boolean
  },

  data: () => ({
    tileData: [
      {
        icon: 'users-cog',
        text: 'Service Name 1'
      },
      {
        icon: 'people-carry',
        text: 'Service Name 2'
      },
      {
        icon: 'folder-plus',
        text: 'Service Name 3'
      }
    ]
  })
};
</script>
