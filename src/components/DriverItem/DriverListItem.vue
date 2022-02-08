<template>
    <li>
        <base-card>
        <!-- <slot> -->
          <h2>{{name}}</h2>
          <p>{{team}}</p>
          <base-button @click="removeDriver(id)">Delete</base-button>
        </base-card>
    </li>
</template>
<script>
export default{
    props:['id','name',"team"],
    inject:['removeDriver']
}
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>
