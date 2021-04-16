<template>
  <div>
    <h1>{{ part.title }}</h1>
    <div>
      {{ part.description }}
    </div>
  </div>
</template>

<script>
import parts from "../data/parts";
export default {
  name: "PartInfo",
  computed: {
    part() {
      return parts[this.partType].find(part => part.id === +this.id);
    }
  },
  props: {
    partType: {
      type: String,
      default: "",
      required: true
    },
    id: {
      type: [Number, String],
      default: 0,
      required: true,
      validator: function(value) {
        return Number.isInteger(Number(value));
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
