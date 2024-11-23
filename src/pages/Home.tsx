import React from 'react'
import { Col, Row, Button, Typography, Avatar } from 'antd'
import { RobotOutlined } from '@ant-design/icons'
import StatisticsOverview from '../components/StatisticsOverview'
import RecentActivity from '../components/RecentActivity'
import AIRecommendations from '../components/AIRecommendations'

const { Title, Text } = Typography

const Home = () => {
  const userName = 'John Doe'

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto py-8">
        <div className="bg-gray-900 rounded-lg p-6 mb-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Avatar size="large" className="bg-blue-500 mr-4">
                <RobotOutlined />
              </Avatar>
              <div>
                <Title level={3}>Welcome to Learnium!</Title>
                <Text>AI-powered study tool</Text>
              </div>
            </div>
            <Button type="primary">New Study Session</Button>
          </div>
          <Text>Hi {userName}, let's continue your learning journey with personalized AI recommendations.</Text>
        </div>

        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={6}>
            <StatisticsOverview />
          </Col>
          <Col xs={24} sm={12} md={18}>
            <RecentActivity />
          </Col>
        </Row>

        <Row gutter={[16, 16]} className="mt-8">
          <Col span={24}>
            <AIRecommendations />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Home
