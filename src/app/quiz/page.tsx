"use client";

import { useState } from "react";
import { CheckCircle2, Circle, ArrowRight, ArrowLeft, BookOpen, Lightbulb, Award, Globe } from "lucide-react";
import Link from "next/link";

const questions = [
  {
    id: 1,
    question: "Qual é o principal objetivo de aprendizado?",
    options: [
      "Aprender a ler do zero",
      "Melhorar fluência de leitura",
      "Preparar para alfabetização escolar",
      "Ler em outros idiomas (inglês/espanhol)"
    ],
    icon: BookOpen
  },
  {
    id: 2,
    question: "Qual a idade da criança?",
    options: [
      "3-5 anos",
      "6-8 anos",
      "9-12 anos",
      "Acima de 12 anos"
    ],
    icon: Lightbulb
  },
  {
    id: 3,
    question: "Quanto tempo por dia pode dedicar?",
    options: [
      "10-15 minutos",
      "15-30 minutos",
      "30-60 minutos",
      "Mais de 1 hora"
    ],
    icon: BookOpen
  },
  {
    id: 4,
    question: "Qual estilo de aprendizado prefere?",
    options: [
      "Jogos e atividades lúdicas",
      "Histórias e narrativas",
      "Vídeos educativos",
      "Desafios e competições"
    ],
    icon: Award
  },
  {
    id: 5,
    question: "Qual o nível atual de leitura?",
    options: [
      "Não reconhece letras ainda",
      "Reconhece letras, mas não lê palavras",
      "Lê palavras simples",
      "Lê frases e textos curtos"
    ],
    icon: BookOpen
  },
  {
    id: 6,
    question: "Quais materiais mais interessam?",
    options: [
      "Histórias ilustradas e contos",
      "Atividades práticas e exercícios",
      "Jogos interativos",
      "Vídeos e animações"
    ],
    icon: Lightbulb
  },
  {
    id: 7,
    question: "Prefere aprender sozinho ou acompanhado?",
    options: [
      "Sozinho, no próprio ritmo",
      "Com um adulto supervisionando",
      "Em grupo com outras crianças",
      "Alternando entre sozinho e acompanhado"
    ],
    icon: Award
  },
  {
    id: 8,
    question: "Qual a principal dificuldade na leitura?",
    options: [
      "Reconhecer letras e sons",
      "Juntar sílabas para formar palavras",
      "Compreender o que lê",
      "Manter o foco e concentração"
    ],
    icon: BookOpen
  },
  {
    id: 9,
    question: "Que tipo de recompensa motiva mais?",
    options: [
      "Estrelas e badges virtuais",
      "Desbloquear novos conteúdos",
      "Ver gráficos de progresso",
      "Elogios e feedback positivo"
    ],
    icon: Award
  },
  {
    id: 10,
    question: "Qual o melhor horário para estudar?",
    options: [
      "Manhã (antes das 12h)",
      "Tarde (12h às 18h)",
      "Noite (após 18h)",
      "Varia conforme o dia"
    ],
    icon: Lightbulb
  }
];

const languages = [
  {
    id: "pt",
    name: "Português",
    flag: "🇧🇷",
    description: "Aprenda a ler em português"
  },
  {
    id: "en",
    name: "Inglês",
    flag: "🇺🇸",
    description: "Learn to read in English"
  },
  {
    id: "es",
    name: "Espanhol",
    flag: "🇪🇸",
    description: "Aprende a leer en español"
  }
];

