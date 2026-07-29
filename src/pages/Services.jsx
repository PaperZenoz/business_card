import PageNavigation from "../components/PageNavigation";
const Services = () => {
    return (
        <div className="services">
            <h2>Товары и услуги</h2>
            <img loading="lazy" src="images/services/1.webp" alt="Раздел в разработке" />
            <div className="services__more">Раздел в разработке</div>
            <PageNavigation currentPage="/services" />
        </div>
    );
};
export default Services;
