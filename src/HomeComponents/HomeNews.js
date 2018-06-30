import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'

const newsItems = [
  {
    id: 'A',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing lorem elit mon vivamus',
    content: 'Curabitur massa turpis, ornare sed semper condimentum, ornare ut odio. Cras hendrerit lacus neque, non iaculis libero iaculis sed'
  },
  {
    id: 'B',
    title: 'In vel leo mauris cras risus',
    content: 'Ut libero dui, faucibus eget feugiat at, fermentum at erat. Vestibulum eget ante quis purus condimentum posuere in non urna.'
  },
  {
    id: 'C',
    title: 'Commodo sit amet tellus sit amet, tempus convallis lectus lorem',
    content: 'Curabitur massa turpis, ornare sed semper condimentum, ornare ut odio. Cras hendrerit lacus neque, non iaculis libero iaculis sed.'
  }
]

export const NewsItem = ({ id, title, children }) =>
  <div className="news-item">
    <h2>{title}</h2>
    <p>{children}</p>
    <Link to={`/news/${id}`} />
  </div>

export const HomeNews = () => (
  <Container>
    <h1>News</h1>
    {newsItems.map(item => 
      <NewsItem key={item.id}
        title={item.title}
        url={item.url}>{item.content}</NewsItem>
    )}
    <Link to="/news" />
  </Container>
)

const Container = styled.section`
  color: white;
  background-color: ${props => props.theme.colors.limedSpruce};
  padding: 1em;

`