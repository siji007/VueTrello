<template>
    <div class="board d-block">
        <div class="flex flex-row items-start">
            <div  style=""
                class="column rounded bg-grey-white p-2 m-4 text-left shadow" 
                v-for="(column, $columnIndex) of board.columns" :key="$columnIndex"
            >
                <div class="flex items-center mb-2 font-bold">
                    {{column.name}}
                </div>
                <div class="list reset">
                    <div class="task flex flex-wrap bg-white rounded shadow mb-2 items-center"
                     v-for="(task,$taskIndex) of column.tasks" 
                     :key="$taskIndex"
                     @click="goToTask(task)"
                    >
                        <span class="w-full flex-no-shrink font-bold p-2">
                            {{task.name}}
                        </span>
                        <p 
                        v-if="task.description"
                        class="w-full flex-no-shrink mt-1 text-sm p-2">
                            {{task.description}}
                        </p>
                    </div>

                    <input type="text" class="block p-2 w-full bg-transparent"
                    placeholder="+Enter new Task"
                    @keyup.enter="createTask($event, column.tasks)"
                    />
                </div>
            </div>
        </div>

        <div 
          class="task flex items-center flex-wrap shadow mb-2 py-2 mx-5 px-2"
          v-if="isTaskOpen"
          @click.self="close"
        >
          <router-view/> 
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    computed: {
        ...mapState(['board']),
        isTaskOpen(){ 
            return this.$route.name === 'task'
        }
    },
    methods:{
        goToTask(task){
            this.$router.push({name: 'task', params: { id: task.id } })
        },
        close(){
            this.$router.push({name: 'board'})
        },
        createTask(e, tasks){ 
            this.$store.commit('CREATE_TASK',{
                tasks,
                name: e.target.value
            })
            e.target.value = ''
        }
    }
}
</script>
<style scoped>
body{
 background-color:greenyellow;   
}
.column{
    min-width: 350px;
}
</style>