import styled from 'styled-components';
import Colors from '../../styles/colors';

export const Container = styled.div`
  grid-area: main;
`;

export const ArticlesList = styled.ul`
`;

export const ArticleItem = styled.li`
  display: flex;
  margin: 10px;
  border-top: 2px solid ${Colors.grey};
  height: 80px;
`;
