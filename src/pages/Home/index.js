import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import {
  Container,
  ContainerTitle,
  DataArticle,
  CheckIcon,
  FilterIcon,
  PlusIcon,
  ArticleData,
} from './style';
import Colors from '../../styles/colors';
import Modal from '../../components/Modal';
import useModal from '../../components/Modal/useModal';

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [itemModalOpen, setItemModalOpen, toggleModal] = useModal();

  async function loadArticles() {
    const response = await api.get('/articles');
    setArticles(response.data);
  }

  useEffect(() => {
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
      <ul>
        {articles.map(article => (
          <li key={String(article._id)}>
            <ArticleData>
              <CheckIcon size={18} />
              <DataArticle>
                <span style={{ color: Colors.darkBlue }}>{article.author}</span>
                <strong>{article.title}</strong>
                <span style={{ color: Colors.darkBlue }}>10/10/2018</span>
              </DataArticle>
            </ArticleData>
            <hr />
          </li>
        ))}
      </ul>
      <div style={{ textAlign: 'center' }}>
        <PlusIcon size={40} onClick={toggleModal} />
      </div>
      <Modal
        isActive={itemModalOpen}
        handleClose={() => setItemModalOpen(false)}
        loadArticles={loadArticles}
      />
    </Container>
  );
}
