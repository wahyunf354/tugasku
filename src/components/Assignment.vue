<template>
  <div class="assignment">
    <a :href="url" target="_blank">
      <div class="content">
        <p class="content__date">{{ date }}</p>
        <h5 class="content__course">{{ courseName }}</h5>
        <p class="content__name">{{ assignmentName }}</p>
      </div>
      <div class="arrow-icon">
        <MenuLeft decorative/>
      </div>
    </a>
  </div>
</template>

<script>
import MenuLeft from "vue-material-design-icons/MenuLeft.vue"

export default {
  components: {MenuLeft},
  props: ['assignment'],
  setup(props) {
    const assignment = props.assignment;

    const url = assignment.url;
    const assignmentName = assignment.name;
    const courseName = assignment.course.fullname;
    const date = new Date(assignment.timestart * 1000).toLocaleDateString()

    return {date, courseName, assignmentName, url}
  }
}
</script>

<style scoped>
.assignment {
  border-radius: 0.5rem;
  background: white;
  margin: 1rem auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.assignment a {
  display: flex;
  color: black;
  text-decoration: none;
}

.content {
  flex: 11;
  padding: 0.7rem;
}

.arrow-icon {
  flex:1;
}

.content__date {
  color: #adb5bd;
  font-weight: 300;
}

.content__course {
  margin-top: .5rem;
  margin-bottom: 0.3rem;
  font-size: 1.4rem;
}

.content__name {
  font-weight: 300;
}
</style>