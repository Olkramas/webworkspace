<!--VueComponent.vue-->
<!--html, css, js 가 합쳐져서 하나의 컴포넌트를 만듦-->

<template>
    <!--주의할 점: 하나의 태그만 등록해야함. template하위에 단하나의 태그만 있어야 함. 그하위에는 얼마나 있던 상관없음-->
    <div>
        <label><input type="text" v-model="msg"></label>
        <p>{{ msg }}</p>
    </div>
</template>

<script>
    export default {    //내보내기
        name : 'VueComponent',
        //data는 메소드를 등록함. data :function(){}의 형태임
        data() {
            return {
                msg : '2024-11-15'
            }
        }
    }
</script>

<style>
    p {
        background-color: bisque;
    }
</style>