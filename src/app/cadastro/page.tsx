"use client";

import { useState } from "react";
import { Mail, Lock, User, ArrowRight, Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default function CadastroPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica de cadastro
    console.log("Cadastro:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0F0D] via-[#1B4332] to-[#0A0F0D] relative overflow-hidden">
      {/* Chalk texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iY2hhbGsiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxwYXRoIGQ9Ik0wLDBoNHY0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEsMWwxLDEiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjY2hhbGspIi8+PC9zdmc+')] pointer-events-none" />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 font-inter">
              Criar Conta
            </h1>
            <p className="text-white/70 text-lg font-inter">
              Comece sua jornada de aprendizado hoje
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="block text-white font-medium mb-2 text-sm font-inter">
                  Nome Completo
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" strokeWidth={2} />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Seu nome"
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 font-inter"
                    required
                  />
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-white font-medium mb-2 text-sm font-inter">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" strokeWidth={2} />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="seu@email.com"
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 font-inter"
                    required
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-white font-medium mb-2 text-sm font-inter">
                  Senha
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" strokeWidth={2} />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    placeholder="Mínimo 8 caracteres"
                    className="w-full pl-12 pr-12 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 font-inter"
                    required
                    minLength={8}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" strokeWidth={2} />
                    ) : (
                      <Eye className="w-5 h-5" strokeWidth={2} />
                    )}
                  </button>
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 w-4 h-4 rounded border-white/20 bg-white/10 text-white focus:ring-white/50"
                  required
                />
                <label htmlFor="terms" className="text-white/70 text-sm font-inter">
                  Concordo com os{" "}
                  <a href="#" className="text-white underline hover:text-white/80">
                    Termos de Uso
                  </a>{" "}
                  e{" "}
                  <a href="#" className="text-white underline hover:text-white/80">
                    Política de Privacidade
                  </a>
                </label>
              </div>

              {/* Submit Button */}
              <Link href="/planos">
                <button
                  type="submit"
                  className="w-full bg-white text-[#1B4332] font-bold text-lg py-4 rounded-2xl hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:scale-[1.02] font-inter"
                >
                  Criar Conta
                  <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                </button>
              </Link>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-transparent text-white/60 font-inter">ou</span>
              </div>
            </div>

            {/* Login Link */}
            <p className="text-center text-white/70 text-sm font-inter">
              Já tem uma conta?{" "}
              <a href="#" className="text-white font-bold underline hover:text-white/80">
                Fazer Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
