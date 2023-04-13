import { Section } from "../../components/StylesBase";
import { TodoListStyles } from "./TodoListStyles";
import {useEffect, useState} from "react";
import { v4 as uuid } from "uuid";

type TaskProps = {
  id: string
  title: string
}

const dataLocalStorage = JSON.parse(localStorage.getItem('Data') || '[]')
const TodoList = () => {
  const [tasks, setTasks] = useState<TaskProps[]>(dataLocalStorage)
  const [newTasks, setNewTasks] = useState('')
  const [editTasksId, setEditTasksId] = useState('')
  const [saveButton, setSaveButton] = useState(false)

  const handleAddNewTask = (e) => {
    e.preventDefault()
    !newTasks ? window.alert('Campo vazio')
      : setTasks([...tasks, { id: uuid(), title: newTasks }])
        setNewTasks('')
  }
  
  const handleEditTask = (id: string) => {
    const task = tasks.find((task) => task.id === id)
    if (task) {
      setNewTasks(task.title)
      setEditTasksId(task.id)
      setSaveButton(true)
    }
  }
  const handleSaveTask = () => {
    const task = tasks.find((tasks) => tasks.id === editTasksId)
    if (task) {
      if (!newTasks) {
        window.alert('Campo vazio')
      }else {
        task.title = newTasks
        setSaveButton(false)
      }
    }
    setTasks([...tasks])
    setNewTasks('')
  }
  
  const handleRemoveTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const handlekeyDown = (e: {key: string}) => {
    if (e.key === 'Enter') handleAddNewTask(e)
  }

  useEffect(() => {
    localStorage.setItem('Data', JSON.stringify((tasks)))
  },[tasks])

  return (
    <Section className='TodoList'>
      <div className='title'>
        Todo List
      </div>
      <div className='content'>
        <TodoListStyles>
          <p>Digite um uma informação aqui ela será salva no localStorage</p>
          <input
            type="text"
            placeholder='Digite aqui'
            value={newTasks}
            onChange={e => setNewTasks(e.target.value)}
            onKeyDown={handlekeyDown}
          />
          {saveButton ? (
            <button onClick={handleSaveTask} className='btnSave'>
              Salvar
            </button>
          ) : (
            <button onClick={handleAddNewTask} className='btnAdicionar'>
              Adicionar
            </button>
          )}
          <ul>
            {tasks.map((task, index) => (
              <li key={task.id}>
                {index + 1} - {task.title}
                <button onClick={() => handleEditTask(task.id)} className='btnEdit'>
                  Editar
                </button>
                <button onClick={() => handleRemoveTask(task.id)} className='btnDelete'>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </TodoListStyles>
      </div>
    </Section>
  )
}
export { TodoList }