import React from 'react'
import { Card, Space } from 'antd'
import {
  ClockCircleOutlined,
  BookOutlined,
  CalculatorOutlined,
  FireOutlined
} from '@ant-design/icons'

const stats = [
  { title: 'Study Hours', value: 120, icon: <ClockCircleOutlined /> },
  { title: 'Topics Completed', value: 35, icon: <BookOutlined /> },
  { title: 'Average Score', value: 88, icon: <CalculatorOutlined /> },
  { title: 'Study Streak', value: 14, icon: <FireOutlined /> }
]

const StatisticsOverview = () => {
  return (
    <Card className="bg-gray-900 text-white">
      <Space direction="horizontal" size="large">
        {stats.map(({ title, value, icon }) => (
          <div key={title} className="text-center">
            <div className="text-4xl font-bold">{value}</div>
            <div className="flex items-center justify-center text-gray-400">
              {icon}
              <span className="ml-2">{title}</span>
            </div>
          </div>
        ))}
      </Space>
    </Card>
  )
}

export default StatisticsOverview
