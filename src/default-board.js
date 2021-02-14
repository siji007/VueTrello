// import { uuid } from './utils'
import { uuid } from 'vue-uuid'
export default {
    name: 'workshop',
    columns: [

        {
            name: 'todo',
            tasks: [

                {
                    description: '',
                    name: 'first task',
                    id: uuid.v1(),
                    userAssigned: null
                },
                {
                    description: '',
                    name: 'second task',
                    id: uuid.v1(),
                    userAssigned: null
                },
                {
                    description: '',
                    name: 'and third',
                    id: uuid.v1(),
                    userAssigned: null
                }
            ]
        },
        {
            name: 'todo',
            tasks: [

                {
                    description: '',
                    name: 'Say Hi to Dan',
                    id: uuid.v1(),
                    userAssigned: null
                },
                {
                    description: 'Random things to get',
                    name: 'Pack My Stuff',
                    id: uuid.v1(),
                    userAssigned: null
                }

            ]
        },
        {
            name: 'in progress',
            tasks: [

                {
                    description: '',
                    name: 'first task',
                    id: uuid.v1(),
                    userAssigned: null
                },
                {
                    description: '',
                    name: 'Something different',
                    id: uuid.v1(),
                    userAssigned: null
                }
            ]
        },
        {
            name: 'done',
            tasks: [

                {
                    description: '',
                    name: 'first task',
                    id: uuid.v1(),
                    userAssigned: null
                },

            ]
        }
    ]
}