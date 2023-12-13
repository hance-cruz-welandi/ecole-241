import Image from 'next/image'

export default function Home() {
  return (
    <main>
        <div className="flex justify-between px-6">
			    <div className="mt-11">
				    <h2  className="text-[40px] mb-4">
				      <b>
					        Ecole 241 , Plus qu’une<br/>formation un <b>métier</b>
				      </b>
				    </h2>
            <p className="mb-12 text-xs">
					    Ecole 241 forme aux métiers du numérique dans tout le Gabon . Rejoignez un réseau<br/>
              de plus de 25 000 apprenants et apprenantes. Vous souhaitez vous aussi intégrer un<br/>
              parcours de formation Simplon ou être conseillé-e dans votre parcours ?
				    </p>
            <button className="text-white py-3 bg-red-500 rounded px-6">
              Contactez-nous
            </button>
			    </div>
			    <div  className="flex gap-x-7 py-6">
					  <div className="flex flex-col gap-y-3">
						  <div className="w-[200px]  h-[300px] bg-center bg-[length:200px_300px] rounded">
							  <div className="h-[100%] w-[100%] bg-black/50 rounded pt-[190px] px-5">
								  <a href="#" className="text-white text-[9px]">
									  <u>Lorem ipsum dolor sit amet. Vel<br/>
									    quia sint ex fuga quae et<br/>
									    Lire
									  </u> 
								  </a>
							 </div> 	
						  </div>
						  <a href="#" className="flex gap-x-2 text-[12px]">
							  <u>
								  <b>
									  Nos Articles de blog
								  </b>
							  </u>
							  <img src="./asset/icons/fleche-droite.png"/>
						  </a>
					  </div>
					  <div className="flex flex-col gap-y-5">
						  <div className="w-[200px] h-[140px] bg-[length:200px_140px] bg-no-repeat rounded">
							  <div className="bg-black/50 h-[100%] w-[100%] pt-[50px] px-5 rounded">
								  <a href="#" className="text-white text-[9px]">
									  <u>Lorem ipsum dolor sit amet. Vel<br/>
									    quia sint ex fuga quae et<br/>
									    Lire
									  </u> 
								  </a>
							  </div>
						  </div>
						  <div className="w-[200px] h-[140px]  bg-[length:260px_140px] bg-no-repeat rounded">
							  <div className="bg-black/50 h-[100%] w-[100%] pt-[50px] px-5 rounded">
								  <a href="#" className="text-white text-[9px]">
									  <u>Lorem ipsum dolor sit amet. Vel<br/>
									    quia sint ex fuga quae et<br/>
                       Lire
									  </u> 
								  </a>
							  </div>
						  </div>
					  </div>
			    </div>
		    </div>
		{/* deuxième section */}
		    <div className="bg-black px-6 py-7">
			    <div className="">
				    <h1 className="text-[45px] text-white">
					    <b>
						    <b>Notre programme</b>
					    </b>
				    </h1>
            <p className=" text-white text-xs">
					    Ecole 241, c’est une formation en informatique d’excellence pour tous et toutes. Au programme de cette école différente et<br/>
					    innovante : une approche par projets pour progresser et développer des compétences techniques et humaines<br/>
					    recherchées sur le marché du travail.
				    </p>
			    </div>
          <div className="flex gap-x-[60px] mx-auto justify-center items-center py-10">
				    <div className="flex gap-x-3">
              <img src="./asset/icons/Capa1.png"/>
              <p className="text-white self-center text-xs">
                PAS DE COURS.<br/>
                PAS DE PROFS. 
              </p>
				    </div>
				  <div className="flex gap-x-3">
					  <img src="./asset/icons/Calque2.png"/>
					  <p className="text-white self-center text-xs">
              UNE PÉDAGOGIE PAR<br/>
						  PROJETS
            </p>
				  </div>
				  <div className="flex gap-x-3">
					    <img src="./asset/icons/Layer3.png"/>
					    <p className="text-white self-center text-xs">
                UN APPRENTISSAGE<br/>
                PEER-TO-PEER 
              </p>
				  </div>
				  <div className="flex gap-x-3">
					  <img src="./asset/icons/Calque4.png"/>
					  <p className="text-white self-center text-xs">
            	APPRENDRE EN<br/>
						  S'AMMUSANT
             </p>
				  </div>
			  </div>
		  </div>	
    </main>
  )
}
