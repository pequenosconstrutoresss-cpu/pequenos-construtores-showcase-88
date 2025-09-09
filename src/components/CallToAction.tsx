import { Button } from "@/components/ui/button";
import { Rocket, Star, Target, Gamepad2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 md:p-12 text-center shadow-card">
          {/* Ícones animados */}
          <div className="flex justify-center gap-6 mb-8">
            <Star className="w-12 h-12 text-construction-orange animate-wiggle" />
            <Rocket className="w-12 h-12 text-construction-red animate-float" />
            <Target className="w-12 h-12 text-construction-green animate-pulse-slow" />
            <Gamepad2 className="w-12 h-12 text-construction-purple animate-wiggle" />
          </div>
          
          {/* Título principal */}
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-blue mb-6 animate-bounce-in">
            Comece Sua Jornada de Construtor Agora!
          </h2>
          
          {/* Descrição */}
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto animate-float">
            Junte-se a milhares de crianças que já descobriram a diversão de criar,
            experimentar e construir!
          </p>
          
          {/* Botão de ação */}
          <Button 
            variant="construction"
            size="lg"
            className="text-xl px-8 py-4 h-auto animate-bounce-in shadow-button"
            onClick={() => navigate("/projetos")}
          >
            <Rocket className="w-6 h-6 mr-2" />
            Começar Agora!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;