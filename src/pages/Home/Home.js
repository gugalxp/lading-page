import { Button, Carousel, Collapse, Image } from "antd";

export function Home() {

    const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

    const items = [
        {
            key: '1',
            label: 'This is panel header 1',
            children: <p>{text}</p>,
        },
        {
            key: '2',
            label: 'This is panel header 2',
            children: <p>{text}</p>,
        },
        {
            key: '3',
            label: 'This is panel header 3',
            children: <p>{text}</p>,
        },
    ];


    return (
        <div>
            <div className="navbar">
                <img
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    style={{
                        marginTop: '2em',
                        zIndex: '2',
                        position: 'absolute',
                        width: '14em',
                        height: '14em'
                    }}
                    src="/image-background-removebg.png"
                    alt="Logo"
                    className="logo"
                />
            </div>
            <div className="parallax-container">
                <div className="parallax-image slots" style={{ backgroundImage: `url('/image-background4.jpeg')` }}>
                    <div className="parallax-shadow"></div>
                    <div className="parallax-content">
                        <div className="parallax-content-main">
                            <h1 style={{ color: 'white', fontSize: '30px' }} data-aos="fade-up" data-aos-duration="2000">
                                Entre de cabeça na <span style={{ color: '#5662F6' }}>experiência frenética
                                </span> dos SINAIS DE BRANCO, os mais emocionantes do 🌍
                            </h1>
                            <Button className="button" data-aos="zoom-in" data-aos-duration="2000">
                                Eu quero lucrar todos os dias
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="spacer" data-aos-duration="2000" data-aos="fade-up">
                <h1 style={{ color: '#5662F6', textAlign: 'center' }}>Blaze pagando 🔥</h1>
                <Carousel slidesToShow={3} speed={4000} autoplay infinite autoplaySpeed={4000} style={{ height: '100%' }}>
                    <Image.PreviewGroup>
                        <Image
                            src="/prova1.jpg"
                            alt="Imagem 1"
                        />
                    </Image.PreviewGroup>
                    <Image.PreviewGroup>
                        <Image
                            src="/prova2.jpg"
                            alt="Imagem 2"
                        />
                    </Image.PreviewGroup>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Image.PreviewGroup>
                            <Image
                                src="/prova3.jpg"
                                alt="Imagem 2"
                            />
                        </Image.PreviewGroup>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Image.PreviewGroup>
                            <Image
                                src="/prova4.jpg"
                                alt="Imagem 2"
                            />
                        </Image.PreviewGroup>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Image.PreviewGroup>
                            <Image
                                src="/prova5.jpg"
                                alt="Imagem 2"
                            />
                        </Image.PreviewGroup>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Image.PreviewGroup>
                            <Image
                                src="/prova6.jpg"
                                alt="Imagem 2"
                            />
                        </Image.PreviewGroup>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Image.PreviewGroup>
                            <Image
                                src="/prova7.jpg"
                                alt="Imagem 2"
                            />
                        </Image.PreviewGroup>
                    </div>
                </Carousel>
            </div>

            {/* Seção Roleta */}
            <div className="parallax-container" style={{ height: '100vh' }}>
                <div className="parallax-image roleta" style={{ backgroundImage: `url('/image-background5.jpeg')` }}>
                    <div className="parallax-shadow"></div>
                    <div className="parallax-content">
                        <Collapse items={items} defaultActiveKey={true} />
                        <Button className="button" data-aos="zoom-in" data-aos-duration="2000">
                            Eu quero lucrar todos os dias
                        </Button>                    </div>
                </div>
            </div>
        </div>
    );
}
