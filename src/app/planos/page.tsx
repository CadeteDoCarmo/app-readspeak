"use client";

import { useState } from "react";
import { Check, Crown, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    id: "free",
    name: "Teste Gratuito",
    price: "R$ 0",
    period: "7 dias",
    description: "Experimente todas as funcionalidades",
    features: [
      "Acesso completo por 7 dias",
      "Todas as lições e atividades",
      "Quizzes interativos",
      "Progresso em tempo real",
      "Gamificação e badges",
      "Suporte por email"
    ],
    highlighted: false,
    cta: "Começar Grátis"
  },
  {
    id: "monthly",
    name: "Plano Mensal",
    price: "R$ 49,90",
    period: "por mês",
    description: "Flexibilidade total, cancele quando quiser",
    features: [
      "Acesso ilimitado",
      "Todas as lições e atividades",
      "Quizzes interativos",
      "Progresso em tempo real",
      "Gamificação e badges",
      "Materiais para download",
      "Suporte prioritário",
      "Novos conteúdos mensais"
    ],
    highlighted: false,
    cta: "Assinar Mensal"
  },
  {
    id: "annual",
    name: "Plano Anual",
    price: "R$ 399,90",
    period: "por ano",
    description: "Melhor custo-benefício - economize 33%",
    features: [
      "Acesso ilimitado",
      "Todas as lições e atividades",
      "Quizzes interativos",
      "Progresso em tempo real",
      "Gamificação e badges",
      "Materiais para download",
      "Suporte VIP 24/7",
      "Novos conteúdos mensais",
      "Certificado de conclusão",
      "Acesso antecipado a novidades"
    ],
    highlighted: true,
    cta: "Assinar Anual",
    badge: "Mais Popular"
  }
];

export default function PlanosPage() {
  const [selectedPlan, setSelectedPlan] = useState("annual");

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0F0D] via-[#1B4332] to-[#0A0F0D] relative overflow-hidden">
      {/* Chalk texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iY2hhbGsiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxwYXRoIGQ9Ik0wLDBoNHY0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEsMWwxLDEiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjY2hhbGspIi8+PC9zdmc+')] pointer-events-none" />

      <div className="relative z-10 min-h-screen px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-inter">
            Escolha Seu Plano
          </h1>
          <p className="text-white/70 text-lg md:text-xl font-inter">
            Comece com 7 dias grátis e transforme a leitura em diversão
          </p>
        </div>

        {/* Plans Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id)}
              className={`relative cursor-pointer transition-all duration-300 ${
                plan.highlighted
                  ? 'md:-mt-4 md:mb-4'
                  : ''
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-white text-[#1B4332] px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-1 shadow-xl font-inter">
                    <Crown className="w-4 h-4" strokeWidth={2.5} />
                    {plan.badge}
                  </div>
                </div>
              )}

              <div
                className={`h-full bg-white/10 backdrop-blur-md rounded-3xl p-8 border-2 transition-all duration-300 ${
                  selectedPlan === plan.id
                    ? 'border-white shadow-2xl scale-[1.02]'
                    : 'border-white/20 hover:border-white/40'
                } ${
                  plan.highlighted
                    ? 'bg-white/15'
                    : ''
                }`}
              >
                {/* Plan Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2 font-inter">
                    {plan.name}
                  </h3>
                  <div className="mb-3">
                    <span className="text-4xl md:text-5xl font-bold text-white font-inter">
                      {plan.price}
                    </span>
                    <span className="text-white/60 text-lg font-inter">/{plan.period}</span>
                  </div>
                  <p className="text-white/70 text-sm font-inter">
                    {plan.description}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="text-white/90 text-sm font-inter">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link href="/dashboard">
                  <button
                    className={`w-full font-bold text-lg py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl font-inter ${
                      plan.highlighted
                        ? 'bg-white text-[#1B4332] hover:bg-white/90 hover:scale-[1.02]'
                        : 'bg-white/20 text-white hover:bg-white/30 border border-white/30'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <Sparkles className="w-8 h-8 text-white mx-auto mb-2" strokeWidth={1.5} />
                <p className="text-white font-bold text-lg font-inter">Garantia de 7 dias</p>
                <p className="text-white/60 text-sm font-inter">Teste sem compromisso</p>
              </div>
              <div>
                <Check className="w-8 h-8 text-white mx-auto mb-2" strokeWidth={2.5} />
                <p className="text-white font-bold text-lg font-inter">Cancele quando quiser</p>
                <p className="text-white/60 text-sm font-inter">Sem multas ou taxas</p>
              </div>
              <div>
                <Crown className="w-8 h-8 text-white mx-auto mb-2" strokeWidth={1.5} />
                <p className="text-white font-bold text-lg font-inter">Suporte dedicado</p>
                <p className="text-white/60 text-sm font-inter">Estamos aqui para ajudar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
