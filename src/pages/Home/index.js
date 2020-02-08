import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import { Container, ArticlesList, ArticleItem } from './style';

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function loadArticles() {
      const response = await api.get('/articles');
      setArticles(response.data);
    }

    loadArticles();
  }, []);

  return (
    <Container>
      <ArticlesList>
        {articles.map(article => (
          <ArticleItem key={article.id}>{article.title}</ArticleItem>
        ))}
      </ArticlesList>
    </Container>
  );
};

export default Home;
