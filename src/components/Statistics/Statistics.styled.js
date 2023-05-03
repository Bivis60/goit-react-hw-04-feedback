import styled from 'styled-components';

export const Item = styled.li`
  color: ${p => p.theme.colors.text};
  font-size: 16px;
  font-weight: 500;
`;

export const SpanGood = styled.span`
  color: ${p => p.theme.colors.green};
  font-size: 16px;
  font-weight: 700;
`;

export const SpanNeutral = styled.span`
  color: ${p => p.theme.colors.orange};
  font-size: 16px;
  font-weight: 700;
`;

export const SpanBad = styled.span`
  color: ${p => p.theme.colors.accent};
  font-size: 16px;
  font-weight: 700;
`;

export const Total = styled.p`
  color: ${p => p.theme.colors.green};
  font-size: 16px;
  font-weight: 500;
`;

export const PositivePercentages = styled.p`
  color: ${p => p.theme.colors.green};
  font-size: 18px;
  font-weight: 700;
`;

export const Notification = styled.p`
  color: ${p => p.theme.colors.accent};
  font-size: 18px;
  font-weight: 500;
`;
