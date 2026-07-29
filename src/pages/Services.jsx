import PageNavigation from "../components/PageNavigation";
const Services = () => {
    return (
        <section className="services">
            <h2>Товары и услуги</h2>
            <img src="images/services/1.webp" alt="Раздел в разработке"/>
            <div className="services__more">Раздел в разработке</div>
            <PageNavigation currentPage="/services" />
        </section>
    );
};
export default Services; 
