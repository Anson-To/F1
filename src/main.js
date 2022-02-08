import { createApp } from 'vue';
import App from './App.vue';
// import global components start
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseDialog from './components/UI/BaseDialog.vue';
// import global components end

const app = createApp(App);
app.component('base-card',BaseCard); 
app.component('base-button',BaseButton); 
app.component('base-dialog',BaseDialog); 
app.mount('#app');
