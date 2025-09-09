import { Lock, Settings, Package } from "lucide-react";

const ProjectsFooter = () => {
  return (
    <footer className="w-full py-12 px-4 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Título principal */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
            <span className="text-4xl">🔧</span>
            Guia de Segurança e Suprimentos
          </h2>
          <p className="text-gray-600 text-lg">
            Tudo o que você precisa saber antes de começar seus projetos!
          </p>
        </div>

        {/* Grid de 3 seções */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Segurança no Ambiente de Trabalho */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <div className="text-center mb-6">
              <Lock className="w-12 h-12 text-orange-500 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-gray-800">
                Segurança no Ambiente de Trabalho
              </h3>
            </div>
            
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-orange-500">•</span>
                <span>Superfície limpa e seca</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500">•</span>
                <span>Sem líquidos ou bebidas próximos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500">•</span>
                <span>Protetor de surto e cabos de borracha</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500">•</span>
                <span>Organização adequada</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500">•</span>
                <span>Roupas ajustadas, sapatos de borracha e óculos de segurança</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500">•</span>
                <span>Supervisão adulta em tarefas perigosas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500">•</span>
                <span>Manter animais de estimação afastados</span>
              </li>
            </ul>
          </div>

          {/* Onde Encontrar Peças */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <div className="text-center mb-6">
              <Settings className="w-12 h-12 text-blue-500 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-gray-800">
                Onde Encontrar Peças
              </h3>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <div>
                <span className="text-blue-500 font-medium">• Em casa:</span>
                <span className="ml-2">baterias, fios, parafusos</span>
              </div>
              <div>
                <span className="text-blue-500 font-medium">• Lojas de ferragens locais</span>
              </div>
              <div>
                <span className="text-blue-500 font-medium">• Pizzarias</span>
                <span className="ml-2">(tripés) e consultórios médicos (tubitos de língua)</span>
              </div>
              <div>
                <span className="text-blue-500 font-medium">• Lojas online especializadas:</span>
                <span className="ml-2">Baú da Eletrônica, FilipeFlop, Mult Comercial, RoboCore, Usinainfo</span>
              </div>
              <div>
                <span className="text-blue-500 font-medium">• Marketplaces:</span>
                <span className="ml-2">Mercado Livre, Amazon, eBay</span>
              </div>
            </div>
          </div>

          {/* Lista de Suprimentos */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <div className="text-center mb-6">
              <Package className="w-12 h-12 text-green-500 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-gray-800">
                Lista de Suprimentos
              </h3>
            </div>
            
            <div className="space-y-3 text-gray-600">
              <div>
                <span className="text-green-500 font-medium">• Ferramentas:</span>
                <span className="ml-2">furadeira, martelo, cola quente, tesoura, chaves de fenda, régua</span>
              </div>
              <div>
                <span className="text-green-500 font-medium">• Artesanato:</span>
                <span className="ml-2">palitos, fita adesiva, olhos de plástico, tecido, tintas</span>
              </div>
              <div>
                <span className="text-green-500 font-medium">• Baterias e energia:</span>
                <span className="ml-2">AA, AAA, 9V, CR2032, painéis solares</span>
              </div>
              <div>
                <span className="text-green-500 font-medium">• Componentes eletrônicos:</span>
                <span className="ml-2">resistores, capacitores, motores, LEDs, interruptores, caixas de engrenagens</span>
              </div>
              <div>
                <span className="text-green-500 font-medium">• Objetos reutilizáveis:</span>
                <span className="ml-2">garrafas, papelão, tripés de pizza, recipientes plásticos, ímãs</span>
              </div>
              <div>
                <span className="text-green-500 font-medium">• Peças de brinquedo:</span>
                <span className="ml-2">rodas, hélices, bonecos</span>
              </div>
              <div>
                <span className="text-green-500 font-medium">• Fios e conectores</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-6 border-t border-gray-200">
          <div className="flex justify-center gap-3 mb-3">
            <Settings className="w-6 h-6 text-gray-400" />
            <span className="text-2xl">🤖</span>
            <Settings className="w-6 h-6 text-gray-400" />
          </div>
          <p className="text-gray-500 text-sm">
            © 2025 Inventores Mirins. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ProjectsFooter;