<template>
    <base-card>
        <base-button @click="setSelectTab('add-driver')">ADD DRIVER</base-button>
        <base-button @click="setSelectTab('driver-list')">DRIVER LIST</base-button>
    </base-card>
    <keep-alive>
        <component :is="selectedTab"></component>
    </keep-alive>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue'
import BaseCard from '../UI/BaseCard.vue'
import DriverList from './DriverList.vue'
import AddDriver from './AddDriver.vue'
export default {
    components: { BaseCard,BaseButton,DriverList,AddDriver },
    data(){
        return{
            selectedTab:"driver-list",//default show driverList
            lists:[
                {
                    id:"lewis",
                    name:"Lewis",
                    team:"Benz"
                },
                {
                    id:"valtteri",
                    name:"Valtteri",
                    team:"Benz"
                },
            ]
        };
    },
    methods:
    {
        setSelectTab(cmp)
        {
            this.selectedTab = cmp;
        },
        addDriver(name,team)
        {
            const item = 
            {
                id:new Date().toISOString(),
                name:name,
                team:team
            }
            this.lists.push(item);
            this.selectedTab = "driver-list";
        }
    },
    provide()
    {
        return {
            list:this.lists,
            addDriver:this.addDriver
        };
    }
}
</script>

<style scoped>

</style>