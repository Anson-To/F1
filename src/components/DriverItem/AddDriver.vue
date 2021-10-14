<template>
    <base-card>
        <h2>Add new driver</h2>
        <form @submit.prevent="submitForm">
            <div class="form-control">
                <input placeholder="name" type="text" id="name" name="name" ref="nameInput" required/>
            </div>

            <div class="form-control">
                <input placeholder="team" type="text" id="team" name="team" ref="teamInput" required/>
            </div>

            <div class="form-control">
                <base-button>Submit</base-button>
            </div>
        </form>
    </base-card>
    <!-- name team -->
</template>

<script>
import BaseButton from '../UI/BaseButton.vue'
import BaseCard from '../UI/BaseCard.vue'

export default {
  components: { BaseCard, BaseButton },
  inject:["addDriver"],
  methods:
  {
      submitForm()
      {
          this.addDriver(this.$refs.nameInput.value,this.$refs.teamInput.value);
        //   const object = {
        //       name:this.$refs.nameInput.value,
        //       team:this.$refs.teamInput.value
        //   }
        //   this.$emit("new-driver",object);
      }
  }
    
}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>