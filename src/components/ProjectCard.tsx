import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badge: string;
  tags: Array<{ name: string; color: string; icon?: string }>;
  buttonText: string;
  buttonVariant: "construction" | "red" | "orange";
  className?: string;
  onClick?: () => void;
}

const ProjectCard = ({
  title,
  subtitle,
  description,
  image,
  badge,
  tags,
  buttonText,
  buttonVariant,
  className = "",
  onClick
}: ProjectCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (title === "20 Projetos Robóticos") {
      navigate("/projetos");
    } else if (title === "+100 Experimentos Científicos") {
      window.open("https://drive.google.com/file/d/1nEWtUTs-2yiVs-xLCmxMoF5iZba3QO6Q/view?usp=drive_link", "_blank");
    } else if (title === "BÔNUS: +25 Artesanato") {
      window.open("https://drive.google.com/file/d/1V_HRDs-kgPfoFmoc8ThW_gHN3LstYex2/view?usp=drive_link", "_blank");
    }
  };

  return (
    <Card className={`p-0 overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white ${className}`}>
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-800 mb-2 animate-bounce-in">
            {title}
          </h3>
          <p className="text-gray-600 text-sm mb-3">
            {description}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className={`px-3 py-1 rounded-full text-xs font-medium ${tag.color} animate-float`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tag.icon} {tag.name}
            </span>
          ))}
        </div>
        
        <Button 
          variant={buttonVariant}
          className="w-full font-bold animate-bounce-in"
          size="lg"
          onClick={handleClick}
        >
          {buttonText}
        </Button>
      </div>
    </Card>
  );
};

export default ProjectCard;