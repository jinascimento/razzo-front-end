import styled from 'styled-components';
import Colors from '../../styles/colors';

export const Container = styled.div``;

export const ModalContainer = styled.div`
  display: ${props => props.isActive || 'none'};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);

  .modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border-radius: 15px;
    width: 80%;

    .close-modal {
      color: #aaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
      cursor: pointer;
    }
  }
  form {
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: column;
    margin: 30px 0;

    input,
    textarea {
      background: ${Colors.lightBlue};
      border: 0;
      border-radius: 4px;
      height: 44px;
      width: 50%;
      max-width: 735px;
      padding: 0 20px;
      color: ${Colors.black};
      margin: 0 0 10px;
      &::placeholder {
        color: ${Colors.black};
      }
    }

    button {
      background: ${Colors.purple};
      padding: 0.9em 1.9em;
      margin: 0 0.3em 0.3em 0;
      border-radius: 2em;
      box-sizing: border-box;
      text-decoration: none;
      color: ${Colors.white};
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
`;
