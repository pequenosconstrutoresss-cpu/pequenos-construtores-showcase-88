import { Hammer, Star, Settings, Wrench, Lightbulb } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-8 px-4 bg-white/50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        {/* Ícones decorativos */}
        <div className="flex justify-center gap-6 mb-6">
          <Hammer className="w-8 h-8 text-construction-blue animate-pulse-slow" />
          <Settings className="w-8 h-8 text-construction-purple animate-float" />
          <Star className="w-8 h-8 text-construction-orange animate-pulse-slow" />
          <Wrench className="w-8 h-8 text-construction-red animate-float" />
          <Lightbulb className="w-8 h-8 text-construction-green animate-pulse-slow" />
        </div>
        
        {/* Slogan animado */}
        <div className="text-center mb-6">
          <p className="text-2xl font-bold text-gradient-blue animate-bounce-in mb-2">
            Aqui a imaginação vira invenção 🚀
          </p>
          <p className="text-gray-600 animate-float">
            Transformando curiosidade em conhecimento, um projeto por vez!
          </p>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          © 2025 Pequenos Construtores. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;