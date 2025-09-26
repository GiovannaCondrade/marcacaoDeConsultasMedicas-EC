import AsyncStorage from '@react-native-async-storage/async-storage';

// Dados de usuário mockado

function getMockUser(role: 'admin' | 'doctor' | 'patient'): any {
  const base = {
    id: '1',
    name: 'Usuário Teste',
    email: 'teste@teste.com',
    role,
    image: 'https://via.placeholder.com/100',
  };
  if (role === 'doctor') {
    return {
      ...base,
      specialty: 'Cardiologia',
    };
  }
  return base;
}

export const mockToken = 'mocked-token-123';

// Função para mockar autenticação
export async function mockAuth(role: 'admin' | 'doctor' | 'patient' = 'admin') {
  const user = getMockUser(role);
  await AsyncStorage.setItem('@MedicalApp:user', JSON.stringify(user));
  await AsyncStorage.setItem('@MedicalApp:token', mockToken);
}