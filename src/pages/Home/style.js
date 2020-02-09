import styled from 'styled-components';
import Colors from '../../styles/colors';
import { FaCheckCircle, FaFilter } from 'react-icons/fa';

export const Container = styled.div`
  grid-area: main;
  margin: 0 10px;
`;

export const ArticlesList = styled.ul`
`;

export const ArticleItem = styled.li`
  display: flex;
  height: 80px;
  margin: 0 20px;
  justify-content: center;
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

export const Line = styled.hr`
  border: 1px solid;
  color: ${Colors.grey};
`;

export const DataArticle = styled.div`
  display: flex;
  flex-direction: column;
  flex: 5;
`;

export const CheckIcon = styled(FaCheckCircle)`
  color: ${Colors.darkBlue};
  flex: 1;
`;

export const FilterIcon = styled(FaFilter)`
  margin-right: 15px;
`;
