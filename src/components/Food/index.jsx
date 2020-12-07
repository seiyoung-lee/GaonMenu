import React, {useState, useEffect} from 'react';

import { useStaticQuery, graphql } from "gatsby";
import CustomContainer from '../partials/CustomContainer';
import OverViewModal from '../Modal/OverView';

import FoodLayout from './FoodLayout';

import EntradaData from './FoodData/entradas';
import VacunoData from './FoodData/Vacuno';
import PolloData from './FoodData/pollo';
import CerdoData from './FoodData/cerdo';
import Postres from './FoodData/postres';
import Tofu from './FoodData/tofu';
import Fideos from './FoodData/fideos';
import Mariscos from './FoodData/mariscos';
import Tipical from './FoodData/tipical';
import Bebidas from './FoodData/bebidas';
import Arroz from './FoodData/rice';
import Juk from './FoodData/juk';
import Sides from './FoodData/sides';
import Alcohol from './FoodData/alcohol';
import Special from './FoodData/special';

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import './styles.scss';

const Food = (props) => {
    const [expanded, setExpanded] = useState(false);
    const [overView, setOverView] = useState(false);
    const [modalInfo, setModalInfo] = useState({"text": "", "title": "", "img" : "", "price" : ""});
    
    

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
        props.scroll(panel);
    };

    useEffect(() => {
        if(modalInfo["title"] !== "") {
            setOverView(true);
        }
    }, [modalInfo])


      const data = useStaticQuery(
        graphql`
          query allTheImagesQuery{
            allImageSharp {
              edges {
                node {
                  fluid(maxWidth:1000) {
                    ...GatsbyImageSharpFluid
                    originalName
                  }
                }
              }
            }
          }`,
      );
    return(
        <div className = "foodOuter" >
            <CustomContainer>
            <center>
                <h1 style = {{textTransform: "uppercase"}} className = "title"> Nuestro Menu <br />
                    <small style = {{textTransform: "unset"}} > Selecciona  la  comida  que  quieras  para  agrandar </small>
                </h1>
            </center>
            <OverViewModal 
                open = {overView}
                handleClose = {() => {
                    setOverView(false);
                    setModalInfo({"text": "", "title": "", "img" : "", "price" : ""});
                }}
                img = {modalInfo["img"]}
                desc = {modalInfo["text"]}
                title = {modalInfo["title"]}
                price  = {modalInfo["price"]}
                data = {data.allImageSharp.edges} 
            />
            <Accordion expanded={expanded === 'entrada'} onChange={handleChange('entrada')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                >
                    {!(expanded === 'entrada') && <p >Entradas</p>}
                    {!(expanded === 'entrada') && <p >전체 요리</p>}
                </AccordionSummary>
                <AccordionDetails>
                    <div className = "titleOut">
                        <h1 className = "titleIn">
                            Entradas <br /> <br />
                            전체 요리
                        </h1>
                    </div>
                    {EntradaData.map((food) => (
                        <FoodLayout
                        data = {data.allImageSharp.edges} 
                        image = {food.image}
                        title = {food.title}
                        description = {food.description}
                        price = {food.price}
                        onClick = {() => {
                            setModalInfo({
                                "text": food.description, 
                                "title": food.title, 
                                "img" : food.image,
                                "price" : food.price
                            })
                        }}
                        />
                    ))}
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'side'} onChange={handleChange('side')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                >
                 {!(expanded === 'side') && 
                    <p >Acompañamientos</p>
                }
                {!(expanded === 'side') && 
                 <p >추가/반찬</p>
                }
                </AccordionSummary>
                <AccordionDetails>
                    <div className = "titleOut">
                        <h1 className = "titleIn">
                            Acompañamientos <br /> <br />
                            추가/반찬
                        </h1>
                    </div>
                    {Sides.map((food) => (
                        <FoodLayout
                        data = {data.allImageSharp.edges} 
                        image = {food.image}
                        title = {food.title}
                        description = {food.description}
                        price = {food.price}
                        onClick = {() => {
                            setModalInfo({
                                "text": food.description, 
                                "title": food.title, 
                                "img" : food.image,
                                "price" : food.price
                            })
                        }}
                        />
                    ))}
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'vacuno'} onChange={handleChange('vacuno')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                >
                {!(expanded === 'vacuno') && 
                    <p >Vacuno</p>
                }
                {!(expanded === 'vacuno') && 
                 <p >소고기 류</p>
                }
                </AccordionSummary>
                <AccordionDetails>
                    <div className = "titleOut">
                        <h1 className = "titleIn">
                            Vacuno <br /> <br />
                            소고기 류
                        </h1>
                    </div>
                    {VacunoData.map((food) => (
                        <FoodLayout
                        data = {data.allImageSharp.edges} 
                        image = {food.image}
                        title = {food.title}
                        description = {food.description}
                        price = {food.price}
                        onClick = {() => {
                            setModalInfo({
                                "text": food.description, 
                                "title": food.title, 
                                "img" : food.image,
                                "price" : food.price
                            })
                        }}
                        />
                    ))}
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'cerdo'} onChange={handleChange('cerdo')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                >
                 {!(expanded === 'cerdo') && 
                    <p >Cerdo</p>
                }
                {!(expanded === 'cerdo') && 
                 <p >돼지고기 류</p>
                }
                </AccordionSummary>
                <AccordionDetails>
                    <div className = "titleOut">
                        <h1 className = "titleIn">
                            Cerdo <br /> <br />
                            돼지고기 류
                        </h1>
                    </div>
                    {CerdoData.map((food) => (
                        <FoodLayout
                        data = {data.allImageSharp.edges} 
                        image = {food.image}
                        title = {food.title}
                        description = {food.description}
                        price = {food.price}
                        onClick = {() => {
                            setModalInfo({
                                "text": food.description, 
                                "title": food.title, 
                                "img" : food.image,
                                "price" : food.price
                            })
                        }}
                        />
                    ))}
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'pollo'} onChange={handleChange('pollo')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                >
                 {!(expanded === 'pollo') && 
                    <p >Pollo</p>
                }
                {!(expanded === 'pollo') && 
                 <p >닭</p>
                }
                </AccordionSummary>
                <AccordionDetails>
                    <div className = "titleOut">
                        <h1 className = "titleIn">
                            Pollo <br /> <br />
                            닭
                        </h1>
                    </div>
                    {PolloData.map((food) => (
                        <FoodLayout
                        data = {data.allImageSharp.edges} 
                        image = {food.image}
                        title = {food.title}
                        description = {food.description}
                        price = {food.price}
                        onClick = {() => {
                            setModalInfo({
                                "text": food.description, 
                                "title": food.title, 
                                "img" : food.image,
                                "price" : food.price
                            })
                        }}
                        />
                    ))}
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'sea'} onChange={handleChange('sea')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                >
                 {!(expanded === 'sea') && 
                    <p >Pescado Y Mariscos</p>
                }
                {!(expanded === 'sea') && 
                 <p >생선 요리</p>
                }
                </AccordionSummary>
                <AccordionDetails>
                    <div className = "titleOut">
                        <h1 className = "titleIn">
                            Pescado Y Mariscos <br /> <br />
                            생선 요리
                        </h1>
                    </div>
                    {Mariscos.map((food) => (
                        <FoodLayout
                        data = {data.allImageSharp.edges} 
                        image = {food.image}
                        title = {food.title}
                        description = {food.description}
                        price = {food.price}
                        onClick = {() => {
                            setModalInfo({
                                "text": food.description, 
                                "title": food.title, 
                                "img" : food.image,
                                "price" : food.price
                            })
                        }}
                        />
                    ))}
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'special'} onChange={handleChange('special')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                >
                 {!(expanded === 'special') && 
                    <p >Menu Especial</p>
                }
                {!(expanded === 'special') && 
                 <p >스페셜 메뉴</p>
                }
                </AccordionSummary>
                <AccordionDetails>
                    <div className = "titleOut">
                        <h1 className = "titleIn">
                            Menu Espsecial <br /> <br />
                            스페셜 메뉴
                        </h1>
                    </div>
                    {Special.map((food) => (
                        <FoodLayout
                        data = {data.allImageSharp.edges} 
                        image = {food.image}
                        title = {food.title}
                        description = {food.description}
                        price = {food.price}
                        onClick = {() => {
                            setModalInfo({
                                "text": food.description, 
                                "title": food.title, 
                                "img" : food.image,
                                "price" : food.price
                            })
                        }}
                        />
                    ))}
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'tipical'} onChange={handleChange('tipical')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                >
                 {!(expanded === 'tipical') && 
                    <p >Tipica Comida Coreana</p>
                }
                {!(expanded === 'tipical') && 
                 <p >전통 한국 음식</p>
                }
                </AccordionSummary>
                <AccordionDetails>
                    <div className = "titleOut">
                        <h1 className = "titleIn">
                            Tipica Comida Coreana <br /> <br />
                            전통 한국 음식
                        </h1>
                    </div>
                    {Tipical.map((food) => (
                        <FoodLayout
                        data = {data.allImageSharp.edges} 
                        image = {food.image}
                        title = {food.title}
                        description = {food.description}
                        price = {food.price}
                        onClick = {() => {
                            setModalInfo({
                                "text": food.description, 
                                "title": food.title, 
                                "img" : food.image,
                                "price" : food.price
                            })
                        }}
                        />
                    ))}
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'noodles'} onChange={handleChange('noodles')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                >
                 {!(expanded === 'noodles') && 
                    <p >Fideos</p>
                }
                {!(expanded === 'noodles') && 
                 <p >면 종류</p>
                }
                </AccordionSummary>
                <AccordionDetails>
                    <div className = "titleOut">
                        <h1 className = "titleIn">
                            Fideos <br />  <br />
                            면 종류
                        </h1>
                    </div>
                    {Fideos.map((food) => (
                        <FoodLayout
                        data = {data.allImageSharp.edges} 
                        image = {food.image}
                        title = {food.title}
                        description = {food.description}
                        price = {food.price}
                        onClick = {() => {
                            setModalInfo({
                                "text": food.description, 
                                "title": food.title, 
                                "img" : food.image,
                                "price" : food.price
                            })
                        }}
                        />
                    ))}
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'rice'} onChange={handleChange('rice')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                >
                 {!(expanded === 'rice') && 
                    <p >Arroz</p>
                }
                {!(expanded === 'rice') && 
                 <p >밥</p>
                }
                </AccordionSummary>
                <AccordionDetails>
                    <div className = "titleOut">
                        <h1 className = "titleIn">
                            Arroz <br />  <br />
                            밥
                        </h1>
                    </div>
                    {Arroz.map((food) => (
                        <FoodLayout
                        data = {data.allImageSharp.edges} 
                        image = {food.image}
                        title = {food.title}
                        description = {food.description}
                        price = {food.price}
                        onClick = {() => {
                            setModalInfo({
                                "text": food.description, 
                                "title": food.title, 
                                "img" : food.image,
                                "price" : food.price
                            })
                        }}
                        />
                    ))}
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'tofu'} onChange={handleChange('tofu')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                >
                 {!(expanded === 'tofu') && 
                    <p >Tofu</p>
                }
                {!(expanded === 'tofu') && 
                 <p >두부 요리</p>
                }
                </AccordionSummary>
                <AccordionDetails>
                    <div className = "titleOut">
                        <h1 className = "titleIn">
                            Tofu <br /> <br />
                            두부 요리
                        </h1>
                    </div>
                    {Tofu.map((food) => (
                        <FoodLayout
                        data = {data.allImageSharp.edges} 
                        image = {food.image}
                        title = {food.title}
                        description = {food.description}
                        price = {food.price}
                        onClick = {() => {
                            setModalInfo({
                                "text": food.description, 
                                "title": food.title, 
                                "img" : food.image,
                                "price" : food.price
                            })
                        }}
                        />
                    ))}
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'porridge'} onChange={handleChange('porridge')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                >
                 {!(expanded === 'pollo') && 
                    <p >Juk</p>
                }
                {!(expanded === 'pollo') && 
                 <p >죽</p>
                }
                </AccordionSummary>
                <AccordionDetails>
                    <div className = "titleOut">
                        <h1 className = "titleIn">
                            Juk <br /> <br />
                            죽
                        </h1>
                    </div>
                    {Juk.map((food) => (
                        <FoodLayout
                        data = {data.allImageSharp.edges} 
                        image = {food.image}
                        title = {food.title}
                        description = {food.description}
                        price = {food.price}
                        onClick = {() => {
                            setModalInfo({
                                "text": food.description, 
                                "title": food.title, 
                                "img" : food.image,
                                "price" : food.price
                            })
                        }}
                        />
                    ))}
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'postre'} onChange={handleChange('postre')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                >
                 {!(expanded === 'postre') && 
                    <p >Postres</p>
                }
                {!(expanded === 'postre') && 
                 <p >후식</p>
                }
                </AccordionSummary>
                <AccordionDetails>
                    <div className = "titleOut">
                        <h1 className = "titleIn">
                            Postres <br /> <br />
                            후식
                        </h1>
                    </div>
                    {Postres.map((food) => (
                        <FoodLayout
                        data = {data.allImageSharp.edges} 
                        image = {food.image}
                        title = {food.title}
                        description = {food.description}
                        price = {food.price}
                        onClick = {() => {
                            setModalInfo({
                                "text": food.description, 
                                "title": food.title, 
                                "img" : food.image,
                                "price" : food.price
                            })
                        }}
                        />
                    ))}
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'bebidas'} onChange={handleChange('bebidas')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                >
                 {!(expanded === 'bebidas') && 
                    <p >Bebidas</p>
                }
                {!(expanded === 'bebidas') && 
                 <p >음료수/술</p>
                }
                </AccordionSummary>
                <AccordionDetails>
                    <div className = "titleOut">
                        <h1 className = "titleIn">
                            Bebidas <br />  <br /> 음료수
                        </h1>
                    </div>
                    {Bebidas.map((food) => (
                        <FoodLayout
                        data = {data.allImageSharp.edges} 
                        image = {food.image}
                        title = {food.title}
                        description = {food.description}
                        price = {food.price}
                        onClick = {() => {
                            setModalInfo({
                                "text": food.description, 
                                "title": food.title, 
                                "img" : food.image,
                                "price" : food.price
                            })
                        }}
                        />
                    ))}
                    <div className = "border"/>
                    <div className = "titleOut">
                        <h1 className = "titleIn">
                            Bebidas Alcoholicas <br /> <br /> 술
                        </h1>
                    </div>
                    {Alcohol.map((food) => (
                        <FoodLayout
                        data = {data.allImageSharp.edges} 
                        image = {food.image}
                        title = {food.title}
                        description = {food.description}
                        price = {food.price}
                        onClick = {() => {
                            setModalInfo({
                                "text": food.description, 
                                "title": food.title, 
                                "img" : food.image,
                                "price" : food.price
                            })
                        }}
                        />
                    ))}
                </AccordionDetails>
            </Accordion>
            </CustomContainer>
        </div>
    );
}

export default Food;