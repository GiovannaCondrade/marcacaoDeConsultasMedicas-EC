import styled from 'styled-components/native';
import { ViewStyle, TextStyle } from 'react-native';
import theme from '../../styles/theme';

export const styles = {
  scrollContent: { padding: 20 } as ViewStyle,
  button: { marginBottom: 20, width: '100%' } as ViewStyle,
  buttonStyle: { backgroundColor: theme.colors.primary, paddingVertical: 12 },
  backButton: { backgroundColor: theme.colors.secondary, paddingVertical: 12 },
};

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${theme.colors.text};
  margin-bottom: 20px;
  text-align: center;
`;

export const LoadingText = styled.Text`
  text-align: center;
  color: ${theme.colors.text};
  font-size: 16px;
  margin-top: 20px;
`;

export const EmptyText = styled.Text`
  text-align: center;
  color: ${theme.colors.text};
  font-size: 16px;
  margin-top: 20px;
`;