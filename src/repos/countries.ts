import api from "@/libs/api"

export async function getAll() {
  const response = await api.get<{ name: { common: string } }[]>('/all');

  return response.data;
}