<template>
  <b-card
    bg-variant="secondary bg-dark"
    :header="title.toUpperCase()"
    class="text-center"
    style="color: #73a6e0; font-weight: bold"
  >
    <router-link :to="{ name: routeName }">
      <i :class="'fas fa-' + iconName + ' fa-5x'"></i>
    </router-link>
  </b-card>
</template>

<script>
export default {
  name: "AdminOptionBox",
  props: ["routeName", "iconName", "title"]
};
</script>
