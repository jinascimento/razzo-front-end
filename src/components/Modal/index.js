import React from 'react';
import { Form, Input, Textarea } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { Container, ModalContainer } from './style';
import api from '../../services/api';

const Modal = ({
  isActive,
  children,
  title,
  handleClose,
  loadArticles,
  article,
}) => {
  const schema = Yup.object().shape({
    title: Yup.string().required('Título é obrigátorio'),
    description: Yup.string().required('Descrição é obrigátoria'),
    category: Yup.string().required('Categoria é obrigátoria'),
    author: Yup.string().required('Título é obrigátorio'),
  });

  async function handleAddArticle(data, { resetForm }) {
    try {
      await api.post('/articles', data);
      toast.success('Boa, artigo adicionado com sucesso!');
      loadArticles();
      handleClose();
      resetForm();
    } catch (e) {
      toast.error('Desculpe, erro ao criar o artigo, verifique os dados!');
    }
  }

  async function handleUpdateArticle(data, { resetForm }) {
    try {
      await api.put(`/articles/${article._id}`, data);
      toast.success('Boa, artigo atualizado com sucesso!');
      loadArticles();
      handleClose();
      resetForm();
    } catch (e) {
      toast.error('Desculpe, erro ao atualizar o artigo, verifique os dados!');
    }
  }

  return (
    <Container>
      <ModalContainer isActive={isActive}>
        <div className="modal-content">
          <span className="close-modal" onClick={handleClose}>
            &times;
          </span>
          <span style={{ fontSize: '18px', fontWeight: '600' }}>
            {article ? 'Editar artigo' : 'Adicionar novo artigo'}
          </span>

          <Form
            initialData={article}
            schema={schema}
            onSubmit={
              Object.entries(article).length > 1
                ? handleUpdateArticle
                : handleAddArticle
            }
          >
            <Input type="text" placeholder="Autor" name="author" />
            <Input type="text" placeholder="Título" name="title" />
            <Input type="text" placeholder="Categoria" name="category" />
            <Textarea type="text" placeholder="Descrição" name="description" />
            <button type="submit">Salvar artigo</button>
          </Form>
        </div>
      </ModalContainer>
    </Container>
  );
};

export default Modal;
