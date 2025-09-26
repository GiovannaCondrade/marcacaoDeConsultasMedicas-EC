import { useState, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../../../contexts/AuthContext';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'doctor' | 'patient';
}

export function useUsers() {
  const { user } = useAuth();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const loadUsers = useCallback(async () => {
    try {
      const data = await AsyncStorage.getItem('@MedicalApp:users');
      if (!data) return;
      const allUsers: User[] = JSON.parse(data);
      setUsers(allUsers.filter(u => u.id !== user?.id));
    } finally {
      setLoading(false);
    }
  }, [user]);

  const deleteUser = async (id: string) => {
    const data = await AsyncStorage.getItem('@MedicalApp:users');
    if (!data) return;
    const allUsers: User[] = JSON.parse(data);
    const updated = allUsers.filter(u => u.id !== id);
    await AsyncStorage.setItem('@MedicalApp:users', JSON.stringify(updated));
    loadUsers();
  };

  const getRoleText = (role: User['role']) =>
    role === 'admin' ? 'Administrador' :
    role === 'doctor' ? 'Médico' :
    role === 'patient' ? 'Paciente' : role;

  return { users, loading, loadUsers, deleteUser, getRoleText };
}