import styled, { css } from 'styled-components';
import Colors from '../../styles/colors';
import {
  FaCheckCircle,
  FaFilter,
  FaPlusCircle,
  FaTrashAlt,
  FaEdit,
  FaClone,
} from 'react-icons/fa';

export const Container = styled.div`
  grid-area: main;
  margin: 0 10px;

  ul {
    list-style: none;
  }

  hr {
    border: 1px solid;
    color: ${Colors.grey};
  }

  .container-title {
    height: 175px;
    margin: 10px 20px;
    font-weight: 600;
    padding-top: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    span {
      font-size: 18px;
    }

    div {
      color: ${Colors.darkBlue};
      display: flex;
      margin-top: 15px;
    }
  }

  input[type='checkbox'] {
    opacity: 0;
  }
`;

export const ArticleSummary = styled.div.attrs(props => ({
  id: props.articleId,
}))`
  display: flex;
  height: 80px;
  margin: 0 20px;
  padding: 0 15px;
  align-items: center;
  ${props =>
    props.checked &&
    css`
      background: ${Colors.white};
      position: relative;
      box-shadow: 0 0 32px 1px #9954ff80;
      border-radius: 15px;
    `}

  .data-article {
    display: flex;
    flex-direction: column;
  }
`;

export const CheckIcon = styled(FaCheckCircle)`
  color: ${Colors.darkBlue};
  margin-right: 15px;

  ${props =>
    props.checked &&
    css`
      color: ${Colors.purple};
      width: 22px;
      height: 22px;
    `}
`;

export const FilterIcon = styled(FaFilter)`
  margin-right: 15px;
`;

export const PlusIcon = styled(FaPlusCircle)`
  position: fixed;
  bottom: 20px;
  color: ${Colors.purple};
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TrashIcon = styled(FaTrashAlt)`
  margin-right: 5px;
`;

export const EditIcon = styled(FaEdit)`
  margin-right: 5px;
`;

export const CloneIcon = styled(FaClone)`
  margin-right: 5px;
`;
