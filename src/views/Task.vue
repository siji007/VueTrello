<template>
    <div class="task-view">
        <div class="flex flex-col flex-grow items-start justify-between px-4">
            {{task.name}}
            <input 
              type="text" 
              class="w-full p-2 mr-2 flex-grow text-xl font-bold"
              :value="task.name"
              @change="updateTaskProperty($event, 'name')"
              @keyup.enter="updateTaskProperty($event, 'name')"
            >

            <textarea 
            class="bg-transparent px-2 border mt-2 h-64 lead leading-normal border-none" 
            :value="task.description"
            @change="updateTaskProperty($event, 'description')"
            />
        </div>
        
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
    export default{
        computed:{
            ...mapGetters(['getTask']),
            task(){
                return this.getTask(this.$route.params.id) 
            }
        },
        methods:{
            updateTaskProperty(e, key){
                this.$store.commit('UPDATE_TASK',{
                    task:this.task,
                    key,
                    value: e.target.value
                })
            }
        }
    }
</script>