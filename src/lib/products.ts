import amethyst from "@/assets/crystal-amethyst.jpg";
import quartz from "@/assets/crystal-quartz.jpg";
import roseQuartz from "@/assets/crystal-rose-quartz.jpg";
import tourmaline from "@/assets/crystal-tourmaline.jpg";
import citrine from "@/assets/crystal-citrine.jpg";
import celestite from "@/assets/crystal-celestite.jpg";

export interface Product {
  id: string;
  image: string;
  name: string;
  subtitle: string;
  description: string;
  price: number;
}

export const products: Product[] = [
  { 
    id: "amethyst-cathedral",
    image: amethyst, 
    name: "Ametista Cathedral", 
    subtitle: "Fragmento Raro", 
    description: "Uma formação milenar selecionada por sua pureza e arquitetura geológica singular. Esta ametista catedral apresenta cristais profundos e uma geometria sagrada que emana serenidade.",
    price: 12800 
  },
  { 
    id: "quartz-hialino",
    image: quartz, 
    name: "Quartzo Hialino", 
    subtitle: "Ponta Natural", 
    description: "Cristal de transparência absoluta, o quartzo hialino é um amplificador de energias e luz. Esta peça apresenta faces perfeitamente preservadas pela natureza.",
    price: 4200 
  },
  { 
    id: "rose-quartz-esfera",
    image: roseQuartz, 
    name: "Quartzo Rosa", 
    subtitle: "Esfera Polida", 
    description: "A pedra do amor incondicional e da paz infinita. Esta esfera polida revela a profundidade translúcida do quartzo rosa em sua forma mais harmoniosa.",
    price: 6500 
  },
  { 
    id: "tourmaline-negra",
    image: tourmaline, 
    name: "Turmalina Negra", 
    subtitle: "Proteção Milenar", 
    description: "Um escudo geológico de proteção absoluta. Esta turmalina negra bruta mantém sua textura original, conectando o ambiente à força da terra.",
    price: 0 
  },
  { 
    id: "citrine-cluster",
    image: citrine, 
    name: "Citrino Cluster", 
    subtitle: "Abundância", 
    description: "O cristal da prosperidade e energia solar. Este cluster de citrino natural irradia calor e vitalidade em cada uma de suas pontas douradas.",
    price: 8900 
  },
  { 
    id: "celestite-geodo",
    image: celestite, 
    name: "Celestita Geodo", 
    subtitle: "Conexão Divina", 
    description: "Geodo de celestita com cristais azuis celestiais. Uma peça de rara beleza que evoca a tranquilidade do céu e a expansão da consciência.",
    price: 15400 
  },
];
