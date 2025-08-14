import React, { useState } from 'react'

interface User {
  id: number
  name: string
  email: string
  role: 'admin' | 'user' | 'moderator'
  avatar?: string
  joinDate: Date
  isActive: boolean
}

interface UserFormData {
  name: string
  email: string
  role: User['role']
}

const UserCard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: '张小明',
      email: 'zhang@example.com',
      role: 'admin',
      joinDate: new Date('2023-01-15'),
      isActive: true
    },
    {
      id: 2,
      name: '李小红',
      email: 'li@example.com',
      role: 'user',
      joinDate: new Date('2023-06-20'),
      isActive: false
    }
  ])

  const [formData, setFormData] = useState<UserFormData>({
    name: '',
    email: '',
    role: 'user'
  })

  const [showForm, setShowForm] = useState<boolean>(false)

  const addUser = (): void => {
    if (formData.name && formData.email) {
      const newUser: User = {
        id: Date.now(),
        ...formData,
        joinDate: new Date(),
        isActive: true
      }
      setUsers(prev => [...prev, newUser])
      setFormData({ name: '', email: '', role: 'user' })
      setShowForm(false)
    }
  }

  const toggleUserStatus = (id: number): void => {
    setUsers(prev =>
      prev.map(user =>
        user.id === id ? { ...user, isActive: !user.isActive } : user
      )
    )
  }

  const deleteUser = (id: number): void => {
    setUsers(prev => prev.filter(user => user.id !== id))
  }

  const getRoleColor = (role: User['role']): string => {
    switch (role) {
      case 'admin': return '#ff6b6b'
      case 'moderator': return '#4ecdc4'
      case 'user': return '#45b7d1'
      default: return '#999'
    }
  }

  const getRoleLabel = (role: User['role']): string => {
    switch (role) {
      case 'admin': return '管理员'
      case 'moderator': return '版主'
      case 'user': return '用户'
      default: return '未知'
    }
  }

  return (
    <div className="user-container">
      <h2>👤 用户管理系统</h2>
      
      <div className="user-stats">
        <div className="stat-card">
          <span className="stat-number">{users.length}</span>
          <span className="stat-label">总用户数</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">{users.filter(u => u.isActive).length}</span>
          <span className="stat-label">活跃用户</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">{users.filter(u => u.role === 'admin').length}</span>
          <span className="stat-label">管理员</span>
        </div>
      </div>

      <button 
        onClick={() => setShowForm(!showForm)} 
        className="add-user-btn"
      >
        {showForm ? '取消' : '➕ 添加用户'}
      </button>

      {showForm && (
        <div className="user-form">
          <input
            type="text"
            placeholder="用户名"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          />
          <input
            type="email"
            placeholder="邮箱"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          />
          <select
            value={formData.role}
            onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value as User['role'] }))}
          >
            <option value="user">用户</option>
            <option value="moderator">版主</option>
            <option value="admin">管理员</option>
          </select>
          <button onClick={addUser}>确认添加</button>
        </div>
      )}

      <div className="user-list">
        {users.map(user => (
          <div key={user.id} className={`user-card ${!user.isActive ? 'inactive' : ''}`}>
            <div className="user-avatar">
              {user.name.charAt(0)}
            </div>
            <div className="user-info">
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <span 
                className="user-role"
                style={{ backgroundColor: getRoleColor(user.role) }}
              >
                {getRoleLabel(user.role)}
              </span>
              <p className="join-date">
                加入时间: {user.joinDate.toLocaleDateString('zh-CN')}
              </p>
            </div>
            <div className="user-actions">
              <button
                onClick={() => toggleUserStatus(user.id)}
                className={`status-btn ${user.isActive ? 'active' : 'inactive'}`}
              >
                {user.isActive ? '🟢 活跃' : '🔴 停用'}
              </button>
              <button
                onClick={() => deleteUser(user.id)}
                className="delete-btn"
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserCard
