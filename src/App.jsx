import { useState } from 'react'

function App() {
  const [ todos, steTodos ] = useState([
    { id: 1,
      text: "Criar funcionalidade X para o sistema.",
      category: "Trabalho",
      isComplete: false,
    },
    { id: 2,
      text: "Ir para academia.",
      category: "Pessoal",
      isComplete: false,
    },
    { id: 3,
      text: "Estudar React.",
      category: "Estudos",
      isComplete: false,
    },
  ]);

  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <div className="todos-list">
        { todos.map((todo) => )}
      </div>
    </div>
  )
}

export default App
