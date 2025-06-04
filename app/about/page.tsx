// app/about/page.tsx
import Image from "next/image";
import Navbar from "../../components/Navbar";
import "./about.css";
import Footer from "@/components/Footer";

export default function About() {
    return (
        <>
            <Navbar />
            <main>
                <div className="about-container">
                    <Image
                        src="/DK_Photo.png"
                        alt="Profil Fotoğrafı"
                        width={220}
                        height={220}
                        className="profile-img"
                        priority
                    />
                    <div className="about-info">
                        <div className="about-title-row">
                            Ben Kimim ?
                        </div>
                        <div className="about-desc">
                            Merhaba, ben Dorukhan. Samimi, sade ve sakin biriyim. Konuşmayı da dinlemeyi de severim. Bazen tembellik etsem de başladığım bir işi yarım bırakmak içime sinmez.<br /><br />
                            Hayal gücümü kullanarak bir şeyler üretmek, küçük yaşlardan beri beni en çok motive eden şey oldu. Bu ilgi zamanla beni grafik tasarım, 3D modelleme ve yazılıma yönlendirdi. Görsel anlatımın farklı yollarını keşfetmek hoşuma gidiyor.<br /><br />
                            Projelerde detaylara dikkat ederim. Hem bütünün hem de küçük parçaların birbiriyle uyumlu olmasına önem veririm. Yaratıcılıkla teknolojiyi bir araya getirdiğim her projede, hem kendimi hem de sınırlarımı yeniden keşfetmeye çalışıyorum. Üretmeyi seviyorum, öğrenmeye ise hiç ara vermiyorum.
                        </div>
                        <div className="about-motto">
                            “Failure is simply the opportunity to begin again, this time more intelligently.”
                            <br />
                            (“Başarısızlık, yalnızca yeniden başlamak için bir fırsattır — bu kez daha akıllıca.")
                            <br />
                            — &nbsp;Henry Ford
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

/*

Yıl	Deneyim
2016	Yıldız Teknik Üniversitesi – Harita ve Kadastro Önlisans
2017–2018	Harita sektöründe saha ve ofis çalışmaları
2018–2021	Grafik tasarım ofisinde kreatif işler
2021–Günümüz	Freelance grafik tasarım, arayüz tasarımı ve 3D modelleme

*/