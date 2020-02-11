import React, { useState, useEffect } from 'react';
import { Form, Input, Textarea } from '@rocketseat/unform';

import { Container, ModalContainer } from './style';
import api from '../../services/api';

const Modal = ({ isActive, children, title, handleClose }) => {
  async function handleAddArticle(data) {
    const response = await api.post('/articles', data);

  }

  return (
    <Container>
      <ModalContainer isActive={isActive}>
        <div className="modal-content">
          <span className="close-modal" onClick={handleClose}>
            &times;
          </span>
          <span style={{ fontSize: '18px', fontWeight: '600' }}>
            Adicionar novo artigo
          </span>

          <Form initialData={{}} onSubmit={handleAddArticle}>
            <Input type="text" placeholder="Título" name="title" />
            <Input type="text" placeholder="Descrição" name="description" />
            <Textarea type="text" placeholder="Categoria" name="category" />
            <button type="submit">Salvar artigo</button>
          </Form>
        </div>
      </ModalContainer>
    </Container>
  );
};

export default Modal;
