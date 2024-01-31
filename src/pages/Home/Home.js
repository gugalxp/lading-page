import { Button, Carousel, Image, List, Popover } from "antd";
import { CheckOutlined, TrophyOutlined, ThunderboltOutlined } from '@ant-design/icons';

export function Home() {


    const benefitsData = [

        'SINAIS DE BRANCO AO VIVO E EM LISTA.',
        'LIVES/CORUJÃO.',
        'ORIENTAÇÃO E DICAS COMO LER A PLATAFORMA INCLUSIVE AS RECUPERAÇÕES DE BRANCO.',
        'SUPORTE EXCLUSIVO.',
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
                <div className="parallax-image slots" style={{ backgroundImage: `url('/image-background6.jpeg')` }}>
                    <div className="parallax-shadow"></div>
                    <div className="parallax-content marginTopFive">
                        <div className="parallax-content-main">
                            <h1 style={{ color: 'white', fontSize: '30px' }} data-aos="fade-up" data-aos-duration="2000">
                                Entre de cabeça na <span style={{ color: '#5662F6' }}>experiência frenética
                                </span> dos sinais de branco. <span style={{ whiteSpace: 'nowrap' }}>O MAIOR DO MUNDO!</span>
                            </h1>
                            <Button className="button" data-aos="zoom-in" data-aos-duration="2000">
                                Eu quero lucrar todos os dias
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="parallax-container" style={{ height: '100vh' }}>
                <div className="parallax-image roleta" style={{ backgroundImage: `url('/image-background5.jpeg')` }}>
                    <div className="parallax-shadow"></div>
                    <div className="title-carousel" data-aos="zoom-in-up" data-aos-duration="2000" style={{ marginBottom: '3em' }}>
                        <h1 style={{ color: '#5662F6', textAlign: 'center' }}>
                            <span style={{ color: '#fff', marginRight: '.5em' }}>Benefícios</span><TrophyOutlined /></h1>
                    </div>
                    <div className="parallax-content-main2 ">
                        <div className="content-services">
                            <List
                                dataSource={benefitsData}
                                renderItem={(item) => (
                                    <List.Item style={{ color: '#fff', fontSize: '20px' }}>
                                        <CheckOutlined style={{ color: '#5662F6', fontSize: '30px', fontWeight: 'bold' }} /> {item}
                                    </List.Item>
                                )}
                            />

                            <Button className="button" data-aos="zoom-in" data-aos-duration="2000">
                                Eu quero lucrar todos os dias
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="title-carousel" data-aos="zoom-in-up" data-aos-duration="2000">
                <h1 style={{ color: '#5662F6', textAlign: 'center' }}>Blaze <span style={{ color: '#fff' }}>pagando</span> 🔥</h1>
            </div>
            <div className="spacer" data-aos-duration="2000" data-aos="fade-up">
                <Carousel slidesToShow={3} speed={2000} autoplay infinite={true} autoplaySpeed={1000}>
                    <Image.PreviewGroup>
                        <Popover content="Clique para visualizar">
                            <Image
                                src="/prova1.jpg"
                                alt="Imagem 1"
                                style={{ cursor: 'zoom-in' }}
                            />
                        </Popover>
                    </Image.PreviewGroup>
                    <Image.PreviewGroup>
                        <Popover content="Clique para visualizar">
                            <Image
                                src="/prova2.jpg"
                                alt="Imagem 2"
                            />
                        </Popover>

                    </Image.PreviewGroup>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Image.PreviewGroup>
                            <Popover content="Clique para visualizar">
                                <Image
                                    src="/prova3.jpg"
                                    alt="Imagem 2"
                                />
                            </Popover>

                        </Image.PreviewGroup>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Image.PreviewGroup>
                            <Popover content="Clique para visualizar">
                                <Image
                                    src="/prova4.jpg"
                                    alt="Imagem 2"
                                />
                            </Popover>

                        </Image.PreviewGroup>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Image.PreviewGroup>
                            <Popover content="Clique para visualizar">
                                <Image
                                    src="/prova5.jpg"
                                    alt="Imagem 2"
                                />
                            </Popover>

                        </Image.PreviewGroup>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Image.PreviewGroup>
                            <Popover content="Clique para visualizar">
                                <Image
                                    src="/prova6.jpg"
                                    alt="Imagem 2"
                                />
                            </Popover>

                        </Image.PreviewGroup>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Image.PreviewGroup>
                            <Popover content="Clique para visualizar">
                                <Image
                                    src="/prova7.jpg"
                                    alt="Imagem 2"
                                />
                            </Popover>

                        </Image.PreviewGroup>
                    </div>
                </Carousel>
            </div>
            <div className="parallax-container" style={{ height: '100vh' }}>
                <div className="parallax-image roleta" style={{ backgroundImage: `url('/image-background4.jpeg')` }}>
                    <div className="parallax-shadow"></div>
                    <div className="title-carousel" data-aos="zoom-in-up" data-aos-duration="2000">
                        <h1 style={{ color: '#5662F6', textAlign: 'center' }}>
                            <span style={{ color: '#fff', marginRight: '.5em' }}>OFERTA RELÂPAGO </span><ThunderboltOutlined style={{ color: '#5662F6', fontSize: '40px', fontWeight: 'bold' }} /></h1>
                    </div>
                    <div className="parallax-content">
                        <div className="content-services">
                            <List
                                dataSource={benefitsData}
                                renderItem={(item) => (
                                    <List.Item style={{ color: '#fff', fontSize: '20px' }}>
                                        <CheckOutlined style={{ color: '#5662F6', fontSize: '30px', fontWeight: 'bold' }} /> {item}
                                    </List.Item>
                                )}
                            />

                            <Button className="button" data-aos="zoom-in" data-aos-duration="2000">
                                Eu quero lucrar todos os dias
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
