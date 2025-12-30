"use client";

import { useState, useEffect } from "react";
import { BookOpen, TrendingUp, Calendar, Award, Target, Clock, Menu, X, Home, BookMarked, BarChart3, LogOut, Globe, Settings } from "lucide-react";
import Link from "next/link";

const languages = [
  { id: "pt", name: "Português", flag: "🇧🇷" },
  { id: "en", name: "Inglês", flag: "🇺🇸" },
  { id: "es", name: "Espanhol", flag: "🇪🇸" }
];

export default function ProgressoPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("pt");

  useEffect(() => {
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

  const weeklyProgress = [
    { day: "Seg", completed: 3, total: 4 },
    { day: "Ter", completed: 4, total: 4 },
    { day: "Qua", completed: 2, total: 4 },
    { day: "Qui", completed: 4, total: 4 },
    { day: "Sex", completed: 3, total: 4 },
    { day: "Sáb", completed: 1, total: 4 },
    { day: "Dom", completed: 0, total: 4 }
  ];

  const monthlyStats = [
    { month: "Jan", progress: 45 },
    { month: "Fev", progress: 62 },
    { month: "Mar", progress: 78 },
    { month: "Abr", progress: 85 }
  ];

  const achievements = [
    { title: "Primeira Semana Completa", date: "15 Mar 2024", icon: "🎯" },
    { title: "10 Lições Concluídas", date: "20 Mar 2024", icon: "📚" },
    { title: "Quiz Perfeito", date: "25 Mar 2024", icon: "🧠" },
    { title: "7 Dias Consecutivos", date: "28 Mar 2024", icon: "🔥" }
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
                <Link href="/dashboard" className="text-white/70 hover:text-white transition-colors flex items-center gap-2 font-inter">
                  <Home className="w-5 h-5" strokeWidth={2} />
                  Dashboard
                </Link>
                <Link href="/materiais" className="text-white/70 hover:text-white transition-colors flex items-center gap-2 font-inter">
                  <BookMarked className="w-5 h-5" strokeWidth={2} />
                  Materiais
                </Link>
                <Link href="/progresso" className="text-white hover:text-white/80 transition-colors flex items-center gap-2 font-inter">
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
                <Link href="/progresso" className="block text-white hover:text-white/80 transition-colors flex items-center gap-2 py-2 font-inter">
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
          {/* Header with Language Selector */}
          <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 font-inter">
                Seu Progresso 📊
              </h1>
              <p className="text-white/70 text-lg font-inter">
                Acompanhe sua evolução no aprendizado
              </p>
            </div>
            
            {/* Language Badge */}
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

          {/* Weekly Progress */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white font-inter">Progresso Semanal</h2>
              <Calendar className="w-5 h-5 text-white/50" strokeWidth={2} />
            </div>
            <div className="grid grid-cols-7 gap-4">
              {weeklyProgress.map((day, index) => {
                const percentage = (day.completed / day.total) * 100;
                return (
                  <div key={index} className="text-center">
                    <div className="bg-white/5 rounded-xl p-4 mb-2 border border-white/10">
                      <div className="h-24 flex flex-col justify-end">
                        <div 
                          className="bg-gradient-to-t from-emerald-400 to-teal-500 rounded-t-lg transition-all duration-500"
                          style={{ height: `${percentage}%` }}
                        />
                      </div>
                    </div>
                    <p className="text-white/70 text-sm font-inter">{day.day}</p>
                    <p className="text-white text-xs font-inter">{day.completed}/{day.total}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <TrendingUp className="w-5 h-5 text-emerald-400" strokeWidth={2} />
              </div>
              <p className="text-white/70 text-sm mb-1 font-inter">Total de Lições</p>
              <p className="text-3xl font-bold text-white font-inter">24</p>
              <p className="text-emerald-400 text-sm mt-2 font-inter">+3 esta semana</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <TrendingUp className="w-5 h-5 text-amber-400" strokeWidth={2} />
              </div>
              <p className="text-white/70 text-sm mb-1 font-inter">Badges</p>
              <p className="text-3xl font-bold text-white font-inter">12</p>
              <p className="text-amber-400 text-sm mt-2 font-inter">+2 este mês</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <TrendingUp className="w-5 h-5 text-blue-400" strokeWidth={2} />
              </div>
              <p className="text-white/70 text-sm mb-1 font-inter">Sequência</p>
              <p className="text-3xl font-bold text-white font-inter">7 dias</p>
              <p className="text-blue-400 text-sm mt-2 font-inter">Recorde pessoal!</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <TrendingUp className="w-5 h-5 text-purple-400" strokeWidth={2} />
              </div>
              <p className="text-white/70 text-sm mb-1 font-inter">Tempo Total</p>
              <p className="text-3xl font-bold text-white font-inter">12h</p>
              <p className="text-purple-400 text-sm mt-2 font-inter">Este mês</p>
            </div>
          </div>

          {/* Monthly Progress Chart */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 font-inter">Evolução Mensal</h2>
            <div className="flex items-end justify-between gap-4 h-64">
              {monthlyStats.map((stat, index) => (
                <div key={index} className="flex-1 flex flex-col items-center justify-end h-full">
                  <div className="w-full bg-white/5 rounded-t-xl relative overflow-hidden" style={{ height: `${stat.progress}%` }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-400 to-teal-500" />
                    <div className="absolute top-2 left-0 right-0 text-center">
                      <span className="text-white font-bold text-lg font-inter">{stat.progress}%</span>
                    </div>
                  </div>
                  <p className="text-white/70 mt-4 font-inter">{stat.month}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Achievements */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6 font-inter">Conquistas Recentes</h2>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl">
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold font-inter">{achievement.title}</h3>
                    <p className="text-white/60 text-sm font-inter">{achievement.date}</p>
                  </div>
                  <Award className="w-5 h-5 text-amber-400" strokeWidth={2} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
