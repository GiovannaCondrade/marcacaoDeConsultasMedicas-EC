import React from 'react';
import { Button, ListItem } from 'react-native-elements';
import theme from '../styles/theme';
import { TextStyle, ViewStyle } from 'react-native';
import styled from 'styled-components/native';
import { User } from '../types/auth';

interface Props {
  user: User;
  getRoleText: (role: User['role']) => string;
  onDelete: (id: string) => void;
  onEdit?: (id: string) => void;
}

const UserCard: React.FC<Props> = ({ user, getRoleText, onDelete, onEdit }) => {
  return (
    <ListItem containerStyle={styles.card}>
      <ListItem.Content>
        <ListItem.Title style={styles.userName}>{user.name}</ListItem.Title>
        <ListItem.Subtitle style={styles.userEmail}>{user.email}</ListItem.Subtitle>

        <RoleBadge role={user.role}>
          <RoleText role={user.role}>{getRoleText(user.role)}</RoleText>
        </RoleBadge>

        <ButtonContainer>
          <Button
            title="Editar"
            onPress={() => onEdit?.(user.id)}
            containerStyle={styles.actionButton}
            buttonStyle={styles.editButton}
          />
          <Button
            title="Excluir"
            onPress={() => onDelete(user.id)}
            containerStyle={styles.actionButton}
            buttonStyle={styles.deleteButton}
          />
        </ButtonContainer>
      </ListItem.Content>
    </ListItem>
  );
};

export default UserCard;

export const styles = {
    card: {
      backgroundColor: theme.colors.background,
      borderRadius: 8,
      marginBottom: 10,
      padding: 15,
      borderWidth: 1,
      borderColor: theme.colors.border,
    } as ViewStyle,
    userName: {
      fontSize: 18,
      fontWeight: '700',
      color: theme.colors.text,
    } as TextStyle,
    userEmail: {
      fontSize: 14,
      color: theme.colors.text,
      marginTop: 4,
    } as TextStyle,
    actionButton: { marginTop: 8, width: '48%' } as ViewStyle,
    editButton: { backgroundColor: theme.colors.primary, paddingVertical: 8 },
    deleteButton: { backgroundColor: theme.colors.error, paddingVertical: 8 },
  };
  
  export const RoleBadge = styled.View<{ role: string }>`
    background-color: ${({ role }:any) =>
      role === 'admin'
        ? theme.colors.primary + '20'
        : role === 'doctor'
        ? theme.colors.success + '20'
        : theme.colors.secondary + '20'};
    padding: 4px 8px;
    border-radius: 4px;
    align-self: flex-start;
    margin-top: 8px;
  `;
  
  export const RoleText = styled.Text<{ role: string }>`
    color: ${({ role }:any) =>
      role === 'admin'
        ? theme.colors.primary
        : role === 'doctor'
        ? theme.colors.success
        : theme.colors.secondary};
    font-size: 12px;
    font-weight: 500;
  `;
  
  export const ButtonContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 8px;
  `;