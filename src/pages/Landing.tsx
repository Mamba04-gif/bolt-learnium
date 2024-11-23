import React from 'react'
import { Button, Typography, Space, Card } from 'antd'
import { RobotOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const { Title, Text } = Typography

const Landing = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto text-center">
        <Space direction="vertical" size="large" className="mb-8">
          <Title level={1}>
            <span className="text-blue-500">
              <RobotOutlined />
            </span>{' '}
            Learnium
          </Title>
          <Title level={3}>AI-Powered Study Tool</Title>
          <Text>
            Unlock your full potential with personalized AI recommendations and
            accelerate your learning journey.
          </Text>
        </Space>

        <Card className="bg-gray-900 p-8 max-w-lg mx-auto">
          <Space direction="vertical" size="large">
            <Title level={4}>Features</Title>
            <ul className="list-disc list-inside">
              <li>Personalized AI recommendations</li>
              <li>Adaptive learning paths</li>
              <li>Progress tracking and analytics</li>
              <li>Gamification and rewards</li>
            </ul>
            <Link to="/home">
              <Button type="primary" size="large">
                Get Started
              </Button>
            </Link>
          </Space>
        </Card>
      </div>
    </div>
  )
}

export default Landing
