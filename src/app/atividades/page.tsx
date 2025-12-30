"use client";

import { useState } from "react";
import { BookOpen, CheckCircle, Clock, Star, Trophy, Menu, X, Home, BookMarked, BarChart3, LogOut, Play, Lock } from "lucide-react";
import Link from "next/link";

const activities = [
  {
    id: 1,
    title: "Leitura: A Floresta Mágica",
    description: "História interativa com perguntas de compreensão",
    duration: "15 min",
    difficulty: "Iniciante",
    points: 50,
    completed: true,
    locked: false,
    category: "Leitura",
    icon: "📖"
  },
  {
    id: 2,
    title: "Quiz: Rimas em Inglês",
    description: "Teste seus conhecimentos sobre rimas",
    duration: "10 min",
    difficulty: "Iniciante",
    points: 30,
    completed: true,
    locked: false,
    category: "Quiz",
    icon: "🎯"
  },
  {
    id: 3,
    title: "Desafio: Leitura em Dupla",
    description: "Atividade para fazer com seu filho",
    duration: "20 min",
    difficulty: "Intermediário",
    points: 75,
    completed: false,
    locked: false,
    category: "Dupla",
    icon: "👥"
  },
  {
    id: 4,
    title: "Vídeo: Alfabeto Divertido",
    description: "Assista e aprenda o alfabeto",
    duration: "12 min",
    difficulty: "Iniciante",
    points: 40,
    completed: true,
    locked: false,
    category: "Vídeo",
    icon: "🎬"
  },
  {
    id: 5,
    title: "Jogo: Caça-Palavras",
    description: "Encontre palavras escondidas",
    duration: "15 min",
    difficulty: "Iniciante",
    points: 45,
    completed: false,
    locked: false,
    category: "Jogo",
    icon: "🔍"
  },
  {
    id: 6,
    title: "Música: Sons dos Animais",
    description: "Aprenda com músicas divertidas",
    duration: "8 min",
    difficulty: "Iniciante",
    points: 35,
    completed: false,
    locked: false,
    category: "Música",
    icon: "🎵"
  },
  {
    id: 7,
    title: "Leitura: Contos Clássicos",
    description: "Histórias mais longas e complexas",
    duration: "30 min",
    difficulty: "Avançado",
    points: 100,
    completed: false,
    locked: true,
    category: "Leitura",
    icon: "📚"
  },
  {
    id: 8,
    title: "Quiz: Compreensão de Texto",
    description: "Teste sua compreensão de leitura",
    duration: "15 min",
    difficulty: "Intermediário",
    points: 60,
    completed: false,
    locked: false,
    category: "Quiz",
    icon: "🧠"
  },
  {
    id: 9,
    title: "Jogo: Formando Palavras",
    description: "Monte palavras com sílabas",
    duration: "18 min",
    difficulty: "Intermediário",
    points: 55,
    completed: false,
    locked: false,
    category: "Jogo",
    icon: "🧩"
  },
  {
    id: 10,
    title: "Vídeo: Fonemas e Sons",
    description: "Aprenda os sons das letras",
    duration: "15 min",
    difficulty: "Iniciante",
    points: 40,
    completed: false,
    locked: false,
    category: "Vídeo",
    icon: "🔊"
  },
  {
    id: 11,
    title: "Música: ABC Song",
    description: "Aprenda o alfabeto cantando",
    duration: "8 min",
    difficulty: "Iniciante",
    points: 30,
    completed: false,
    locked: false,
    category: "Música",
    icon: "🎤"
  },
  {
    id: 12,
    title: "Desafio: Teatro de Leitura",
    description: "Encenem histórias juntos",
    duration: "35 min",
    difficulty: "Intermediário",
    points: 80,
    completed: false,
    locked: false,
    category: "Dupla",
    icon: "🎭"
  }
];

