'use client';

import Image from 'next/image';

export default function AboutOlazabal() {
  return (
    <div className="flex flex-col items-center justify-start text-center text-black">
      {/* Imagen con texto superpuesto */}
      <div className="relative w-full">
        <Image
          src="/images/about-olazabal.jpg" // Colócala en public/images/
          alt="Santiago Rodríguez Olazábal"
          width={2300}
          height={750}
          layout="responsive"
          objectFit="cover"
          priority
        />

        {/* Texto superpuesto en la parte inferior de la imagen */}
       <div className="absolute bottom-10 left-0 w-full">
    <div className="max-w-6xl px-1 mx-auto">
      <h1 className="text-3xl md:text-3xl font-light text-red-800 drop-shadow-sm">
        Santiago Rodríguez Olazábal
      </h1>
      <h2 className="text-lg md:text-xl.25 text-gray-600 drop-shadow-sm">
        Contemporary Afro-Cuban Art Master
      </h2>
    </div>
  </div>
</div>

      {/* Biografía */}
      <div className="max-w-6xl px-1 mt-1 mb-20">
        <p className="text-base md:text-lg leading-relaxed text-justify text-gray-500">
          Born in Havana, Cuba, on July 25, 1955, Santiago Rodríguez Olazábal embarked on his artistic path at the National Academy of Art San Alejandro. Though his formal studies remained uncompleted between 1972 and 1975, this early immersion laid the groundwork for a distinguished career marked by profound introspection and a rich engagement with cultural narratives.
          <br /><br />
          Olazábal's work, imbued with a distinctive vision, has been the subject of numerous solo exhibitions that resonate across continents. His artistic dialogue has unfolded in diverse settings, from the vibrant art scene of Havana, with exhibitions like LA NOCHE PUSO SUS OJOS EN ELLA at NG. Art Gallery in Panama City (2019) and HISTORIAS POR CONTAR. Porque hay cosas que se nos escapan at NG Art Gallery in Havana (2018), to presentations like AGUA EN LAS RAÍCES at Galería Collage Habana (2017) and LO SECRETO (with Rubén Rodríguez) at Galería Villa Manuela (2017). His journey has also taken him to American institutions, including IMOYE at the George Caleb Bingham Gallery, University of Missouri (2016), a highlight of "Afrocuban Artist a Renaissance."
          <br /><br />
          His pieces, often serving as collateral events to major art gatherings, demonstrate a consistent presence in the global art discourse. ADIFAFUN IMOLE, presented at ZONA FRANCA during the 12th Havana Biennial (2015), and PERMANCER EN LA TIERRA, a collateral exhibition of the 11th Havana Biennial (2012), underscore his ongoing relevance. European audiences have experienced his compelling narratives through shows such as COMO UN BARCO EN EL OCEANO at Galería Saro León in Las Palmas de Gran Canaria (2014) and GÚEMILERE at Rainhart Gallery in Brussels (2013). Earlier significant solo showcases like ONILE. El Espíritu Sagrado De La Tierra at the National Museum of Fine Arts, Havana (2005), and YO NUNCA MORIRE at Galería Habana (2002), solidified his reputation as an artist of significant depth and impact.
          <br /><br />
          Beyond his individual presentations, Olazábal's art has been a compelling force in a multitude of collective exhibitions, contributing to critical dialogues on contemporary art. His participation in events like SCOPE MIAMI and ART MADRID reflects his international acclaim, while his presence in landmark exhibitions such as WITHOUT MASKS. CONTEMPORARY AFROCUBAN ART from The Von Christierson Collection (various locations, including Museo Nacional de Bellas Artes, Havana, 2017, and Museum of Anthropology, Vancouver, 2014) and DRAPETOMANIA (Cooper Gallery of African American Art, Harvard, 2015, among others) highlights his profound engagement with themes of identity, heritage, and spirituality.
          <br /><br />
          Olazábal's work is a valued part of numerous prestigious collections across the globe. These include the Museo Nacional de Bellas Artes in Havana, the Ludwig Collection Aachen, the Centro Atlántico de Arte Moderno (CAAM), the DAROS-LatinAmerica Collection, and The Von Christierson Collection. His presence in these esteemed repositories speaks to the enduring significance and universal appeal of his artistic contributions.
          <br /><br />
          Throughout his career, Santiago Rodríguez Olazábal has garnered notable accolades that acknowledge his singular talent. Among these are the Special Mention for the Most Original Work at the KNOKE ART FAIR (2014), the DIPLOMA AL MERITO ARTISTICO from Instituto Superior de Arte (2007), and the International Silver Plate Award at the 4th BIENAL DE ANKARA (1992). These honors, alongside significant recognition for specific works like ONILE. El Espíritu Sagrado De La Tierra, which earned the Illustrious Visitor Coin of Vatican City (2005), and ARA OKO, honored with the Illustrious Son Medal of Villa de Guanabacoa (1986), underscore his consistent impact and recognition in the art world.
        </p>
      </div>
    </div>
  );
}
