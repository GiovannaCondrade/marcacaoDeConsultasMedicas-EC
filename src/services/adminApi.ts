// BUSCAR todos os médicos
async getAllDoctors(): Promise<User[]> {
  try {
    const doctors = await apiClient.get<ApiUser[]>(API_ENDPOINTS.DOCTORS);
    return doctors.map(this.mapApiUserToUser);
  } catch (error) {
    console.error('Erro ao buscar médicos:', error);
    throw new Error('Erro ao carregar médicos');
  }
},

// BUSCAR médicos por especialidade
async getDoctorsBySpecialty(specialty: string): Promise<User[]> {
  try {
    const doctors = await apiClient.get<ApiUser[]>(
      `${API_ENDPOINTS.DOCTORS}?especialidade=${encodeURIComponent(specialty)}`
    );
    return doctors.map(this.mapApiUserToUser);
  } catch (error) {
    console.error('Erro ao buscar médicos por especialidade:', error);
    throw new Error('Erro ao carregar médicos da especialidade');
  }
},

// MAPEAMENTO da API para frontend
mapApiUserToUser(apiUser: ApiUser): User {
  // ... conversão de tipos
  switch (apiUser.tipo) {
    case 'MEDICO':
      return {
        ...baseUser,
        role: 'doctor' as const,
        specialty: apiUser.especialidade || 'Especialidade não informada',
      };