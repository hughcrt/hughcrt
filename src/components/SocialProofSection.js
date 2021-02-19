import Image from 'next/image';

const clientList = [
  {
    src: '/img/bigblue.svg',
    alt: 'Bigblue logo',
    link: 'https://www.bigblue.co',
  },
  {
    src: '/img/fma.svg',
    alt: 'FMA logo',
    link: 'https://www.farmmap4d.com.au',
  },
  {
    src: '/img/leda.svg',
    alt: 'Leda logo',
    link: 'https://getleda.com',
  },
  {
    src: '/img/upaged.svg',
    alt: 'uPaged logo',
    link: 'https://www.upaged.com',
  },
  {
    src: '/img/tricycle.png',
    alt: 'Tricycle logo',
    link: 'https://tricycle-environnement.fr',
  },
  {
    src: '/img/european-commission.svg',
    alt: 'European Comission logo',
    link: 'https://ec.europa.eu/info/index_en',
  },

];

function SocialProofSection() {
  return (
    <section style={{maxWidth: '700px'}}> 
      <div style={{
         margin: 'auto', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap',
      }}
      >

        <h3 style={{flexBasis: '100%', textAlign: 'center', fontSize: '25px'}}>Trusted by clients from all over the world:</h3>
        {clientList.map(({ src, alt, link }) => (
          <a
            href={link}
            key={src}
            target="_blank"
            style={{
              position: 'relative', width: 190, height: 50, margin: '0 10px', marginBottom: '30px',
            }}
          >
            <Image
              src={src}
              alt={alt}
              layout="fill"
              objectFit="cover"
            />
          </a>

        ))}
      </div>
    </section>
  );
}

export default SocialProofSection;
