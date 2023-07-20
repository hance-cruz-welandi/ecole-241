export default function Contact() {
  return (
    <main>
      <section className="flex gap-x-[50px] justify-center">
            <form className="flex flex-col gap-y-2 w-[43%] py-5 px-4 bg-gray-400/50 my-8 ml-12 rounded">
               <div className="text-center space-y-[20px] mb-[30px]">
                  <h1 className="text-4xl">
                        <b>
                          Contactez nous
                        </b>
                  </h1>
                  <p>Contactez notre équipe d'assistance pour vos questions et demandes. Nous vous répondrons dans les plus brefs délais pour vous aider avec soin.</p>
               </div>
               <div className="flex flex-col gap-y-2">
                  <label>
                        Nom
                        <i className="text-red-500">
                        *
                      </i>
                  </label>
                  <input type="text" id="nom" required placeholder="Entrer votre Nom complet" className="h-10 rounded w-[400px] border-b-2 border-black"/>
               </div>
               <div className="flex flex-col gap-y-2">
                  <label>
                      Email
                      <i className="text-red-500">
                        *
                      </i>
                  </label>
                  <input type="email" id="email" required placeholder="Entrer une adresse mail valide" className="h-10 rounded w-[400px] border-b-2 border-black"/>
               </div>
               <div className="flex flex-col gap-y-2">
                  <label>
                     Numéro de téléphone
                     <i className="text-red-500">
                        *
                      </i>
                  </label>
                  <input type="tel" id="numero_de_telephone" required placeholder="exemple +24166000000" className="h-10 rounded w-[400px] border-b-2 border-black"/>
               </div>
               <div className="flex flex-col gap-y-2">
                  <label>
                      Sujet
                      <i className="text-red-500">
                        *
                      </i>
                  </label>
                  <input type="text" id="sujet" required placeholder="Entrer le sujet" className="h-10 rounded w-[400px] border-b-2 border-black" />
               </div>
               <div className="flex flex-col gap-y-2">
                  <label>
                     Message
                     <i className="text-red-500">
                        *
                      </i>
                  </label>
                  <textarea type="message" id="message" required placeholder="Entrer votre message" className="h-32 rounded w-[400px] border-b-2 border-black"></textarea>
               </div>
               <div className="flex gap-x-1">
                  <input type="checkbox" id="condition_d_utilisation" required  />
                  <label>
                        J'accepte les conditions d'utilisation
                  </label>
               </div>
               <button type="submit" id="submit" className="self-center text-center py-2 bg-blue-400 hover:bg-blue-700 hover:duration-700 rounded w-[403px] text-white">
                  Envoyer le message
               </button>
            </form>
        <div className="w-[50%] mt-[50px] flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-5">
              <h1 className="text-3xl">
                <b>
                  ECOLE 241 - Contact
                </b>
              </h1>
              <p className="leading-7">
                CF92+F53, Bd Triomphal, Libreville<br/>
                <b>Tel: </b> 062 13 07 07<br/>
                <b>Mail: </b>Ecole241@gmail.com<br/>
                <b>Horaires d'ouverture :</b> Du lundi au samedi de 08h00 - 21h00  
              </p>
            </div>
            <h1 className="text-2xl text-center">
                  <b>
                      Pourquoi choisir ces formations ?
                  </b>
              </h1>
            <div className="flex flex-col gap-y-5">
              <div className="bg-gray-400/50 rounded self-center flex flex-col  gap-y-3 py-3 px-5">
                  <div className="self-center">
                    <img src="./asset/icons/contenu-qualite.svg"/>
                  </div>
                  <h1 className="text-lg text-center">
                      <b>Un contenu de qualité</b>
                  </h1>
                  <p className="text-center">
                      Pour chaque cours réalisé, j’essaye de<br/> vous proposer du contenu toujours plus<br/> qualitatif et varié.
                  </p>
              </div>
              <div className="bg-gray-400/50 rounded self-center flex flex-col gap-y-3 py-3 px-4">
                  <div className="self-center">
                    <img src="./asset/icons/multi-niveaux.svg"/>
                  </div>
                  <h1  className="text-lg text-center">
                     <b>Pour tous les niveaux</b>
                  </h1>
                  <p className="text-center">
                  Parcourez une multitude de cours pour<br/>tous les niveaux, apprenez les bases ou à<br/> vous perfectionner !
                  </p>
              </div>
            </div>
        </div>
      </section>
    </main>
  )
}