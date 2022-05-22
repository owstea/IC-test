import { addTodo , findById, toggleTodo, updateTodo, removeTodo } from './todoHelpers'

test('addTodo doit ajouter une tache à la liste', () => {
    const startTodos = [
        { id: 1, name: 'one', isComplete: false },
        { id: 2, name: 'two', isComplete: false }
    ]

    const newTodo = { id: 3, name: 'three', isComplete: false }
    
    const expected = [
        { id: 3, name: 'three', isComplete: false },
        { id: 1, name: 'one', isComplete: false },
        { id: 2, name: 'two', isComplete: false }
    ]

    const result = addTodo(startTodos, newTodo)
    
    expect(result).toEqual(expected)
})

test('addTodo ne doit pas modifier le tableau existant', () => {
    const startTodos = [
        { id: 1, name: 'one', isComplete: false },
        { id: 2, name: 'two', isComplete: false }
    ]

    const newTodo = { id: 3, name: 'three', isComplete: false }
    
    const expected = [
        { id: 1, name: 'one', isComplete: false },
        { id: 2, name: 'two', isComplete: false },
        { id: 3, name: 'three', isComplete: false }
    ]
 
    const result = addTodo(startTodos, newTodo)

    expect(result).not.toBe(startTodos)
})

test('findById doit returner lIndex de lId dans le tableau', () => {
    const startTodos = [
        { id: 1, name: 'one', isComplete: false },
        { id: 2, name: 'two', isComplete: false },
        { id: 3, name: 'three', isComplete: false }
    ]

    const expected = { id: 2, name: 'two', isComplete: false }

    const result = findById(2, startTodos)

    expect(result).toEqual(expected)
})

test('toggleTodo doit passer la tache de false à vrai pour notre props', () => {
    const startTodo = { id: 1, name: 'one', isComplete: false }
    const expected = { id: 1, name: 'one', isComplete: true }

    const result = toggleTodo(startTodo)

    expect(result).toEqual(expected)
})

test('toggleTodo should not mutate todo', () => { 
    const startTodo = { id: 1, name: 'one', isComplete: false }
    const result = toggleTodo(startTodo)

    expect(result).not.toBe(startTodo)
})

test('removeTodo doit enlever notre tache via lID', () => {
    const startTodos = [
        { id: 1, name: 'one', isComplete: false },
        { id: 2, name: 'two', isComplete: false },
        {id: 3, name: 'three', isComplete: false}
    ]

    const expected = [
        { id: 1, name: 'one', isComplete: false },
        {id: 3, name: 'three', isComplete: false}
    ]

    const result = removeTodo(startTodos, 2)

    expect(result).toEqual(expected)
})