export default function QuizPage() {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleSelectLanguage = (languageId: string) => {
    setSelectedLanguage(languageId);
  };

  const handleSelectOption = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  const handleNext = () => {
    if (selectedOption !== null) {
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = selectedOption;
      setAnswers(newAnswers);
      
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(newAnswers[currentQuestion + 1] ?? null);
      }
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(answers[currentQuestion - 1] ?? null);
    }
  };

  const handleStartQuiz = () => {
    if (selectedLanguage) {
      // Store language selection in localStorage
      localStorage.setItem('readspeak_language', selectedLanguage);
    }
  };

  // Language Selection Screen
  if (!selectedLanguage) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0A0F0D] via-[#1B4332] to-[#0A0F0D] relative overflow-hidden">
        {/* Chalk texture overlay */}
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iY2hhbGsiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxwYXRoIGQ9Ik0wLDBoNHY0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEsMWwxLDEiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjY2hhbGspIi8+PC9zdmc+')] pointer-events-none" />

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />

        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
          <div className="w-full max-w-4xl">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-sm rounded-3xl mb-6 border border-white/20">
                <Globe className="w-12 h-12 text-white" strokeWidth={1.5} />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-inter">
                Escolha o Idioma
              </h1>
              <p className="text-white/70 text-xl md:text-2xl font-inter">
                Qual idioma a criança irá aprender?
              </p>
            </div>

            {/* Language Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {languages.map((language) => (
                <button
                  key={language.id}
                  onClick={() => handleSelectLanguage(language.id)}
                  className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border-2 border-white/20 hover:bg-white/15 hover:border-white/40 transition-all duration-300 hover:scale-[1.05] group"
                >
                  <div className="text-center">
                    <div className="text-7xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {language.flag}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 font-inter">
                      {language.name}
                    </h3>
                    <p className="text-white/60 font-inter">
                      {language.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Info Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2 font-inter">
                    💡 Você poderá trocar o idioma depois
                  </h4>
                  <p className="text-white/60 font-inter">
                    Não se preocupe! Após criar sua conta, você poderá alternar entre os idiomas disponíveis a qualquer momento no dashboard.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Quiz Questions Screen
  const isLastQuestion = currentQuestion === questions.length - 1;
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const CurrentIcon = questions[currentQuestion].icon;
  const selectedLang = languages.find(l => l.id === selectedLanguage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0F0D] via-[#1B4332] to-[#0A0F0D] relative overflow-hidden">
      {/* Chalk texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iY2hhbGsiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxwYXRoIGQ9Ik0wLDBoNHY0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEsMWwxLDEiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjY2hhbGspIi8+PC9zdmc+')] pointer-events-none" />

      {/* Decorative chalk elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-4xl">
          {/* Header with Language Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 mb-4">
              <span className="text-3xl">{selectedLang?.flag}</span>
              <span className="text-white font-bold font-inter">{selectedLang?.name}</span>
              <button
                onClick={() => setSelectedLanguage(null)}
                className="text-white/60 hover:text-white text-sm font-inter underline"
              >
                Trocar
              </button>
            </div>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-4 border border-white/20">
              <CurrentIcon className="w-10 h-10 text-white" strokeWidth={1.5} />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 font-inter">
              Quiz Educacional
            </h1>
            <p className="text-white/70 text-lg md:text-xl font-inter">
              Personalize sua jornada de aprendizado
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="flex justify-between items-center mb-3">
              <span className="text-white/60 text-sm font-inter font-medium">Progresso do Quiz</span>
              <span className="text-white font-bold text-lg font-inter">
                {currentQuestion + 1} / {questions.length}
              </span>
            </div>
            <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-white to-white/80 transition-all duration-500 ease-out rounded-full shadow-lg"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between mt-2">
              {questions.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index <= currentQuestion ? 'bg-white' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl mb-6 transform transition-all duration-500">
            <div className="flex items-start gap-4 mb-8">
              <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl font-inter">{currentQuestion + 1}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white font-inter leading-tight">
                {questions[currentQuestion].question}
              </h2>
            </div>

            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleSelectOption(index)}
                  className={`w-full p-6 rounded-2xl border-2 transition-all duration-300 flex items-center gap-4 text-left group ${
                    selectedOption === index
                      ? 'bg-white text-[#1B4332] border-white shadow-2xl scale-[1.02]'
                      : 'bg-white/5 text-white border-white/20 hover:bg-white/10 hover:border-white/40 hover:scale-[1.01]'
                  }`}
                >
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    selectedOption === index ? 'bg-[#1B4332]' : 'bg-white/10 group-hover:bg-white/20'
                  }`}>
                    {selectedOption === index ? (
                      <CheckCircle2 className="w-5 h-5 text-white" strokeWidth={2.5} />
                    ) : (
                      <Circle className="w-5 h-5 text-white/60" strokeWidth={2} />
                    )}
                  </div>
                  <span className="text-lg md:text-xl font-inter font-medium flex-1">{option}</span>
                </button>
              ))}
            </div>

            {/* Helper text */}
            <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-white/60 text-sm font-inter text-center">
                💡 Selecione a opção que melhor descreve sua situação
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4">
            {currentQuestion > 0 && (
              <button
                onClick={handleBack}
                className="flex-1 bg-white/10 backdrop-blur-sm text-white font-bold text-lg py-5 rounded-2xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 border border-white/20 font-inter hover:scale-[1.02]"
              >
                <ArrowLeft className="w-5 h-5" strokeWidth={2.5} />
                Voltar
              </button>
            )}
            
            {isLastQuestion ? (
              <Link href="/cadastro" className="flex-1" onClick={handleStartQuiz}>
                <button
                  disabled={selectedOption === null}
                  className="w-full bg-white text-[#1B4332] font-bold text-lg py-5 rounded-2xl hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed font-inter hover:scale-[1.02]"
                >
                  Finalizar Quiz
                  <Award className="w-5 h-5" strokeWidth={2.5} />
                </button>
              </Link>
            ) : (
              <button
                onClick={handleNext}
                disabled={selectedOption === null}
                className="flex-1 bg-white text-[#1B4332] font-bold text-lg py-5 rounded-2xl hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed font-inter hover:scale-[1.02]"
              >
                Próxima Pergunta
                <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
              </button>
            )}
          </div>

          {/* Progress indicator text */}
          <div className="mt-6 text-center">
            <p className="text-white/50 text-sm font-inter">
              {isLastQuestion 
                ? "🎉 Última pergunta! Você está quase lá!" 
                : `Faltam ${questions.length - currentQuestion - 1} pergunta${questions.length - currentQuestion - 1 > 1 ? 's' : ''}`
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
