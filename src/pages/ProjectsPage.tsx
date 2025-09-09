import { ArrowLeft, Clock, Book } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import ProjectsFooter from "@/components/ProjectsFooter";

// Import das imagens dos projetos
import robotBipede from "@/assets/projects/robot-bipede.jpg";
import robotHexapode from "@/assets/projects/robot-hexapode.jpg";
import robotVarredor from "@/assets/projects/robot-varredor.jpg";
import robotRabiscador from "@/assets/projects/robot-rabiscador.jpg";
import robotGravidade from "@/assets/projects/robot-gravidade.jpg";
import robotPenhasco from "@/assets/projects/robot-penhasco.jpg";
import robotQuatroPernas from "@/assets/projects/robot-quatro-pernas.jpg";
import droidePbD2 from "@/assets/projects/droide-pb-d2.jpg";
import luzNoturna from "@/assets/projects/luz-noturna.jpg";
import robotSonoros from "@/assets/projects/robot-sonoros.jpg";
import ledThrowie from "@/assets/projects/led-throwie.jpg";
import motorHomopolar from "@/assets/projects/motor-homopolar.jpg";
import circuitoSimples from "@/assets/projects/circuito-simples.jpg";
import circuitoParalelo from "@/assets/projects/circuito-paralelo.jpg";
import circuitoSerie from "@/assets/projects/circuito-serie.jpg";
import robotDancante from "@/assets/projects/robot-dancante.jpg";
import robotSapo from "@/assets/projects/robot-sapo.jpg";
import orbitadorSolar from "@/assets/projects/orbitador-solar.jpg";
import circuitoLedBreadboard from "@/assets/projects/circuito-led-breadboard.jpg";
import barcoSolar from "@/assets/projects/barco-solar.jpg";

