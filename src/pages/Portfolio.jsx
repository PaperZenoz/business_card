import PageNavigation from "../components/PageNavigation";
const Portfolio = () => {
    return (
        <section className="portfolio">
            <h2>Портфолио сайтов</h2>
            <div className="portfolio__list">

                <a href="https://verbacapital.ru/" target="_blank" className="portfolio__item">
                    <div className="portfolio__img img">
                        <img src="images/portfolio/1.webp" alt="ВербаКапитал"/>
                    </div>
                    <strong>ВербаКапитал</strong>
                    Девелоперская лаборатория
                </a>

                <a href="https://www.royalpark.su/" target="_blank" className="portfolio__item">
                    <div className="portfolio__img img">
                        <img src="images/portfolio/2.webp" alt="Ройал Парк"/>
                    </div>
                    <strong>Ройал Парк</strong>
                    Торговый центр Новосибирска
                </a>

                <a href="https://xn--4-btb9ael2gc.xn--p1ai/" target="_blank" className="portfolio__item">
                    <div className="portfolio__img img">
                        <img src="images/portfolio/3.webp" alt="Смута"/>
                    </div>
                    <strong>Смута</strong>
                    Российская компьютерная игра
                </a>

                <a href="https://group-jv.ru/" target="_blank" className="portfolio__item">
                    <div className="portfolio__img img">
                        <img src="images/portfolio/4.webp" alt="Юлия Высоцкая"/>
                    </div>
                    <strong>Юлия Высоцкая</strong>
                    Актриса, телеведущая, бизнесвумен
                </a>

                <a href="https://goarbeauty.com/" target="_blank" className="portfolio__item">
                    <div className="portfolio__img img">
                        <img src="images/portfolio/5.webp" alt="Гоар Аветисян"/>
                    </div>
                    <strong>Гоар Аветисян</strong>
                    Магазин косметики
                </a>

                <a href="https://interline.ru/" target="_blank" className="portfolio__item">
                    <div className="portfolio__img img">
                        <img src="images/portfolio/6.webp" alt="ИнтерЛайн"/>
                    </div>
                    <strong>ИнтерЛайн</strong>
                    Официальный дилер китайской спецтехники
                </a>

                <a href="https://botanika22.ru/" target="_blank" className="portfolio__item">
                    <div className="portfolio__img img">
                        <img src="images/portfolio/7.webp" alt="Ботаника: Фрисова слобода"/>
                    </div>
                    <strong>Ботаника: Фрисова слобода</strong>
                    Жилой комплекс
                </a>

                <a href="https://kunjut.com/" target="_blank" className="portfolio__item">
                    <div className="portfolio__img img">
                        <img src="images/portfolio/8.webp" alt="Кунжут"/>
                    </div>
                    <strong>Кунжут</strong>
                    Дизайнерская одежда
                </a>

                <a href="https://cuvee.style/" target="_blank" className="portfolio__item">
                    <div className="portfolio__img img">
                        <img src="images/portfolio/9.webp" alt="CUVEE"/>
                    </div>
                    <strong>CUVEE</strong>
                    Магазин женской одежды из Италии
                </a>

                <a href="https://usconsult.group/" target="_blank" className="portfolio__item">
                    <div className="portfolio__img img">
                        <img src="images/portfolio/10.webp" alt="Юсконсалт"/>
                    </div>
                    <strong>Юсконсалт</strong>
                    Юридическая консалтинговая компания
                </a>

                <a href="https://a550.ru/" target="_blank" className="portfolio__item">
                    <div className="portfolio__img img">
                        <img src="images/portfolio/11.webp" alt="a550"/>
                    </div>
                    <strong>a550</strong>
                    Колеса и колесные опоры для тележек и складское оборудование
                </a>

                <a href="https://profcampus.ru/" target="_blank" className="portfolio__item">
                    <div className="portfolio__img img">
                        <img src="images/portfolio/12.webp" alt="Университет ИТБО"/>
                    </div>
                    <strong>Университет ИТБО</strong>
                    Университет информационных технологий и бизнес-образования
                </a>

                <a href="https://www.rosintegracija.ru/" target="_blank" className="portfolio__item">
                    <div className="portfolio__img img">
                        <img src="images/portfolio/13.webp" alt="РосИнтеграция"/>
                    </div>
                    <strong>РосИнтеграция</strong>
                    Федеральный ИТ-холдинг
                </a>

                <a href="https://rosmet-nsk.ru/" target="_blank" className="portfolio__item">
                    <div className="portfolio__img img">
                        <img src="images/portfolio/14.webp" alt="Росмет (Wordpress)"/>
                    </div>
                    <strong>Росмет (Wordpress)</strong>
                    Приём металлолома в Новосибирске
                </a>

                <a href="https://nsksp.ru/" target="_blank" className="portfolio__item">
                    <div className="portfolio__img img">
                        <img src="images/portfolio/15.webp" alt="Стройплатформа (Wordpress)"/>
                    </div>
                    <strong>Стройплатформа (Wordpress)</strong>
                    Услуги и изделия для строительства
                </a>

            </div>
            <div className="portfolio__more">
                И множество других проектов разной сложности, масштаба и безумия
            </div>
            <PageNavigation currentPage="/portfolio" />
        </section>
    );
};
export default Portfolio;


