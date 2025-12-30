"use client";

import { useState } from "react";
import { BookOpen, Video, Puzzle, Music, Users, Download, Play, Lock, Menu, X, Home, BookMarked, BarChart3, LogOut } from "lucide-react";
import Link from "next/link";

const categories = [
  { id: "all", name: "Todos", icon: BookOpen },
  { id: "reading", name: "Leitura", icon: BookOpen },
  { id: "videos", name: "Vídeos", icon: Video },
  { id: "games", name: "Jogos", icon: Puzzle },
  { id: "music", name: "Música", icon: Music },
  { id: "duo", name: "Em Dupla", icon: Users }
];

const materials = [
  {
    id: 1,
    title: "Leitura e Ação: A Floresta Mágica",
    category: "reading",
    description: "História interativa onde você lê e encena as partes",
    duration: "15 min",
    level: "Iniciante",
    locked: false,
    thumbnail: "🌳"
  },
  {
    id: 2,
    title: "Rimas em Inglês: Animal Sounds",
    category: "music",
    description: "Aprenda sons de animais com rimas divertidas",
    duration: "10 min",
    level: "Iniciante",
    locked: false,
    thumbnail: "🦁"
  },
  {
    id: 3,
    title: "Desafio: Leitura em Dupla",
    category: "duo",
    description: "Mães e filhos trocam papéis na leitura",
    duration: "20 min",
    level: "Intermediário",
    locked: false,
    thumbnail: "👥"
  },
  {
    id: 4,
    title: "Vídeo: Alfabeto Animado",
    category: "videos",
    description: "Animações divertidas para cada letra",
    duration: "12 min",
    level: "Iniciante",
    locked: false,
    thumbnail: "🎬"
  },
  {
    id: 5,
    title: "Caça-Palavras: Frutas e Cores",
    category: "games",
    description: "Encontre palavras escondidas no tabuleiro",
    duration: "15 min",
    level: "Iniciante",
    locked: false,
    thumbnail: "🍎"
  },
  {
    id: 6,
    title: "Quebra-Cabeça: Formando Palavras",
    category: "games",
    description: "Monte palavras com peças de quebra-cabeça",
    duration: "18 min",
    level: "Intermediário",
    locked: false,
    thumbnail: "🧩"
  },
  {
    id: 7,
    title: "Músicas Cativantes: ABC Song",
    category: "music",
    description: "Aprenda o alfabeto cantando",
    duration: "8 min",
    level: "Iniciante",
    locked: false,
    thumbnail: "🎵"
  },
  {
    id: 8,
    title: "Leitura Avançada: Contos Clássicos",
    category: "reading",
    description: "Histórias mais longas para leitores experientes",
    duration: "30 min",
    level: "Avançado",
    locked: true,
    thumbnail: "📖"
  },
  {
    id: 9,
    title: "Espanhol Básico: Colores y Números",
    category: "music",
    description: "Cores e números em espanhol com músicas",
    duration: "12 min",
    level: "Iniciante",
    locked: true,
    thumbnail: "🇪🇸"
  },
  {
    id: 10,
    title: "Sílabas Divertidas: Jogo de Montar",
    category: "games",
    description: "Monte palavras juntando sílabas coloridas",
    duration: "20 min",
    level: "Iniciante",
    locked: false,
    thumbnail: "🔤"
  },
  {
    id: 11,
    title: "Contação de Histórias: Os Três Porquinhos",
    category: "reading",
    description: "História clássica com pausas para perguntas",
    duration: "25 min",
    level: "Iniciante",
    locked: false,
    thumbnail: "🐷"
  },
  {
    id: 12,
    title: "Vídeo: Fonemas e Sons das Letras",
    category: "videos",
    description: "Aprenda o som de cada letra com exemplos visuais",
    duration: "15 min",
    level: "Iniciante",
    locked: false,
    thumbnail: "🔊"
  },
  {
    id: 13,
    title: "Rimas e Poesias: Versinhos Infantis",
    category: "music",
    description: "Poesias curtas para memorizar e recitar",
    duration: "12 min",
    level: "Iniciante",
    locked: false,
    thumbnail: "📝"
  },
  {
    id: 14,
    title: "Jogo da Memória: Palavras e Imagens",
    category: "games",
    description: "Associe palavras escritas com suas imagens",
    duration: "15 min",
    level: "Iniciante",
    locked: false,
    thumbnail: "🎴"
  },
  {
    id: 15,
    title: "Leitura Compartilhada: Fábulas de Esopo",
    category: "duo",
    description: "Leiam juntos e discutam a moral da história",
    duration: "30 min",
    level: "Intermediário",
    locked: false,
    thumbnail: "🦊"
  },
  {
    id: 16,
    title: "Vídeo: Família de Palavras",
    category: "videos",
    description: "Descubra palavras que pertencem à mesma família",
    duration: "18 min",
    level: "Intermediário",
    locked: false,
    thumbnail: "👨‍👩‍👧‍👦"
  },
  {
    id: 17,
    title: "Cantando e Aprendendo: Dias da Semana",
    category: "music",
    description: "Música para memorizar os dias da semana",
    duration: "8 min",
    level: "Iniciante",
    locked: false,
    thumbnail: "📅"
  },
  {
    id: 18,
    title: "Bingo de Letras e Palavras",
    category: "games",
    description: "Jogo de bingo educativo para toda a família",
    duration: "25 min",
    level: "Iniciante",
    locked: false,
    thumbnail: "🎰"
  },
  {
    id: 19,
    title: "Teatro de Leitura: Chapeuzinho Vermelho",
    category: "duo",
    description: "Encenem a história com diferentes personagens",
    duration: "35 min",
    level: "Intermediário",
    locked: false,
    thumbnail: "🎭"
  },
  {
    id: 20,
    title: "Vídeo: Compreensão de Texto",
    category: "videos",
    description: "Técnicas para entender melhor o que lê",
    duration: "20 min",
    level: "Intermediário",
    locked: false,
    thumbnail: "🧠"
  },
  {
    id: 21,
    title: "Histórias Ilustradas: Crie Seu Livro",
    category: "reading",
    description: "Guia para criar histórias ilustradas em casa",
    duration: "40 min",
    level: "Intermediário",
    locked: false,
    thumbnail: "✏️"
  },
  {
    id: 22,
    title: "Canções de Ninar Educativas",
    category: "music",
    description: "Músicas suaves que ensinam enquanto acalmam",
    duration: "15 min",
    level: "Iniciante",
    locked: false,
    thumbnail: "🌙"
  },
  {
    id: 23,
    title: "Dominó de Palavras",
    category: "games",
    description: "Jogo de dominó adaptado para formar palavras",
    duration: "20 min",
    level: "Intermediário",
    locked: false,
    thumbnail: "🎲"
  },
  {
    id: 24,
    title: "Leitura Expressiva: Entonação e Emoção",
    category: "duo",
    description: "Pratique ler com diferentes emoções e tons",
    duration: "25 min",
    level: "Intermediário",
    locked: false,
    thumbnail: "🎤"
  },
  {
    id: 25,
    title: "Vídeo: Ortografia Divertida",
    category: "videos",
    description: "Dicas para escrever corretamente palavras difíceis",
    duration: "16 min",
    level: "Intermediário",
    locked: false,
    thumbnail: "✍️"
  }
];