const ProjectsPage = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Construindo um Robô Bípede",
      time: "150 min",
      icon: "🤖",
      image: robotBipede,
      url: "https://drive.google.com/file/d/1MZKFcrEFCtvRtkbkoPFkTBHPAjotRHo1/view?usp=drive_link"
    },
    {
      title: "Construção de um Robô Hexápode",
      time: "120 min",
      icon: "🕷️",
      image: robotHexapode,
      url: "https://drive.google.com/file/d/1og-ORD5e5OSjeWwMi9qHiWyaoEDS0o3Z/view?usp=sharing"
    },
    {
      title: "Construa um Robô Varredor",
      time: "20 min",
      icon: "🧹",
      image: robotVarredor,
      url: "https://drive.google.com/file/d/1iQxcNG9djGZuuJrRlPPT-qK0mekbLpB0/view?usp=sharing"
    },
    {
      title: "Construa um Robô Rabiscador",
      time: "30 min",
      icon: "✍️",
      image: robotRabiscador,
      url: "https://drive.google.com/file/d/1x5NTufeIbWqndD_EAWQy1BYoMX00bZq6/view?usp=drive_link"
    },
    {
      title: "Construa um Robô que Desafia a Gravidade",
      time: "105 min",
      icon: "🚀",
      image: robotGravidade,
      url: "https://drive.google.com/file/d/1EawK2WDlhcMI9Rqlry7_cNgtrNmieLCw/view?usp=drive_link"
    },
    {
      title: "Construa um Robô Detector de Penhasco",
      time: "75 min",
      icon: "🧗",
      image: robotPenhasco,
      url: "https://drive.google.com/file/d/1osHK3lZg77rIogrzG9MCfmGuDJbF7ydm/view?usp=sharing"
    },
    {
      title: "Construa um Robô de Quatro Pernas",
      time: "90 min",
      icon: "🐾",
      image: robotQuatroPernas,
      url: "https://drive.google.com/file/d/1JY6p0h8zzr_n2K1jwktuDeUTza5OykSN/view?usp=drive_link"
    },
    {
      title: "Construa um Droide PB-D2",
      time: "45 min",
      icon: "🤖✨",
      image: droidePbD2,
      url: "https://drive.google.com/file/d/1s6qf3KZmooxGzt3pPNMBS4-WYBpGjcWH/view?usp=drive_link"
    },
    {
      title: "Construa uma Luz Noturna com Formato de Robô",
      time: "45 min",
      icon: "💡",
      image: luzNoturna,
      url: "https://drive.google.com/file/d/16yW8xlG4hm5Okg89FiDHFm3zpXiwCkZP/view?usp=drive_link"
    },
    {
      title: "Construa um Robô de Efeitos Sonoros Espaciais",
      time: "35 min",
      icon: "🔊",
      image: robotSonoros,
      url: "https://drive.google.com/file/d/1ylxESwnkbqDp4W1uTqYhcW3OBo1v0mX7/view?usp=drive_link"
    },
    {
      title: "Construa um LED Throwie",
      time: "5 min",
      icon: "💡🎯",
      image: ledThrowie,
      url: "https://drive.google.com/file/d/1xjuNxDozqkKDLpNW2GpH6PLbsVB0GHi6/view?usp=drive_link"
    },
    {
      title: "Construa um Motor Homopolar",
      time: "15 min",
      icon: "🔋",
      image: motorHomopolar,
      url: "https://drive.google.com/file/d/1p4HZTR6KWmvsdLQPjsyjbvtM4xCneKPn/view?usp=drive_link"
    },
    {
      title: "Construa um Circuito Simples",
      time: "5 min",
      icon: "🔌",
      image: circuitoSimples,
      url: "https://drive.google.com/file/d/1buGrC8B54ZIKXnrD2-gqDQ68s5a7CL-Z/view?usp=sharing"
    },
    {
      title: "Construa um Circuito Paralelo",
      time: "10 min",
      icon: "⛓️",
      image: circuitoParalelo,
      url: "https://drive.google.com/file/d/1b6vyX-hQv6BIU5byR2isCCUUT1F247ql/view?usp=sharing"
    },
    {
      title: "Construa um Circuito em Série",
      time: "10 min",
      icon: "➖",
      image: circuitoSerie,
      url: "https://drive.google.com/file/d/1ph-5XsjhENdMnMqPOV-UBBnCxVzKSDdG/view?usp=sharing"
    },
    {
      title: "Construa um Robô Dançante Solar",
      time: "30 min",
      icon: "☀️💃",
      image: robotDancante,
      url: "https://drive.google.com/file/d/1wHwkLO2_eSyWc7uNtCWXODBC3Z8ybio7/view?usp=sharing"
    },
    {
      title: "Construindo um Robô Sapo Saltador",
      time: "30 min",
      icon: "🐸",
      image: robotSapo,
      url: "https://drive.google.com/file/d/1NMc5bVW6i2SxvNU7qgH7_0O82ZWs9waa/view?usp=sharing"
    },
    {
      title: "Construa um Orbitador Móvel Movido a Energia Solar",
      time: "45 min",
      icon: "🛰️",
      image: orbitadorSolar,
      url: "https://drive.google.com/file/d/1X5D_YwLeE5ml357HMvGejOweCcV-ptu0/view?usp=sharing"
    },
    {
      title: "Construa um Circuito de LED com uma Placa de Testes",
      time: "15 min",
      icon: "💡",
      image: circuitoLedBreadboard,
      url: "https://drive.google.com/file/d/1VR34gf7jAh1eNjp0DaJpgMRftb98B32w/view?usp=sharing"
    },
    {
      title: "Construa um Barco Solar",
      time: "40 min",
      icon: "⛵☀️",
      image: barcoSolar,
      url: "https://drive.google.com/file/d/1HcqK3--zTtkO73v5FmhrTriGHYvPbpam/view?usp=sharing"
    }
  ];

  const handleProjectClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Header com botão voltar */}
      <header className="bg-white/95 backdrop-blur-sm shadow-md border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-primary hover:text-primary/80 hover:bg-primary/5 transition-all duration-200 group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span className="font-medium">Voltar para Casa</span>
            </Button>
            
            <div className="flex items-center gap-2">
              <span className="text-2xl">🤖</span>
              <h2 className="text-lg font-bold text-gray-800 hidden sm:block">
                Projetos Robóticos
              </h2>
            </div>
          </div>
        </div>
      </header>

      {/* Título principal estilizado */}
      <div className="text-center py-12 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="flex justify-center items-center gap-3 mb-6 flex-wrap">
          <span className="text-4xl animate-wiggle">🤖</span>
          <span className="text-4xl animate-float">⭐</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent animate-bounce-in text-center">
            Escolha o seu Projeto Robótico e Mãos à Obra!
          </h1>
          <span className="text-4xl animate-float">⭐</span>
          <span className="text-4xl animate-wiggle">🤖</span>
        </div>
        
        <p className="text-xl text-gray-600 animate-fade-in max-w-3xl mx-auto">
          20 projetos incríveis para construir robôs e circuitos divertidos!
        </p>
      </div>

      {/* Projects Grid */}
      <main className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-0 overflow-hidden bg-white hover:shadow-xl transition-all duration-300 hover:scale-105 animate-bounce-in border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Imagem do projeto */}
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              
              {/* Conteúdo do card */}
              <div className="p-6">
                <div className="text-center space-y-4">
                  <div className="text-3xl animate-float" style={{ animationDelay: `${index * 0.1}s` }}>
                    {project.icon}
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-800 leading-tight">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center justify-center gap-2 text-orange-500">
                    <Book className="w-4 h-4" />
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">{project.time}</span>
                  </div>
                  
                  <Button
                    variant="construction"
                    className="w-full font-bold"
                    onClick={() => handleProjectClick(project.url)}
                  >
                    🔧 Começar Projeto
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
      
      {/* Rodapé específico da página de projetos */}
      <ProjectsFooter />
    </div>
  );
};

export default ProjectsPage;