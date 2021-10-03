<template>
    <button>
        <slot></slot>
    </button>
</template>

<style scoped>
button
{
    border-radius: 25px;
    border: 2px solid red;
    background: red;
    color: white;
}
button:hover 
{
    background:white;
    color:red;
}
</style>