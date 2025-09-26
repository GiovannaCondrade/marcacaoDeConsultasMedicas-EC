
import theme from "../../styles/theme";
import styled from 'styled-components/native';
import {  ListItem} from 'react-native-elements';

interface StyledProps {
  status: string;
}

// Cores do tema dark
const darkTheme = {
  background: '#1A1A1A',
  cardBackground: '#2D2D2D',
  text: '#FFFFFF',
  textSecondary: '#B3B3B3',
  primary: '#6200EE',
  border: '#404040',
};


const getStatusColor = (status: string) => {
  switch (status) {
    case 'confirmed':
      return theme.colors.success;
    case 'cancelled':
      return theme.colors.error;
    default:
      return theme.colors.warning;
  }
};

export const styles = {
  scrollContent: {
    padding: 20,
  },
  button: {
    marginBottom: 20,
    width: '100%',
  },
  buttonStyle: {
    backgroundColor: darkTheme.primary,
    paddingVertical: 12,
    borderRadius: 8,
    elevation: 3,
    shadowColor: darkTheme.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  logoutButton: {
    backgroundColor: theme.colors.error,
    paddingVertical: 12,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: '700',
    color: darkTheme.text,
  },
  specialty: {
    fontSize: 14,
    color: darkTheme.textSecondary,
    marginTop: 4,
  },
  dateTime: {
    fontSize: 14,
    color: darkTheme.textSecondary,
    marginTop: 4,
  },
  patientName: {
    fontSize: 16,
    fontWeight: '700',
    color: darkTheme.text,
  },
};

export const Container = styled.View`
  flex: 1;
  background-color: ${darkTheme.background};
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${darkTheme.text};
  margin-bottom: 20px;
  text-align: center;
`;

export const AppointmentCard = styled(ListItem)`
  background-color: ${darkTheme.cardBackground};
  border-radius: 12px;
  margin-bottom: 10px;
  padding: 15px;
  border-width: 1px;
  border-color: ${darkTheme.border};
  elevation: 2;
  shadow-color: #000;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  shadow-offset: 0px 2px;
`;

export const LoadingText = styled.Text`
  text-align: center;
  color: ${darkTheme.textSecondary};
  font-size: 16px;
  margin-top: 20px;
`;

export const EmptyText = styled.Text`
  text-align: center;
  color: ${darkTheme.textSecondary};
  font-size: 16px;
  margin-top: 20px;
`;

export const StatusBadge = styled.View<StyledProps>`
  background-color: ${(props: StyledProps) => getStatusColor(props.status) + '20'};
  padding: 4px 8px;
  border-radius: 4px;
  align-self: flex-start;
  margin-top: 8px;
`;

export const StatusText = styled.Text<StyledProps>`
  color: ${(props: StyledProps) => getStatusColor(props.status)};
  font-size: 12px;
  font-weight: 500;
`;