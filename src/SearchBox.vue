<template>
  <div class="search-box flex items-center space-x-2 w-full">
    <input 
      class="flex-grow h-12 bg-white-opacity-26 w-[320px] rounded-[10px] text-white placeholder-white placeholder-opacity-70 pl-4 border border-white border-opacity-30 focus:outline-none focus:border-opacity-50"
      type="text" 
      v-model="query" 
      @keyup.enter="onSearch" 
      placeholder="Search Location ..." >
    <button  class="bg-[#1396DF]  px-7 py-3 text-white rounded-[10px]  hover:bg-[#0f7ac1] transition duration-300" @click="onSearch">
      Search
    </button>
  </div>
</template>


<script>
export default {
    data(){
        return{
            query: ''
        }
    },

    methods:{
       onSearch(){
          this.$emit('search', this.query.trim());
        }
    }
}
</script>
