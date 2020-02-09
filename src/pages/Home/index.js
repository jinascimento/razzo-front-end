import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import {
  Container,
  ArticlesList,
  ArticleItem,
  ContainerTitle,
  Line,
  DataArticle,
  CheckIcon,
  FilterIcon,
  PlusIcon,
} from './style';
import Colors from '../../styles/colors';

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
      <ContainerTitle>
        <span style={{ fontSize: 18 }}>Meus artigos</span>
        <div style={{ color: Colors.darkBlue, display: 'flex' }}>
          <FilterIcon size={18} />
          Mais novos primeiros
        </div>
      </ContainerTitle>

      <ArticlesList>
        {articles.map(article => (
          <>
            <Line />
            <ArticleItem key={article.id}>
              <CheckIcon size={18} />
              <DataArticle>
                <span style={{ color: Colors.darkBlue }}>{article.author}</span>
                <strong>{article.title}</strong>
                <span style={{ color: Colors.darkBlue }}>10/10/2018</span>
              </DataArticle>
            </ArticleItem>
          </>
        ))}
      </ArticlesList>
      <div style={{ textAlign: 'center' }}>
        <PlusIcon size={40} />
      </div>
    </Container>
  );
};

export default Home;
