import React from 'react'
import { Card, Typography, Progress, Button, Avatar } from 'antd'
import { RobotOutlined } from '@ant-design/icons'

const { Title, Text } = Typography

const recommendations = [
  { title: 'Review Quantum Mechanics', difficulty: 'Hard', duration: '2h', progress: 30 },
  { title: 'Electromagnetism Exercises', difficulty: 'Medium', duration: '1h 30m', progress: 60 },
  { title: 'Thermodynamics Concepts', difficulty: 'Easy', duration: '45m', progress: 80 }
]

const AIRecommendations = () => {
  return (
    <Card className="bg-gray-900 text-white">
      <div className="flex justify-between items-center mb-4">
        <Title level={4}>AI Learning Recommendations</Title>
        <Avatar size="large" className="bg-blue-500">
          <RobotOutlined />
        </Avatar>
      </div>
      {recommendations.map(({ title, difficulty, duration, progress }, index) => (
        <div key={index} className="mb-4">
          <div className="flex justify-between items-center">
            <Text strong>{title}</Text>
            <div>
              <span className="mr-2 text-gray-400">{difficulty}</span>
              <span className="text-gray-400">{duration}</span>
            </div>
          </div>
          <Progress percent={progress} strokeColor="#1890ff" showInfo={false} />
          <Button type="primary" size="small" className="mt-2">
            Start
          </Button>
        </div>
      ))}
    </Card>
  )
}

export default AIRecommendations
