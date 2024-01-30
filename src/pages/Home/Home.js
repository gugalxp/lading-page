import { Button, Carousel, Image, List } from "antd";
import { CheckOutlined, TrophyOutlined } from '@ant-design/icons';

export function Home() {


    const benefitsData = [
        'Sinais Assertivos',
        'Lives Operacionais que ensinam as pessoas a lerem a plataforma',
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
                                </span> dos sinais de branco. O MAIOR DO MUNDO! 🌍
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
                    <div className="title-carousel" data-aos="zoom-in-up" data-aos-duration="2000">
                        <h1 style={{ color: '#5662F6', textAlign: 'center' }}>
                            <span style={{ color: '#fff', marginRight: '.5em' }}>Benefícios</span><TrophyOutlined /></h1>
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

            <div className="title-carousel" data-aos="zoom-in-up" data-aos-duration="2000">
                <h1 style={{ color: '#5662F6', textAlign: 'center' }}>Blaze <span style={{ color: '#fff' }}>pagando</span> 🔥</h1>
            </div>
            <div className="spacer" data-aos-duration="2000" data-aos="fade-up">
                <Carousel slidesToShow={2} speed={2000} autoplay infinite={true} autoplaySpeed={1000} style={{ height: '100%' }}>
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
        </div>
    );
}