export default function MateriaisPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredMaterials = selectedCategory === "all"
    ? materials
    : materials.filter(m => m.category === selectedCategory);

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Iniciante": return "from-green-400 to-emerald-500";
      case "Intermediário": return "from-blue-400 to-cyan-500";
      case "Avançado": return "from-purple-400 to-pink-500";
      default: return "from-gray-400 to-gray-500";
    }
  };

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
                <Link href="/materiais" className="text-white hover:text-white/80 transition-colors flex items-center gap-2 font-inter">
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
                <Link href="/materiais" className="block text-white hover:text-white/80 transition-colors flex items-center gap-2 py-2 font-inter">
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
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 font-inter">
              Materiais Didáticos
            </h1>
            <p className="text-white/70 text-lg font-inter">
              Explore lições criativas e atividades interativas
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-8 overflow-x-auto">
            <div className="flex gap-3 pb-2">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 whitespace-nowrap font-inter ${
                      selectedCategory === category.id
                        ? 'bg-white text-[#1B4332] shadow-xl'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                    }`}
                  >
                    <Icon className="w-5 h-5" strokeWidth={2} />
                    {category.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Materials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMaterials.map((material) => (
              <div
                key={material.id}
                className={`bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 ${
                  material.locked ? 'opacity-75' : 'hover:scale-[1.02]'
                }`}
              >
                {/* Thumbnail */}
                <div className="relative h-40 bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center">
                  <span className="text-6xl">{material.thumbnail}</span>
                  {material.locked && (
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
                      <Lock className="w-12 h-12 text-white" strokeWidth={1.5} />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Level Badge */}
                  <div className="mb-3">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${getLevelColor(material.level)} font-inter`}>
                      {material.level}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 font-inter">
                    {material.title}
                  </h3>
                  <p className="text-white/70 text-sm mb-4 font-inter">
                    {material.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-white/60 text-sm mb-4 font-inter">
                    <span>⏱️ {material.duration}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button
                      disabled={material.locked}
                      className={`flex-1 py-3 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 font-inter ${
                        material.locked
                          ? 'bg-white/10 text-white/50 cursor-not-allowed'
                          : 'bg-white text-[#1B4332] hover:bg-white/90 shadow-lg hover:shadow-xl'
                      }`}
                    >
                      <Play className="w-5 h-5" strokeWidth={2.5} />
                      {material.locked ? 'Bloqueado' : 'Começar'}
                    </button>
                    {!material.locked && (
                      <button className="px-4 py-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all duration-300 border border-white/20">
                        <Download className="w-5 h-5" strokeWidth={2} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