export default function AtividadesPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filters = [
    { id: "all", name: "Todas" },
    { id: "available", name: "Disponíveis" },
    { id: "completed", name: "Concluídas" },
    { id: "locked", name: "Bloqueadas" }
  ];

  const filteredActivities = activities.filter(activity => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "available") return !activity.locked && !activity.completed;
    if (selectedFilter === "completed") return activity.completed;
    if (selectedFilter === "locked") return activity.locked;
    return true;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Iniciante": return "from-green-400 to-emerald-500";
      case "Intermediário": return "from-blue-400 to-cyan-500";
      case "Avançado": return "from-purple-400 to-pink-500";
      default: return "from-gray-400 to-gray-500";
    }
  };

  const totalPoints = activities.filter(a => a.completed).reduce((sum, a) => sum + a.points, 0);
  const completedCount = activities.filter(a => a.completed).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0F0D] via-[#1B4332] to-[#0A0F0D] relative overflow-hidden">
      {/* Chalk texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iY2hhbGsiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxwYXRoIGQ9Ik0wLDBoNHY0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEsMWwxLDEiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjY2hhbGspIi8+PC9zdmc+')] pointer-events-none" />

      <div className="relative z-10">
        {/* Top Navigation */}
        <nav className="bg-white/5 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <BookOpen className="w-7 h-7 text-white" strokeWidth={1.5} />
                <span className="text-xl font-bold text-white font-inter">READSPEAK</span>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-6">
                <Link href="/dashboard" className="text-white/70 hover:text-white transition-colors flex items-center gap-2 font-inter">
                  <Home className="w-5 h-5" strokeWidth={2} />
                  Dashboard
                </Link>
                <Link href="/materiais" className="text-white/70 hover:text-white transition-colors flex items-center gap-2 font-inter">
                  <BookMarked className="w-5 h-5" strokeWidth={2} />
                  Materiais
                </Link>
                <Link href="/progresso" className="text-white/70 hover:text-white transition-colors flex items-center gap-2 font-inter">
                  <BarChart3 className="w-5 h-5" strokeWidth={2} />
                  Progresso
                </Link>
                <button className="text-white/70 hover:text-white transition-colors flex items-center gap-2 font-inter">
                  <LogOut className="w-5 h-5" strokeWidth={2} />
                  Sair
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden text-white"
              >
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden bg-white/5 backdrop-blur-md border-t border-white/10">
              <div className="px-4 py-4 space-y-3">
                <Link href="/dashboard" className="block text-white/70 hover:text-white transition-colors flex items-center gap-2 py-2 font-inter">
                  <Home className="w-5 h-5" strokeWidth={2} />
                  Dashboard
                </Link>
                <Link href="/materiais" className="block text-white/70 hover:text-white transition-colors flex items-center gap-2 py-2 font-inter">
                  <BookMarked className="w-5 h-5" strokeWidth={2} />
                  Materiais
                </Link>
                <Link href="/progresso" className="block text-white/70 hover:text-white transition-colors flex items-center gap-2 py-2 font-inter">
                  <BarChart3 className="w-5 h-5" strokeWidth={2} />
                  Progresso
                </Link>
                <button className="block text-white/70 hover:text-white transition-colors flex items-center gap-2 py-2 font-inter">
                  <LogOut className="w-5 h-5" strokeWidth={2} />
                  Sair
                </button>
              </div>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header with Stats */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 font-inter">
              Minhas Atividades
            </h1>
            <p className="text-white/70 text-lg mb-6 font-inter">
              Continue aprendendo com atividades interativas
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="flex items-center gap-3">
                  <Trophy className="w-8 h-8 text-amber-400" strokeWidth={2} />
                  <div>
                    <p className="text-white/60 text-xs font-inter">Pontos</p>
                    <p className="text-2xl font-bold text-white font-inter">{totalPoints}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-8 h-8 text-green-400" strokeWidth={2} />
                  <div>
                    <p className="text-white/60 text-xs font-inter">Concluídas</p>
                    <p className="text-2xl font-bold text-white font-inter">{completedCount}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="flex items-center gap-3">
                  <Star className="w-8 h-8 text-yellow-400" strokeWidth={2} />
                  <div>
                    <p className="text-white/60 text-xs font-inter">Disponíveis</p>
                    <p className="text-2xl font-bold text-white font-inter">{activities.filter(a => !a.locked && !a.completed).length}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="flex items-center gap-3">
                  <Clock className="w-8 h-8 text-blue-400" strokeWidth={2} />
                  <div>
                    <p className="text-white/60 text-xs font-inter">Total</p>
                    <p className="text-2xl font-bold text-white font-inter">{activities.length}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="mb-8 overflow-x-auto">
            <div className="flex gap-3 pb-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`px-5 py-3 rounded-xl font-medium transition-all duration-300 whitespace-nowrap font-inter ${
                    selectedFilter === filter.id
                      ? 'bg-white text-[#1B4332] shadow-xl'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                  }`}
                >
                  {filter.name}
                </button>
              ))}
            </div>
          </div>

          {/* Activities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredActivities.map((activity) => (
              <div
                key={activity.id}
                className={`bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 transition-all duration-300 ${
                  activity.locked ? 'opacity-75' : 'hover:scale-[1.02] hover:bg-white/15'
                }`}
              >
                {/* Header with Icon */}
                <div className="relative h-32 bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center">
                  <span className="text-6xl">{activity.icon}</span>
                  {activity.completed && (
                    <div className="absolute top-3 right-3 bg-green-500 rounded-full p-2">
                      <CheckCircle className="w-5 h-5 text-white" strokeWidth={2.5} />
                    </div>
                  )}
                  {activity.locked && (
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
                      <Lock className="w-10 h-10 text-white" strokeWidth={1.5} />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white bg-white/20 font-inter">
                      {activity.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 font-inter">
                    {activity.title}
                  </h3>
                  <p className="text-white/70 text-sm mb-4 font-inter">
                    {activity.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${getDifficultyColor(activity.difficulty)} font-inter`}>
                      {activity.difficulty}
                    </span>
                    <span className="text-white/60 text-sm font-inter">⏱️ {activity.duration}</span>
                  </div>

                  {/* Points */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-amber-400" strokeWidth={2} />
                      <span className="text-white font-bold font-inter">{activity.points} pontos</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link
                    href={activity.locked ? "#" : `/atividades/${activity.id}`}
                    className={`w-full py-3 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 font-inter ${
                      activity.locked
                        ? 'bg-white/10 text-white/50 cursor-not-allowed pointer-events-none'
                        : activity.completed
                        ? 'bg-white/20 text-white hover:bg-white/30 border border-white/30'
                        : 'bg-white text-[#1B4332] hover:bg-white/90 shadow-lg hover:shadow-xl'
                    }`}
                  >
                    {activity.locked ? (
                      <>
                        <Lock className="w-5 h-5" strokeWidth={2.5} />
                        Bloqueada
                      </>
                    ) : activity.completed ? (
                      <>
                        <CheckCircle className="w-5 h-5" strokeWidth={2.5} />
                        Revisar
                      </>
                    ) : (
                      <>
                        <Play className="w-5 h-5" strokeWidth={2.5} />
                        Começar
                      </>
                    )}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredActivities.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-white mb-2 font-inter">
                Nenhuma atividade encontrada
              </h3>
              <p className="text-white/70 font-inter">
                Tente selecionar outro filtro
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
