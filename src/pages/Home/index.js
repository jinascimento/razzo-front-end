import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import api from '../../services/api';
import {
  Container,
  CheckIcon,
  FilterIcon,
  PlusIcon,
  TrashIcon,
  EditIcon,
  CloneIcon,
  Actions,
  ArticleSummary,
} from './style';
import Colors from '../../styles/colors';
import Modal from '../../components/Modal';
import useModal from '../../components/Modal/useModal';

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [itemModalOpen, setItemModalOpen, toggleModal] = useModal();
  const [articleCheckedCount, setArticleCheckedCount] = useState(0);
  const [checkboxes, setCheckboxes] = useState([]);

  async function loadArticles() {
    const response = await api.get('/articles');
    setArticles(response.data);
  }

  function handleCheckbox(e, s) {
    if (e.target.checked) {
      setCheckboxes(checkboxes.concat(s));
      setArticleCheckedCount(articleCheckedCount + 1);
    } else {
      let index;
      checkboxes.filter((value, i, arr) => {
        index = value._id === s._id ? i : undefined;
      });
      checkboxes.splice(index, 1);
      setCheckboxes(checkboxes);
      setArticleCheckedCount(articleCheckedCount - 1);
    }
  }

  async function handleDestroyArticles() {
    try {
      const article_ids = [];
      checkboxes.map(c => article_ids.push(c._id));
      await api.delete('/destroy_articles', { params: { id: article_ids } });
      setArticleCheckedCount(0);
      loadArticles();
      toast.success('Boa, artigos selecionados excluídos com sucesso!');
    } catch (e) {
      toast.success('Desculpe, ocorreu um erro ao excluír os artigos!');
    }
  }

  useEffect(() => {
    loadArticles();
  }, []);

  return (
    <Container>
      <div className="container-title">
        <span>Meus artigos</span>
        <div>
          <FilterIcon size={18} />
          Mais novos primeiros
        </div>
        <hr />
        <Actions>
          <div>{articleCheckedCount} artigo selecionado</div>
          <div>
            <CloneIcon size={16} />
            <EditIcon size={16} />
            <TrashIcon onClick={() => handleDestroyArticles()} size={16} />
          </div>
        </Actions>
      </div>
      <ul>
        {articles.map(article => (
          <li key={String(article._id)}>
            <input
              type="checkbox"
              id={article._id}
              onChange={e => handleCheckbox(e, article)}
            />
            <label htmlFor={article._id}>
              <ArticleSummary
                articleId={article._id}
                checked={
                  checkboxes.find(ch => ch._id === article._id) ? true : false
                }
              >
                <CheckIcon
                  size={18}
                  checked={
                    checkboxes.find(ch => ch._id === article._id) ? true : false
                  }
                />
                <div className="data-article">
                  <span style={{ color: Colors.darkBlue }}>
                    {article.author}
                  </span>
                  <strong>{article.title}</strong>
                  <span style={{ color: Colors.darkBlue }}>10/10/2018</span>
                </div>
              </ArticleSummary>
            </label>
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
