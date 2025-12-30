"use client";

import { useState } from "react";
import { ArrowRight, BookOpen, Sparkles, Users, Trophy } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0F0D] via-[#1B4332] to-[#0A0F0D] relative overflow-hidden">
      {/* Chalk texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iY2hhbGsiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxwYXRoIGQ9Ik0wLDBoNHY0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEsMWwxLDEiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjY2hhbGspIi8+PC9zdmc+')] pointer-events-none" />
      
      {/* Floating chalk dust particles */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-white/20 rounded-full blur-sm animate-pulse" />
      <div className="absolute top-40 right-20 w-1 h-1 bg-white/30 rounded-full blur-sm animate-pulse delay-300" />
      <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-white/25 rounded-full blur-sm animate-pulse delay-700" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        {/* Logo/Brand */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-3 mb-4 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <BookOpen className="w-8 h-8 text-white" strokeWidth={1.5} />
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight font-inter">
              READSPEAK
            </h1>
          </div>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto font-inter">
            Transforme a leitura em uma jornada divertida e interativa
          </p>
        </div>

        {/* Main CTA Card */}
        <div className="w-full max-w-4xl mb-12">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-inter">
                Aprenda a Ler de Forma Premium
              </h2>
              <p className="text-white/80 text-lg md:text-xl font-inter">
                Método comprovado com gamificação, quizzes interativos e progresso em tempo real
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <Sparkles className="w-10 h-10 text-white mb-3" strokeWidth={1.5} />
                <h3 className="text-white font-bold text-lg mb-2 font-inter">Lições Criativas</h3>
                <p className="text-white/70 text-sm font-inter">Jogos, rimas e atividades interativas</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <Trophy className="w-10 h-10 text-white mb-3" strokeWidth={1.5} />
                <h3 className="text-white font-bold text-lg mb-2 font-inter">Gamificação</h3>
                <p className="text-white/70 text-sm font-inter">Badges e conquistas por progresso</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <Users className="w-10 h-10 text-white mb-3" strokeWidth={1.5} />
                <h3 className="text-white font-bold text-lg mb-2 font-inter">Em Dupla</h3>
                <p className="text-white/70 text-sm font-inter">Mães e filhos aprendem juntos</p>
              </div>
            </div>

            {/* CTA Button */}
            <Link href="/quiz">
              <button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="w-full bg-white text-[#1B4332] font-bold text-lg py-5 rounded-2xl hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl hover:scale-[1.02] font-inter"
              >
                Começar Jornada Gratuita
                <ArrowRight 
                  className={`w-6 h-6 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} 
                  strokeWidth={2.5}
                />
              </button>
            </Link>

            <p className="text-center text-white/60 text-sm mt-4 font-inter">
              7 dias grátis • Sem cartão de crédito
            </p>
          </div>
        </div>

        {/* Social Proof */}
        <div className="text-center text-white/50 text-sm font-inter">
          <p>Mais de 10.000 famílias já transformaram a leitura em diversão</p>
        </div>
      </div>
    </div>
  );
}
