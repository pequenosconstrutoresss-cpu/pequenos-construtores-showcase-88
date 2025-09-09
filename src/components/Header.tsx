import { Hammer, Settings, Star, Wrench, Lightbulb } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full py-12 px-4 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="max-w-6xl mx-auto text-center">
        {/* Título principal com ícones decorativos */}
        <div className="flex justify-center items-center gap-3 mb-6 flex-wrap">
          <div className="flex items-center gap-2">
            <Hammer className="w-8 h-8 md:w-12 md:h-12 text-blue-500 animate-wiggle" />
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent animate-bounce-in">
              🔧 Pequenos Construtores 🔨
            </h1>
            <Wrench className="w-8 h-8 md:w-12 md:h-12 text-green-500 animate-wiggle" />
          </div>
        </div>
        
        {/* Subtítulo colorido */}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-4 animate-float">
          Explore, Crie e Divirta-se!
        </h2>
        
        {/* Descrição responsiva */}
        <p className="text-base md:text-lg text-gray-600 mb-8 animate-bounce-in max-w-3xl mx-auto px-4">
          Um mundo de projetos criativos para crianças curiosas de 5 a 12 anos
        </p>
        
        {/* Ícones decorativos responsivos */}
        <div className="flex justify-center gap-4 md:gap-6 mb-8 flex-wrap">
          <Hammer className="w-6 h-6 md:w-8 md:h-8 text-blue-500 animate-pulse-slow" />
          <Star className="w-6 h-6 md:w-8 md:h-8 text-yellow-500 animate-float" />
          <Settings className="w-6 h-6 md:w-8 md:h-8 text-purple-500 animate-pulse-slow" />
          <Wrench className="w-6 h-6 md:w-8 md:h-8 text-red-500 animate-float" />
          <Lightbulb className="w-6 h-6 md:w-8 md:h-8 text-green-500 animate-pulse-slow" />
        </div>
      </div>
    </header>
  );
};

export default Header;