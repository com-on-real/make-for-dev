<template>
  <div id="app">
    <div class="content">
        <div class="title m-b-md">
            Make For Dev
        </div>
    </div>
    <h1 class="msg">{{ msg }} </h1>
  </div>
</template>


<script>
    module.exports = {
        data: function() {
            return {
                msg: 'Space'
            }
        }
    }
</script>

<style>
    #app {
        text-align: center;
        color: #ecf0f1;
        margin-top: 60px;
    }
    .msg {
        margin-top: 60px;
    }
</style>