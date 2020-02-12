import styled from 'styled-components';
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

    .article-summary {
      display: flex;
      height: 80px;
      margin: 0 20px;
      align-items: center;

      .data-article {
        display: flex;
        flex-direction: column;
      }
    }
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
`;

export const CheckIcon = styled(FaCheckCircle)`
  color: ${Colors.darkBlue};
  margin-right: 15px;
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
