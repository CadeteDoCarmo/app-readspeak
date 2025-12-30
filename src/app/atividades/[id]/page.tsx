"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { BookOpen, CheckCircle, ArrowLeft, ArrowRight, Home, Trophy, Star } from "lucide-react";
import Link from "next/link";

// Dados das atividades (mesmo do arquivo anterior)
const activitiesData: Record<string, any> = {
  "1": {
    id: 1,
    title: "Leitura e Ação: A Floresta Mágica",
    description: "História interativa com perguntas de compreensão",
    category: "Leitura",
    points: 50,
    story: {
      title: "A Floresta Mágica",
      content: [
        "Era uma vez uma floresta encantada onde os animais falavam e as árvores cantavam. No coração dessa floresta vivia uma coelhinha chamada Luna, que adorava explorar novos lugares.",
        "Um dia, Luna encontrou um caminho brilhante que nunca tinha visto antes. Curiosa, ela decidiu seguir o caminho e descobriu uma clareira mágica cheia de flores coloridas que brilhavam como estrelas.",
        "No centro da clareira, havia uma árvore muito antiga com um livro dourado em seus galhos. Luna subiu na árvore e abriu o livro. Para sua surpresa, as páginas começaram a brilhar e contar histórias maravilhosas!",
        "A árvore disse: 'Luna, você é muito corajosa! Este livro mágico é seu presente por ser curiosa e aventureira. Use-o para aprender e ensinar outros sobre a magia da leitura.'",
        "Luna ficou muito feliz e prometeu compartilhar as histórias do livro mágico com todos os seus amigos da floresta. E assim, a floresta se tornou ainda mais mágica, cheia de histórias e aprendizado."
      ]
    },
    questions: [
      {
        id: 1,
        question: "Qual é o nome da coelhinha da história?",
        options: ["Lara", "Luna", "Lila", "Lena"],
        correct: 1
      },
      {
        id: 2,
        question: "O que Luna encontrou na clareira mágica?",
        options: ["Uma casa", "Um lago", "Uma árvore com um livro dourado", "Um tesouro"],
        correct: 2
      },
      {
        id: 3,
        question: "Por que a árvore deu o livro mágico para Luna?",
        options: ["Porque ela era forte", "Porque ela era corajosa e curiosa", "Porque ela era rápida", "Porque ela era alta"],
        correct: 1
      },
      {
        id: 4,
        question: "O que Luna prometeu fazer com o livro mágico?",
        options: ["Escondê-lo", "Vendê-lo", "Compartilhar as histórias com seus amigos", "Guardá-lo para sempre"],
        correct: 2
      }
    ]
  },
  "2": {
    id: 2,
    title: "Quiz: Rimas em Inglês",
    description: "Teste seus conhecimentos sobre rimas",
    category: "Quiz",
    points: 30,
    questions: [
      {
        id: 1,
        question: "Qual palavra rima com 'cat'?",
        options: ["dog", "hat", "bird", "fish"],
        correct: 1
      },
      {
        id: 2,
        question: "Qual palavra rima com 'sun'?",
        options: ["moon", "run", "star", "sky"],
        correct: 1
      },
      {
        id: 3,
        question: "Qual palavra rima com 'tree'?",
        options: ["bee", "bird", "leaf", "branch"],
        correct: 0
      },
      {
        id: 4,
        question: "Qual palavra rima com 'book'?",
        options: ["read", "look", "page", "story"],
        correct: 1
      },
      {
        id: 5,
        question: "Qual palavra rima com 'play'?",
        options: ["toy", "day", "fun", "game"],
        correct: 1
      }
    ]
  },
  "5": {
    id: 5,
    title: "Jogo: Caça-Palavras",
    description: "Encontre palavras escondidas",
    category: "Jogo",
    points: 45,
    words: ["LIVRO", "LER", "HISTORIA", "APRENDER", "ESCOLA"],
    grid: [
      ["L", "I", "V", "R", "O", "X", "Y"],
      ["E", "S", "C", "O", "L", "A", "Z"],
      ["R", "T", "U", "V", "W", "X", "Y"],
      ["H", "I", "S", "T", "O", "R", "I", "A"],
      ["A", "P", "R", "E", "N", "D", "E", "R"],
      ["M", "N", "O", "P", "Q", "R", "S"]
    ]
  }
};

