<template>
    <div>{{title}}</div>
    <slot></slot>
</template>
<script>
    export default{
        props: {
            title: String
        }
    }
</script>