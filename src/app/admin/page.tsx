"use client";

import { useState } from "react";
import { User, Mail, Calendar, Shield, Search, RefreshCw } from "lucide-react";

interface UserData {
  id: string;
  email: string;
  created_at: string;
  last_sign_in_at: string | null;
  role: string;
}

// Dados de exemplo para demonstração
const mockUsers: UserData[] = [
  {
    id: "1",
    email: "admin@readspeak.com",
    created_at: "2024-01-15T10:30:00Z",
    last_sign_in_at: "2024-01-20T14:22:00Z",
    role: "admin",
  },
  {
    id: "2",
    email: "usuario1@example.com",
    created_at: "2024-01-16T09:15:00Z",
    last_sign_in_at: "2024-01-19T16:45:00Z",
    role: "user",
  },
  {
    id: "3",
    email: "usuario2@example.com",
    created_at: "2024-01-17T11:20:00Z",
    last_sign_in_at: "2024-01-20T08:30:00Z",
    role: "user",
  },
  {
    id: "4",
    email: "usuario3@example.com",
    created_at: "2024-01-18T14:45:00Z",
    last_sign_in_at: null,
    role: "user",
  },
];

export default function AdminPage() {
  const [users] = useState<UserData[]>(mockUsers);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter((user) =>
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "Nunca";
    return new Date(dateString).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-[#0A0F0D] text-white p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Shield className="w-8 h-8 text-emerald-500" />
            <h1 className="text-3xl sm:text-4xl font-bold">Painel Admin</h1>
          </div>
          <p className="text-gray-400">Gerencie todos os usuários cadastrados no READSPEAK</p>
        </div>

        {/* Search */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar por email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-[#1a2520] border border-emerald-900/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>
          <button
            onClick={() => window.location.reload()}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors font-medium"
          >
            <RefreshCw className="w-5 h-5" />
            Atualizar
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-[#1a2520] border border-emerald-900/30 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <User className="w-6 h-6 text-emerald-500" />
              <h3 className="text-gray-400 text-sm">Total de Usuários</h3>
            </div>
            <p className="text-3xl font-bold">{users.length}</p>
          </div>
          <div className="bg-[#1a2520] border border-emerald-900/30 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <Search className="w-6 h-6 text-blue-500" />
              <h3 className="text-gray-400 text-sm">Resultados da Busca</h3>
            </div>
            <p className="text-3xl font-bold">{filteredUsers.length}</p>
          </div>
          <div className="bg-[#1a2520] border border-emerald-900/30 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <Shield className="w-6 h-6 text-purple-500" />
              <h3 className="text-gray-400 text-sm">Administradores</h3>
            </div>
            <p className="text-3xl font-bold">
              {users.filter((u) => u.role === "admin").length}
            </p>
          </div>
        </div>

        {/* Users Table */}
        {filteredUsers.length === 0 ? (
          <div className="text-center py-20 bg-[#1a2520] border border-emerald-900/30 rounded-xl">
            <User className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400 text-lg">
              {searchTerm ? "Nenhum usuário encontrado" : "Nenhum usuário cadastrado"}
            </p>
          </div>
        ) : (
          <div className="bg-[#1a2520] border border-emerald-900/30 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#0f1612] border-b border-emerald-900/30">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Email
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Data de Cadastro
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Último Acesso
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4" />
                        Função
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-emerald-900/20">
                  {filteredUsers.map((user) => (
                    <tr
                      key={user.id}
                      className="hover:bg-[#0f1612] transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                            <User className="w-5 h-5" />
                          </div>
                          <span className="font-medium">{user.email}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-400">
                        {formatDate(user.created_at)}
                      </td>
                      <td className="px-6 py-4 text-gray-400">
                        {formatDate(user.last_sign_in_at)}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                            user.role === "admin"
                              ? "bg-purple-900/30 text-purple-400 border border-purple-500/30"
                              : "bg-emerald-900/30 text-emerald-400 border border-emerald-500/30"
                          }`}
                        >
                          {user.role === "admin" ? "Admin" : "Usuário"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
