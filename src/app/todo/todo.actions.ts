import { Action } from '@ngrx/store';

export const AGREGAR_TODO = '[TODO] Agregar todo';
export const TOGGLE_TODO = '[TODO] Toggle todo';
export const EDITAR_TODO = '[TODO] Editar todo';
export const ELIMINAR_TODO = '[TODO] Eliminar todo';
export const SELECT_ALL_TODO = '[TODO] Seleccionar all todo';
export const CLEAR_COMPLETED_TODO = '[TODO] Limpiar completados';



export class AgregarTodoAction implements Action {
    readonly type = AGREGAR_TODO;
    constructor(public texto: string) {
    }
}

export class ToggleTodoAction implements Action {
    readonly type = TOGGLE_TODO;
    constructor(public id: number) {
    }
}

export class EditarTodoAction implements Action {
    readonly type = EDITAR_TODO;
    constructor(public id: number, public texto: string) {
    }
}

export class EliminarTodoAction implements Action {
    readonly type = ELIMINAR_TODO;
    constructor(public id: number) {
    }
}

export class SeleccionarTodoAction implements Action {
    readonly type = SELECT_ALL_TODO;
    constructor(public completado: boolean) {
    }
}

export class ClearCompletedTodoAction implements Action {
    readonly type = CLEAR_COMPLETED_TODO;
    constructor() {
    }
}


export type Acciones = AgregarTodoAction | ToggleTodoAction | EditarTodoAction
    | EliminarTodoAction | SeleccionarTodoAction | ClearCompletedTodoAction;
