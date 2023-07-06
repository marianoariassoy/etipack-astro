import Marquee from "react-fast-marquee";

const Clients = () => {
  return (
    <div class="row mb-10" id="clientes">
      <h1 class="text-2xl font-semibold mb-8">Confian en nuestros servicios</h1>

      <Marquee>
        <div>
          <img src="./assets/images/logos/CATENA_ZAPATA_Logo.jpg" className="mx-8 opacity-70 w-24" />
        </div>
        <div>
          <img src="./assets/images/logos/Coca-Cola_Femsa_Logo.jpg" className="mx-8 opacity-70 w-24" />
        </div>
        <div>
          <img src="./assets/images/logos/ESCORIHUELA-LOGO-300x125.jpg" className="mx-8 opacity-70 w-24" />
        </div>
        <div>
          <img src="./assets/images/logos/esmeralda.jpg" className="mx-8 opacity-70 w-24" />
        </div>
        <div>
          <img src="./assets/images/logos/findelmundo.jpg" className="mx-8 opacity-70 w-24" />
        </div>
        <div>
          <img src="./assets/images/logos/Isologotipo_de_Paladini.jpg" className="mx-8 opacity-70 w-24" />
        </div>
        <div>
          <img src="./assets/images/logos/la-riojana2.jpg" className="mx-8 opacity-70 w-24" />
        </div>
        <div>
          <img src="./assets/images/logos/logo_dulkre.jpg" className="mx-8 opacity-70 w-24" />
        </div>
        <div>
          <img src="./assets/images/logos/Sanofi_logo.jpg" className="mx-8 opacity-70 w-24" />
        </div>
        <div>
          <img src="./assets/images/logos/sumitomo.jpg" className="mx-8 opacity-70 w-24" />
        </div>
        <div>
          <img src="./assets/images/logos/valle-de-la-puerta.jpg" className="mx-8 opacity-70 w-24" />
        </div>
      </Marquee>
    </div>
  );
};

export default Clients;
