import styled from 'styled-components';
import Colors from '../../styles/colors';
import { FaCheckCircle, FaFilter, FaPlusCircle } from 'react-icons/fa';

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

`;

export const ArticleData = styled.div`
  display: flex;
  height: 80px;
  margin: 0 20px;
  align-items: center;
`;

export const ContainerTitle = styled.div`
  height: 85px;
  margin: 10px 20px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const DataArticle = styled.div`
  display: flex;
  flex-direction: column;
  //flex: 5;
`;

export const CheckIcon = styled(FaCheckCircle)`
  color: ${Colors.darkBlue};
  margin-right: 15px;
  //flex: 1;
`;

export const FilterIcon = styled(FaFilter)`
  margin-right: 15px;
`;

export const PlusIcon = styled(FaPlusCircle)`
  position: fixed;
  bottom: 20px;
  color: ${Colors.purple};
`;
