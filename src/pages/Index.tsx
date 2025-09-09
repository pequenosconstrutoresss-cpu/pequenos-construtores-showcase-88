import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import constructionKids1 from "@/assets/construction-kids-1.jpg";
import constructionKids2 from "@/assets/construction-kids-2.jpg";
import constructionKids3 from "@/assets/construction-kids-3.jpg";

const Index = () => {
  const projects = [
    {
      title: "20 Projetos Robóticos",
      subtitle: "para Crianças",
      description: "Monte robôs incríveis com materiais simples!",
      image: constructionKids1,
      badge: "",
      tags: [
        { name: "🔧 Arduino", color: "bg-blue-100 text-blue-800" },
        { name: "💡 LEDs", color: "bg-yellow-100 text-yellow-800" },
        { name: "🤖 Servos", color: "bg-green-100 text-green-800" }
      ],
      buttonText: "🔨 Explorar Projetos",
      buttonVariant: "construction" as const
    },
    {
      title: "+100 Experimentos Científicos",
      subtitle: "",
      description: "Descubra a magia da ciência em casa!",
      image: constructionKids2,
      badge: "",
      tags: [
        { name: "💧 Passas Dançantes", color: "bg-blue-100 text-blue-800" },
        { name: "🌪️ Tornado na Garrafa", color: "bg-red-100 text-red-800" },
        { name: "🌿 Jardim de Cristais", color: "bg-green-100 text-green-800" }
      ],
      buttonText: "🧪 Ver Experimentos",
      buttonVariant: "red" as const
    },
    {
      title: "BÔNUS: +25 Artesanato",
      subtitle: "",
      description: "Crie brinquedos e arte com materiais recicláveis!",
      image: constructionKids3,
      badge: "",
      tags: [
        { name: "🏠 Cidade dos Sacos", color: "bg-orange-100 text-orange-800" },
        { name: "🎭 Teatro de Fantoches", color: "bg-red-100 text-red-800" },
        { name: "😷 Máscaras Criativas", color: "bg-green-100 text-green-800" }
      ],
      buttonText: "🎨 Criar Artesanatos",
      buttonVariant: "orange" as const
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Cards de Projetos */}
      <main className="w-full py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="animate-bounce-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
