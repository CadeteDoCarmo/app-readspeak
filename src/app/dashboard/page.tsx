"use client";

import { useState, useEffect } from "react";
import { BookOpen, Trophy, Target, TrendingUp, Award, Clock, Menu, X, Home, BookMarked, BarChart3, LogOut, Globe, Settings } from "lucide-react";
import Link from "next/link";

const languages = [
  { id: "pt", name: "Português", flag: "🇧🇷" },
  { id: "en", name: "Inglês", flag: "🇺🇸" },
  { id: "es", name: "Espanhol", flag: "🇪🇸" }
];

export default function DashboardPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("pt");

  useEffect(() => {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem('readspeak_language');
    if (savedLanguage) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const handleChangeLanguage = (languageId: string) => {
    setCurrentLanguage(languageId);
    localStorage.setItem('readspeak_language', languageId);
    setShowLanguageModal(false);
  };

  const stats = [
    { label: "Lições Concluídas", value: "24", icon: BookOpen, color: "from-emerald-400 to-teal-500" },
    { label: "Badges Conquistadas", value: "12", icon: Trophy, color: "from-amber-400 to-orange-500" },
    { label: "Dias de Sequência", value: "7", icon: Target, color: "from-blue-400 to-cyan-500" },
    { label: "Progresso Geral", value: "68%", icon: TrendingUp, color: "from-purple-400 to-pink-500" }
  ];

  const recentActivities = [
    { title: "Lição: Vogais e Sons", time: "Há 2 horas", progress: 100 },
    { title: "Quiz: Rimas em Inglês", time: "Ontem", progress: 85 },
    { title: "Desafio: Leitura em Dupla", time: "2 dias atrás", progress: 90 },
    { title: "Vídeo: Alfabeto Divertido", time: "3 dias atrás", progress: 100 }
  ];

  const badges = [
    { name: "Primeira Lição", icon: "🎯", unlocked: true },
    { name: "7 Dias Seguidos", icon: "🔥", unlocked: true },
    { name: "Quiz Master", icon: "🧠", unlocked: true },
    { name: "Leitor Dedicado", icon: "📚", unlocked: false },
    { name: "Mestre das Rimas", icon: "🎵", unlocked: false },
    { name: "Campeão", icon: "👑", unlocked: false }
  ];

  const selectedLang = languages.find(l => l.id === currentLanguage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0F0D] via-[#1B4332] to-[#0A0F0D] relative overflow-hidden">
      {/* Chalk texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iY2hhbGsiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxwYXRoIGQ9Ik0wLDBoNHY0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEsMWwxLDEiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjY2hhbGspIi8+PC9zdmc+')] pointer-events-none" />

      {/* Language Change Modal */}
      {showLanguageModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#1B4332] rounded-3xl p-8 max-w-2xl w-full border border-white/20 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white font-inter">
                Trocar Idioma de Aprendizado
              </h2>
              <button
                onClick={() => setShowLanguageModal(false)}
                className="text-white/60 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <p className="text-white/70 mb-6 font-inter">
              Selecione o novo idioma que a criança irá aprender:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {languages.map((language) => (
                <button
                  key={language.id}
                  onClick={() => handleChangeLanguage(language.id)}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-[1.05] ${
                    currentLanguage === language.id
                      ? 'bg-white text-[#1B4332] border-white'
                      : 'bg-white/10 text-white border-white/20 hover:bg-white/15 hover:border-white/40'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-5xl mb-3">{language.flag}</div>
                    <h3 className="text-xl font-bold font-inter">{language.name}</h3>
                    {currentLanguage === language.id && (
                      <p className="text-sm mt-2 opacity-80 font-inter">Idioma atual</p>
                    )}
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-white/60 text-sm font-inter text-center">
                💡 Seu progresso será mantido ao trocar de idioma
              </p>
            </div>
          </div>
        </div>
      )}

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
                <Link href="/dashboard" className="text-white hover:text-white/80 transition-colors flex items-center gap-2 font-inter">
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
                <Link href="/dashboard" className="block text-white hover:text-white/80 transition-colors flex items-center gap-2 py-2 font-inter">
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
          {/* Welcome Section with Language Selector */}
          <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 font-inter">
                Bem-vindo de volta! 👋
              </h1>
              <p className="text-white/70 text-lg font-inter">
                Continue sua jornada de aprendizado
              </p>
            </div>
            
            {/* Language Badge with Change Button */}
            <button
              onClick={() => setShowLanguageModal(true)}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
            >
              <Globe className="w-5 h-5 text-white group-hover:rotate-12 transition-transform" strokeWidth={2} />
              <div className="text-left">
                <p className="text-white/60 text-xs font-inter">Aprendendo</p>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{selectedLang?.flag}</span>
                  <span className="text-white font-bold font-inter">{selectedLang?.name}</span>
                </div>
              </div>
              <Settings className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" strokeWidth={2} />
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <p className="text-white/70 text-sm mb-1 font-inter">{stat.label}</p>
                  <p className="text-3xl font-bold text-white font-inter">{stat.value}</p>
                </div>
              );
            })}
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Activities */}
            <div className="lg:col-span-2">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white font-inter">Atividades Recentes</h2>
                  <Clock className="w-5 h-5 text-white/50" strokeWidth={2} />
                </div>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div
                      key={index}
                      className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-white font-bold font-inter">{activity.title}</h3>
                        <span className="text-white/60 text-sm font-inter">{activity.time}</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-emerald-400 to-teal-500 h-full rounded-full transition-all duration-500"
                          style={{ width: `${activity.progress}%` }}
                        />
                      </div>
                      <p className="text-white/60 text-sm mt-2 font-inter">{activity.progress}% completo</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Badges */}
            <div className="lg:col-span-1">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white font-inter">Badges</h2>
                  <Award className="w-5 h-5 text-white/50" strokeWidth={2} />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {badges.map((badge, index) => (
                    <div
                      key={index}
                      className={`aspect-square rounded-xl flex flex-col items-center justify-center p-3 border transition-all duration-300 ${
                        badge.unlocked
                          ? 'bg-white/10 border-white/20 hover:bg-white/15'
                          : 'bg-white/5 border-white/10 opacity-50'
                      }`}
                    >
                      <span className="text-3xl mb-2">{badge.icon}</span>
                      <p className="text-white text-xs text-center font-inter">{badge.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
