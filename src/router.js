import Board from './views/Board'
import Task from './views/Task'

export const routes = [

    {
        path: '/',
        name: 'board',
        component: Board,
        children: [

            {
                path: 'task/:id',
                name: 'task',
                component: Task
            }
        ]

    }
];