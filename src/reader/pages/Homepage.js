import {articleMapper} from "../helpers/listPublications";
import {
    ArticleTitle,
    HomeGrid,
    HomeHeader,
    HomeImage,
    HomeSection,
    HomeTitle,
    HomeWrapper, TitleContainer
} from "../styled/Homepage.styled";
import LittThumbnail_Mars2023 from "../helpers/thumbnails/litt_amelie_nothomb_0323.jpg";
import MusiqueThumbnail_Mars2023 from "../helpers/thumbnails/musique_laylow_0323.jpg";
import PhiloThumbnail_Mars2023 from "../helpers/thumbnails/philo_machine_experience_0323.jpg";
import ArtThumbnail_Mars2023 from "../helpers/thumbnails/art_ivan_le_terrible_0323.jpg";
import ActuThumbnail_Mars2023 from "../helpers/thumbnails/actu_chine_vs_us_tensions_0323.jpg";
import PopculThumbnail_Mars2023 from "../helpers/thumbnails/popcul_flowers_0323.jpg";
import AstroThumbnail_Mars2023 from "../helpers/thumbnails/astro_outil_connaissance_soi_0323.jpeg";
import CineThumbnail_Mars2023 from "../helpers/thumbnails/cine_batman_hero_decennies_0323.jpeg";
import PhiloBisThumbnail_Mars2023 from "../helpers/thumbnails/philo_reve_metaphysique_physiologie_0323.jpg";
import MicroThumbnail_Mars2023 from "../helpers/thumbnails/micro_oeuvre_independante_artiste_0323.jpg";
import SportThumbnail_Mars2023 from "../helpers/thumbnails/sport_chan_0323.jpg";
import ItvThumbnail_Mars2023 from "../helpers/thumbnails/itv_vauthier_0323.JPG";

function redirect(id){
    window.location.replace('https://lagazettedeleon.social/article/'+id);
}

function Homepage() {
    return(
            <HomeWrapper>
                <HomeHeader>
                    <HomeTitle>La Gazette de Léon</HomeTitle>
                </HomeHeader>
                <HomeGrid>
                    <HomeSection xAxis={"1"} yAxis={"1/3"} onClick={()=>redirect("litt_amelie_nothomb_0323")}>
                        <HomeImage src={LittThumbnail_Mars2023}/>
                        <TitleContainer>
                            <ArticleTitle>Littérature: Amélie Nothomb.</ArticleTitle>
                        </TitleContainer>
                    </HomeSection>
                    <HomeSection xAxis={"2"} yAxis={"1/4"} onClick={()=>redirect("musique_laylow_0323")}>
                        <HomeImage src={MusiqueThumbnail_Mars2023}/>
                        <TitleContainer>
                            <ArticleTitle>Musique: analyse de Laylow.</ArticleTitle>
                        </TitleContainer>
                    </HomeSection>
                    <HomeSection xAxis={"1"} yAxis={"3/6"} onClick={()=>redirect("philo_machine_experience_0323")}>
                        <HomeImage src={PhiloThumbnail_Mars2023}/>
                        <TitleContainer>
                            <ArticleTitle>Philosophie: la machine à bonheur de Nozick.</ArticleTitle>
                        </TitleContainer>
                    </HomeSection>
                    <HomeSection xAxis={"2"} yAxis={"4/6"} onClick={()=>redirect("art_ivan_le_terrible_0323")}>
                        <HomeImage src={ArtThumbnail_Mars2023}/>
                        <TitleContainer>
                            <ArticleTitle>Art: Yvan Le Terrible tue son fils.</ArticleTitle>
                        </TitleContainer>
                    </HomeSection>
                    <HomeSection xAxis={"1/3"} yAxis={"6/8"} onClick={()=>redirect("actu_chine_vs_us_tensions_0323")}>
                        <HomeImage src={ActuThumbnail_Mars2023}/>
                        <TitleContainer>
                            <ArticleTitle>Actualité: Conflit entre la Chine et les États-Unis.</ArticleTitle>
                        </TitleContainer>
                    </HomeSection>
                    <HomeSection xAxis={"1"} yAxis={"8/10"} onClick={()=>redirect("popcul_flowers_0323")}>
                        <HomeImage src={PopculThumbnail_Mars2023}/>
                        <TitleContainer>
                            <ArticleTitle>Pop-culture: Miley Cyrus & Liam Hemsworth.</ArticleTitle>
                        </TitleContainer>
                    </HomeSection>
                    <HomeSection xAxis={"2"} yAxis={"8/10"} onClick={()=>redirect("astro_outil_découverte_soi_0323")}>
                        <HomeImage src={AstroThumbnail_Mars2023}/>
                        <TitleContainer>
                            <ArticleTitle>Astrologie: Un outil de découverte de soi.</ArticleTitle>
                        </TitleContainer>
                    </HomeSection>
                    <HomeSection xAxis={"1/3"} yAxis={"10/12"} onClick={()=>redirect("cine_batman_hero_decennies_0323")}>
                        <HomeImage src={CineThumbnail_Mars2023}/>
                        <TitleContainer>
                            <ArticleTitle>Cinéma: Batman, un héro traversant les décennies du cinéma.</ArticleTitle>
                        </TitleContainer>
                    </HomeSection>
                    <HomeSection xAxis={"1/3"} yAxis={"12/14"} onClick={()=>redirect("philo_reve_metaphysique_physiologie_0323")}>
                        <HomeImage src={PhiloBisThumbnail_Mars2023}/>
                        <TitleContainer>
                            <ArticleTitle>Philosophie: le rêve, entre manifestation métaphysique et phénomène physiologique.</ArticleTitle>
                        </TitleContainer>
                    </HomeSection>
                    <HomeSection xAxis={"1"} yAxis={"14/16"} onClick={()=>redirect("micro_oeuvre_independante_artiste_0323")}>
                        <HomeImage src={MicroThumbnail_Mars2023}/>
                        <TitleContainer>
                            <ArticleTitle>Micro-troittoir: faut-il séparer l'œuvre de l'artiste?</ArticleTitle>
                        </TitleContainer>
                    </HomeSection>
                    <HomeSection xAxis={"2"} yAxis={"14/16"} onClick={()=>redirect("sport_chan_0323")}>
                        <HomeImage src={SportThumbnail_Mars2023}/>
                        <TitleContainer>
                            <ArticleTitle>Sport: La CHAN 2023.</ArticleTitle>
                        </TitleContainer>
                    </HomeSection>
                    <HomeSection xAxis={"1/3"} yAxis={"16/18"} onClick={()=>redirect("videos/itv_mme_vauthier_0323")}>
                        <HomeImage src={ItvThumbnail_Mars2023}/>
                        <TitleContainer>
                            <ArticleTitle>ActuLéon: CVL, LéoClub, Interview.</ArticleTitle>
                        </TitleContainer>
                    </HomeSection>
                </HomeGrid>
            </HomeWrapper>

    )
}

export default Homepage;