<template>
  <div class="assignment">
    <a :href="url" target="_blank">
      <div class="content">
        <p class="content__date">{{ date }}</p>
        <h5 class="content__course">{{ courseName }}</h5>
        <p class="content__name">{{ assignmentName }}</p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
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
  border-radius: 20px;
  background: white;
  margin: 20px auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.assignment a {
  color: black;
  text-decoration: none;
}

.content {
  padding: 40px;
}

.content__course {
  margin-top: 20px;
  margin-bottom: 10px;
}
</style>