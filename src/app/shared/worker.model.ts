export interface MyWorker {
    name: string;
    surname: string;
    type: number;
    id?: number;
}
export enum MyWorkerType {
    programmer,
    designer,
    copywritter,
    manager,
}
 export let MyWorkersDatabase: MyWorker[] = [
     {id: 1, name: 'Вячеслав', surname: 'Самсонов', type: 0},
     {id: 5, name: 'Реагин', surname: 'Туров', type: 0},
     {id: 2, name: 'Илон', surname: 'Маск', type: 1},
     {id: 3, name: 'Геннадий', surname: 'Горин', type: 2},
     {id: 4, name: 'Иванов', surname: 'Рибук', type: 3},
 ];