export default function AtividadePage() {
  const params = useParams();
  const router = useRouter();
  const activityId = params.id as string;
  const activity = activitiesData[activityId];

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedCells, setSelectedCells] = useState<Set<string>>(new Set());

  if (!activity) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0A0F0D] via-[#1B4332] to-[#0A0F0D] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4 font-inter">Atividade não encontrada</h1>
          <Link href="/atividades" className="text-white/70 hover:text-white underline font-inter">
            Voltar para atividades
          </Link>
        </div>
      </div>
    );
  }

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = answerIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (activity.story && currentStep < activity.story.content.length - 1) {
      setCurrentStep(currentStep + 1);
    } else if (activity.questions && currentStep < activity.questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateScore = () => {
    if (!activity.questions) return 0;
    let correct = 0;
    activity.questions.forEach((q: any, index: number) => {
      if (answers[index] === q.correct) {
        correct++;
      }
    });
    return Math.round((correct / activity.questions.length) * 100);
  };

  const toggleCell = (row: number, col: number) => {
    const key = `${row}-${col}`;
    const newSelected = new Set(selectedCells);
    if (newSelected.has(key)) {
      newSelected.delete(key);
    } else {
      newSelected.add(key);
    }
    setSelectedCells(newSelected);
  };

  // Renderizar história
  if (activity.story && currentStep < activity.story.content.length) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0A0F0D] via-[#1B4332] to-[#0A0F0D] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iY2hhbGsiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxwYXRoIGQ9Ik0wLDBoNHY0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEsMWwxLDEiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjY2hhbGspIi8+PC9zdmc+')] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <Link href="/atividades" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-4 font-inter">
              <ArrowLeft className="w-5 h-5" strokeWidth={2} />
              Voltar
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 font-inter">
              {activity.story.title}
            </h1>
            <div className="flex items-center gap-4 text-white/70 font-inter">
              <span className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" strokeWidth={2} />
                Parte {currentStep + 1} de {activity.story.content.length}
              </span>
              <span className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-400" strokeWidth={2} />
                {activity.points} pontos
              </span>
            </div>
          </div>

          {/* Story Content */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-8">
            <div className="text-7xl mb-6 text-center">📖</div>
            <p className="text-white text-lg leading-relaxed font-inter">
              {activity.story.content[currentStep]}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center gap-2 bg-white/10 text-white hover:bg-white/20 border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed font-inter"
            >
              <ArrowLeft className="w-5 h-5" strokeWidth={2.5} />
              Anterior
            </button>
            <button
              onClick={handleNext}
              className="px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center gap-2 bg-white text-[#1B4332] hover:bg-white/90 shadow-lg hover:shadow-xl font-inter"
            >
              {currentStep === activity.story.content.length - 1 ? "Responder Perguntas" : "Próxima"}
              <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Renderizar perguntas
  if (activity.questions && !showResults) {
    const questionIndex = activity.story ? currentStep - activity.story.content.length : currentStep;
    const question = activity.questions[questionIndex];

    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0A0F0D] via-[#1B4332] to-[#0A0F0D] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iY2hhbGsiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxwYXRoIGQ9Ik0wLDBoNHY0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEsMWwxLDEiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjY2hhbGspIi8+PC9zdmc+')] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <Link href="/atividades" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-4 font-inter">
              <ArrowLeft className="w-5 h-5" strokeWidth={2} />
              Voltar
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 font-inter">
              {activity.title}
            </h1>
            <div className="flex items-center gap-4 text-white/70 font-inter">
              <span className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" strokeWidth={2} />
                Pergunta {questionIndex + 1} de {activity.questions.length}
              </span>
              <span className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-400" strokeWidth={2} />
                {activity.points} pontos
              </span>
            </div>
          </div>

          {/* Question */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-8">
            <div className="text-7xl mb-6 text-center">🤔</div>
            <h2 className="text-2xl font-bold text-white mb-6 text-center font-inter">
              {question.question}
            </h2>

            <div className="space-y-4">
              {question.options.map((option: string, index: number) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className={`w-full p-4 rounded-xl font-medium transition-all duration-300 text-left font-inter ${
                    answers[questionIndex] === index
                      ? "bg-white text-[#1B4332] shadow-xl"
                      : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center gap-2 bg-white/10 text-white hover:bg-white/20 border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed font-inter"
            >
              <ArrowLeft className="w-5 h-5" strokeWidth={2.5} />
              Anterior
            </button>
            <button
              onClick={handleNext}
              disabled={answers[questionIndex] === undefined}
              className="px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center gap-2 bg-white text-[#1B4332] hover:bg-white/90 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed font-inter"
            >
              {questionIndex === activity.questions.length - 1 ? "Finalizar" : "Próxima"}
              <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Renderizar caça-palavras
  if (activity.grid) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0A0F0D] via-[#1B4332] to-[#0A0F0D] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iY2hhbGsiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxwYXRoIGQ9Ik0wLDBoNHY0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEsMWwxLDEiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjY2hhbGspIi8+PC9zdmc+')] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 py-8">
          <div className="mb-8">
            <Link href="/atividades" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-4 font-inter">
              <ArrowLeft className="w-5 h-5" strokeWidth={2} />
              Voltar
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 font-inter">
              {activity.title}
            </h1>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-8">
            <div className="text-7xl mb-6 text-center">🔍</div>
            <h2 className="text-xl font-bold text-white mb-4 font-inter">Encontre as palavras:</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {activity.words.map((word: string) => (
                <span key={word} className="px-4 py-2 bg-white/20 rounded-lg text-white font-bold font-inter">
                  {word}
                </span>
              ))}
            </div>

            <div className="overflow-x-auto">
              <div className="inline-block min-w-full">
                {activity.grid.map((row: string[], rowIndex: number) => (
                  <div key={rowIndex} className="flex justify-center">
                    {row.map((cell: string, colIndex: number) => (
                      <button
                        key={`${rowIndex}-${colIndex}`}
                        onClick={() => toggleCell(rowIndex, colIndex)}
                        className={`w-10 h-10 md:w-12 md:h-12 m-1 rounded-lg font-bold text-lg transition-all duration-300 font-inter ${
                          selectedCells.has(`${rowIndex}-${colIndex}`)
                            ? "bg-amber-400 text-[#1B4332] shadow-lg"
                            : "bg-white/20 text-white hover:bg-white/30"
                        }`}
                      >
                        {cell}
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={() => setShowResults(true)}
            className="w-full px-6 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 bg-white text-[#1B4332] hover:bg-white/90 shadow-lg hover:shadow-xl font-inter"
          >
            <CheckCircle className="w-5 h-5" strokeWidth={2.5} />
            Finalizar Jogo
          </button>
        </div>
      </div>
    );
  }

  // Renderizar resultados
  if (showResults) {
    const score = calculateScore();
    const earnedPoints = Math.round((score / 100) * activity.points);

    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0A0F0D] via-[#1B4332] to-[#0A0F0D] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iY2hhbGsiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxwYXRoIGQ9Ik0wLDBoNHY0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEsMWwxLDEiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjY2hhbGspIi8+PC9zdmc+')] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center">
            <div className="text-8xl mb-6">
              {score >= 80 ? "🎉" : score >= 60 ? "😊" : "💪"}
            </div>
            <h1 className="text-4xl font-bold text-white mb-4 font-inter">
              {score >= 80 ? "Parabéns!" : score >= 60 ? "Muito bem!" : "Continue tentando!"}
            </h1>
            <p className="text-2xl text-white/80 mb-8 font-inter">
              Você acertou {score}% das questões
            </p>

            <div className="bg-white/20 rounded-xl p-6 mb-8">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Trophy className="w-8 h-8 text-amber-400" strokeWidth={2} />
                <span className="text-4xl font-bold text-white font-inter">{earnedPoints}</span>
              </div>
              <p className="text-white/70 font-inter">pontos conquistados</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/atividades"
                className="px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 bg-white text-[#1B4332] hover:bg-white/90 shadow-lg hover:shadow-xl font-inter"
              >
                <Home className="w-5 h-5" strokeWidth={2.5} />
                Voltar para Atividades
              </Link>
              <button
                onClick={() => {
                  setCurrentStep(0);
                  setAnswers([]);
                  setShowResults(false);
                  setSelectedCells(new Set());
                }}
                className="px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 bg-white/20 text-white hover:bg-white/30 border border-white/30 font-inter"
              >
                <Star className="w-5 h-5" strokeWidth={2.5} />
                Tentar Novamente
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
