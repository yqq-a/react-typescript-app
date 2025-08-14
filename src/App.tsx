import React, { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import TodoList from './components/TodoList'
import UserCard from './components/UserCard'

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'counter' | 'todo' | 'user'>('counter')

  const renderTabContent = () => {
    switch (activeTab) {
      case 'counter':
        return <Counter />
      case 'todo':
        return <TodoList />
      case 'user':
        return <UserCard />
      default:
        return <Counter />
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>🚀 React + TypeScript 示例应用</h1>
        <p>一个现代化的 React 应用，展示 TypeScript 的强大功能</p>
      </header>

      <nav className="tab-navigation">
        <button
          className={`tab-button ${activeTab === 'counter' ? 'active' : ''}`}
          onClick={() => setActiveTab('counter')}
        >
          📊 计数器
        </button>
        <button
          className={`tab-button ${activeTab === 'todo' ? 'active' : ''}`}
          onClick={() => setActiveTab('todo')}
        >
          📝 待办事项
        </button>
        <button
          className={`tab-button ${activeTab === 'user' ? 'active' : ''}`}
          onClick={() => setActiveTab('user')}
        >
          👤 用户信息
        </button>
      </nav>

      <main className="app-content">
        {renderTabContent()}
      </main>

      <footer className="app-footer">
        <p>Built with ❤️ using React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App
