import React from "react";

interface AboutSectionProps {
    aboutRef: React.RefObject<HTMLElement | null>;
}

export default function AboutSection({ aboutRef }: AboutSectionProps) {
    return (
        <section
            id="about"
            ref={aboutRef}
            className="onepage-section"
        >
            <p style={{ margin: 0 }}>
                Grafik tasarım, 3D modelleme ve web teknolojilerine ilgi duyan, görsel ve teknik üretimin kesişim noktasında çalışmaktan keyif alan biriyim. Estetik ve işlevselliği bir araya getiren projeler üretmeyi seviyorum.
                <br /><br />
                Tasarım odaklı düşünmeye, kullanıcı deneyimini önemsemeye ve detaylara dikkat etmeye özen gösteririm. Her işin, küçük parçaların uyumuyla güçlendiğine inanıyorum.
                <br /><br />
                Şu anda ağırlıklı olarak front-end geliştirme, arayüz tasarımı ve 3D projeler üzerine çalışıyorum. Kullandığım araçlar arasında React, Blender, Illustrator ve modern web teknolojileri yer alıyor.
                <br /><br />
                Yaratıcılıkla teknolojiyi bir araya getirdiğim her projede hem üretmenin hem de öğrenmenin heyecanını yaşıyorum. Merak ettikçe araştırıyor, başladığım işi tamamlamadan rahat edemiyorum.
            </p>

        </section>
    );
}