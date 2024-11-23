import React from 'react'
import { Card, Typography, Space } from 'antd'
import { SyncOutlined } from '@ant-design/icons'

const { Title, Text } = Typography

const recentActivities = [
  { title: 'Quantum Mechanics Quiz', score: 92, duration: '1h 30m' },
  { title: 'Relativity Theory Study', duration: '2h 15m' },
  { title: 'Calculus Practice', score: 85, duration: '45m' }
]

const RecentActivity = () => {
  return (
    <Card className="bg-gray-900 text-white">
      <div className="flex justify-between items-center mb-4">
        <Title level={4}>Recent Activity</Title>
        <SyncOutlined spin />
      </div>
      {recentActivities.map(({ title, score, duration }, index) => (
        <div key={index} className="mb-4">
          <Text strong>{title}</Text>
          <div className="flex justify-between items-center text-gray-400">
            <span>{score ? `Score: ${score}%` : `Duration: ${duration}`}</span>
            <span>{duration ? `Duration: ${duration}` : ''}</span>
          </div>
        </div>
      ))}
    </Card>
  )
}

export default RecentActivity
