<template>
    <base-dialog v-if="inputInvalid" title="Invalid Input" >
      <template v-slot:default>
        <p>Empty Data has been inputted</p>
      </template>
      <template v-slot:actions>
        <base-button @click="closeError">Close Error</base-button>
      </template>
    </base-dialog>
    
    <base-card>
        <h2>Add new driver</h2>
        <form @submit.prevent="submitForm">
            <div class="form-control">
                <input placeholder="name" type="text" id="name" name="name" ref="nameInput" />
            </div>

            <div class="form-control">
                <input placeholder="team" type="text" id="team" name="team" ref="teamInput" />
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
import BaseDialog from '../UI/BaseDialog.vue';

export default {
  components: { BaseCard, BaseButton, BaseDialog },
  inject:["addDriver"],
  data(){
    return {
      inputInvalid:false
    };
  },
  methods:
  {
      submitForm()
      {
          if(this.$refs.nameInput.value.trim() === '' || this.$refs.teamInput.value.trim() === '')
          {
              this.inputInvalid = true;
              return;
              //this.addDriver(this.$refs.nameInput.value,this.$refs.teamInput.value);
          }
          else 
          {
            //   show error message
            this.addDriver(this.$refs.nameInput.value,this.$refs.teamInput.value);
           // this.inputInvalid = true;
          }
        //   const object = {
        //       name:this.$refs.nameInput.value,
        //       team:this.$refs.teamInput.value
        //   }
        //   this.$emit("new-driver",object);
      },
      closeError()
      {
        this.inputInvalid = false;
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