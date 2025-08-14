import React, { useState } from 'react'

interface CounterProps {
  initialValue?: number
}

const Counter: React.FC<CounterProps> = ({ initialValue = 0 }) => {
  const [count, setCount] = useState<number>(initialValue)

  const increment = (): void => {
    setCount(prev => prev + 1)
  }

  const decrement = (): void => {
    setCount(prev => prev - 1)
  }

  const reset = (): void => {
    setCount(initialValue)
  }

  return (
    <div className="counter-container">
      <h2>🔢 智能计数器</h2>
      <div className="counter-display">
        <span className="count-value">{count}</span>
      </div>
      
      <div className="counter-controls">
        <button 
          className="counter-btn decrement" 
          onClick={decrement}
          disabled={count <= 0}
        >
          ➖ 减少
        </button>
        
        <button 
          className="counter-btn reset" 
          onClick={reset}
        >
          🔄 重置
        </button>
        
        <button 
          className="counter-btn increment" 
          onClick={increment}
        >
          ➕ 增加
        </button>
      </div>

      <div className="counter-info">
        <p>当前状态: {count === 0 ? '零' : count > 0 ? '正数' : '负数'}</p>
        <p>是否为偶数: {count % 2 === 0 ? '是' : '否'}</p>
      </div>
    </div>
  )
}

export default Counter
