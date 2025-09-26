import React, { useCallback } from 'react';
import { ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Header from '../../components/Header';
import { useUsers } from './hooks/useUsers';
import { RootStackParamList } from '../../types/navigation';
import { Container, Title, LoadingText, EmptyText, styles } from './styles';
import UserCard from '../../components/UserCard';

type Nav = NativeStackNavigationProp<RootStackParamList, 'UserManagement'>;

const UserManagementScreen: React.FC = () => {
  const nav = useNavigation<Nav>();
  const { users, loading, loadUsers, deleteUser, getRoleText } = useUsers();

  useFocusEffect(useCallback(() => { loadUsers(); }, [loadUsers]));

  return (
    <Container>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Title>Gerenciar Usuários</Title>

        <Button title="Adicionar Novo Usuário" onPress={() => {}} containerStyle={styles.button} buttonStyle={styles.buttonStyle}/>

        {loading ? (
          <LoadingText>Carregando...</LoadingText>
        ) : users.length === 0 ? (
          <EmptyText>Nenhum usuário</EmptyText>
        ) : (
          users.map(u => (
            <UserCard key={u.id} user={u} getRoleText={getRoleText} onDelete={deleteUser} />
          ))
        )}

        <Button title="Voltar" onPress={() => nav.goBack()} containerStyle={styles.button} buttonStyle={styles.backButton}/>
      </ScrollView>
    </Container>
  );
};

export default UserManagementScreen;